import express from "express";
import * as dotenv from 'dotenv';
import { QuizController } from "./controllers/quiz.controller";

class App {

    public express: express.Application;
    public quizController: QuizController;


    constructor() {
        dotenv.config()
        this.express = express();
        this.routes();
        this.quizController = new QuizController();
    }

    private routes(): void {

        this.express.get('/api/quizzes', (req, res) => {
            this.quizController.getQuizzes().then(data => res.json(data));
        });
        
        this.express.post('/api/quiz', (req, res) => {
            console.log(req.body);
            this.quizController.createQuiz(req.body.quiz).then(data => res.json(data));
        });
        
        this.express.put('/api/quiz', (req, res) => {
            this.quizController.updateQuiz(req.body.quiz).then(data => res.json(data));
        });
        
        this.express.delete('/api/quiz/:id', (req, res) => {
            this.quizController.deleteQuiz(parseInt(req.params.id ?? "0")).then(data => res.json(data));
        });

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;