import { newArticle } from '../model/db/article.js'
import { sqliteConnector } from '../drizzle.config.js'; 
import { articleTable } from '../model/db/schema.js';
import { eq } from 'drizzle-orm';

// CARGAR PÁGINA CON DATOS PARA EDITAR
export const getEditPage = async (req, res) => {
    try {
        const id = req.params.id;
        const allArticles = await sqliteConnector.select().from(articleTable);
        const articleToEdit = allArticles.find(a => a.id == id);
        res.render('index', { articles: allArticles, editArticle: articleToEdit });
    } catch (error) {
        res.redirect("/");
    }
};

// CREAR ARTÍCULO
export const createArticle = async (req, res) => {
    try {
        await newArticle(req.body);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al crear");
    }
};

// ACTUALIZAR (EDITAR)
export const updateArticle = async (req, res) => {
    try {
        const { id, ...data } = req.body;
        // Aseguramos que el año sea número
        data.publishYear = parseInt(data.publishYear);
        
        await sqliteConnector.update(articleTable)
            .set(data)
            .where(eq(articleTable.id, id));
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al actualizar");
    }
};
 
// ELIMINAR
export const deleteArticle = async (req, res) => {
    try {
        await sqliteConnector.delete(articleTable).where(eq(articleTable.id, req.params.id));
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error al eliminar");
    }
};