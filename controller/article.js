import { newArticle, updateArticle, deleteArticle } from '../model/db/article.js'

export const createArticle = async (req, res) => {
  try {
    const articleData = {
      ...req.body,
      publishYear: parseInt(req.body.publishYear) //esta parte valida que el año sea un numero entero, si no lo es, se lanzara un error
    };

    await newArticle(articleData);

    //se redirige a la ruta raíz para que pueda consultar la BD y se muestre el nuevo articulo.
  res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al procesar la solicitud");
  }
}

export const updateArticleController = async (req, res) => {
  try{
    const { id } = req.params;

    const articleData = {
      ...req.body,
      publishYear: parseInt(req.body.publishYear)
    };

    await updateArticle(id, articleData);

    res.redirect("/");

  }catch (error) {
    console.log(error);
    
    res.status(500).send("Error al actualizar el artículo");

  }
};

export const deleteArticleController = async (req, res) => {
  try{
    const { id } = req.params;

    await deleteArticle(id);

    res.redirect("/");
  
  }catch (error){
    console.log(error);
    res.status(500).send("Error al eliminar el artículo")
  }
}