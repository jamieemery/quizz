import { Quiz } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';

export class QuizController {

    private quizService: QuizService;

    constructor() {
        this.quizService = new QuizService();
    }

    async getQuizzes() {
        return await this.quizService.getQuizzes();
    }

    async createQuiz(quiz: Quiz) {
        return await this.quizService.createQuiz(quiz);
    }

    async updateQuiz(quiz: Quiz) {
        return await this.quizService.updateQuiz(quiz);
    }

    async deleteQuiz(quizId: number) {
        return await this.quizService.deleteQuiz(quizId);
    }
}