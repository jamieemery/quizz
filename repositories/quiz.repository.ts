import { connect } from "../config/db.config";
import { Quiz } from "../models/quiz.model";

export class QuizRepository {

    private db: any = {};
    private quizRespository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.quizRespository = this.db.sequelize.getRepository(Quiz);
    }

    async getQuizzes() {
        
        try {
            const quizzes = await this.quizRespository.findAll();
            console.log('tasks:::', quizzes);
            return quizzes;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createQuiz(quiz: Quiz) {
        let data = {};
        try {
            quiz.createdAt = new Date().toISOString();
            data = await this.quizRespository.create(quiz);
        } catch(err) {
            console.log("Error creating quiz.");
        }
        return data;
    }

    async updateQuiz(quiz: Quiz) {
        let data = {};
        try {
            data = await this.quizRespository.update({...quiz}, {
                where: {
                    id: quiz.id
                }
            });
        } catch(err) {
            console.log("Error updating quiz.");
        }
        return data;
    }

    async deleteQuiz(quizId: number) {
        let data = {};
        try {
            data = await this.quizRespository.destroy({
                where: {
                    id: quizId
                }
            });
        } catch(err) {
            console.log("Error deleting quiz.");
        }
        return data;
    }

}