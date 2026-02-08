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