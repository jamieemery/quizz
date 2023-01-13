import { Quiz } from '../models/quiz.model';
import { QuizRepository } from '../repositories/quiz.repository';


export class QuizService {

    private quizRepository: QuizRepository;

    constructor() {
        this.quizRepository = new QuizRepository();
    }

    async getQuizzes() {
        return await this.quizRepository.getQuizzes();
    }

    async createQuiz(quiz: Quiz) {
        return await this.quizRepository.createQuiz(quiz);
    }

    async updateQuiz(quiz: Quiz) {
        return await this.quizRepository.updateQuiz(quiz);
    }

    async deleteQuiz(quizId: number) {
        return await this.quizRepository.deleteQuiz(quizId);
    }

}