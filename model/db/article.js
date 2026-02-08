import { articleTable } from './schema.js'
import { sqliteConnector } from '../../drizzle.config.js'
 
export async function newArticle(body) {
  try {
    console.log(body);
    const { id, title, autor, publishYear, resource, abstract, keyword} = body;
    const newRecord = await sqliteConnector
      .insert(articleTable)
      .values({
        id: id,
        title: title,
        autor: autor,
        publishYear: publishYear,
        resource: resource,
        abstract: abstract,
        keyword: keyword
      }).returning({ idArticle: articleTable.id });
      console.log("201", newRecord);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateArticle(id, body) {
  try{
    const { title, autor, publishYear, resource, abstract, keyword} = body;
    
    const updated = await sqliteConnector
    .update(articleTable)
    .set({
      title,
      autor,
      publishYear,
      resource,
      abstract,
      keyword
    })
    
    .where(articleTable.id.eq(id))
    .returning({ idArticle: articleTable.id })

    console.log("200", updated);
  
  } catch (error){
    throw new Error(error);
  }
}

export async function deleteArticle(id) {
  try{
    const deleted = await sqliteConnector
    .delete(articleTable)
    .where(articleTable.id.eq(id))
    .returning({ idArticle: articleTable.id });

    console.log("200", deleted);

  }catch (error) {
    throw new Error(error);
  }
}