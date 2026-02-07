import { Router } from 'express';
import { createArticle } from '../controller/article.js';
import { db } from '../model/db/index.js'; 
import { articlesTable } from '../model/db/schema.js';

const articleRouter = Router();

// 1. RUTA PARA MOSTRAR EL SOFTWARE
// Esta parte se encarga de leer los artículos de la DB y pasarlos al HTML
articleRouter.get('/', async (req, res) => {
    try {

        // Consulta todos los artículos guardados
        const allArticles = await db.select().from(articlesTable);
        res.render('index', { articles: allArticles });
    } catch (error) {
        console.error("Error al obtener artículos:", error);

        // Si hay error, se envia la lista vacía impidiendo que se rompa la interfaz
        res.render('index', { articles: [] });
    }
});

// 2. RUTA PARA CREAR (El "CRUD")
articleRouter.post("/newArticle", createArticle);

export default articleRouter;
