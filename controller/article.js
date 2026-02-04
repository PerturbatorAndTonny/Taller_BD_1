import { newArticle } from '../model/db/article.js'

export const createArticle = async (req, res) => {
  try {
    await newArticle(req.body);
    res.redirect("https://www.google.com.co/index.html")
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear usuario");
  }
}
