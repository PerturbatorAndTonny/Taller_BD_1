import express, { Router } from 'express';
import { createArticle } from '../controller/article.js'

const articleRouter = Router();

articleRouter.post("/newArticle", createArticle);

export default articleRouter
