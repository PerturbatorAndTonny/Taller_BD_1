import { newArticle } from '../model/db/article.js'

export const createArticle = async (req, res) => {
  try {
    const articleData = {
      ...req.body,
      publishedYear: parseInt(req.body.publishedYear) //esta parte valida que el año sea un numero entero, si no lo es, se lanzara un error
    };

    await newArticle(req.body);

    //se redirige a la ruta raiz para que pueda consultar la BD y se muestre el nuevo articulo.
  res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar la solicitud");
  }
}
