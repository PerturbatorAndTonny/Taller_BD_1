import { Router } from 'express';
import { createArticle, deleteArticle, getEditPage, updateArticle } from '../controller/article.js';
import { sqliteConnector } from '../drizzle.config.js'; 
import { articleTable } from '../model/db/schema.js';

const articleRouter = Router();

// RUTA PRINCIPAL (Mostramos todo y modo 'crear')
articleRouter.get('/', async (req, res) => {
    try {
        const allArticles = await sqliteConnector.select().from(articleTable);
        res.render('index', { articles: allArticles, editArticle: null });
    } catch (error) {
        res.render('index', { articles: [], editArticle: null });
    }
});

// RUTAS CRUD
articleRouter.get('/edit/:id', getEditPage);      // Carga datos en el form
articleRouter.post("/newArticle", createArticle);  // Guarda nuevo
articleRouter.post("/updateArticle", updateArticle); // Guarda cambios
articleRouter.get("/delete/:id", deleteArticle);     // Elimina

// 3. RUTA PARA ACTUALIZAR ("CRUD").
articleRouter.post("/article/update/:id", updateArticleController);

// 4. RUTA PARA ELIMINAR ("CRUD").
articleRouter.post("/article/delete/:id", deleteArticleController);
export default articleRouter;