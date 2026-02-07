import { articleTable } from "../db/schema.js";
import { sqliteConnector } from "../../drizzle.config.js";

const articles = [
  {
    id: '02646196251330161',
    title: 'Game-based formative assessment of analogical reasoning in preschool children: Support from the Internet of Things technology',
    autor: 'Xue Lv, Li Li, Liping Guo, Ting He, Sirui Liu',
    publishYear: 2022,
    resource: 'https://doi.org/10.3390/su142113830',
    abstract: 'Emerging information technology such as Internet of Things (IoT) has been continuously applied and deepened in the field of education, and the learning analytics technology based on children’s games is gradually moving toward practical application research, but there are few empirical studies on the micro level of emerging information technology and learning analytics methods in the evaluation of young children’s learning process and learning effects.',
    keyword: 'game-based assessment, analogical reasoning, Internet of Things, learning analytics, preschool children'
  },
  {
    id: 's12909-025-07751-1',
    title: 'Application of augmented reality technology for obstetrics and gynecology teaching among undergraduates',
    autor: 'Xuan Rao, Qian-Qian Wu, Jin Yang, Xiao Li',
    publishYear: 2025,
    resource: 'https://doi.org/10.1186/s12909-025-07751-1',
    abstract: 'The anatomy of the female reproductive system is the foundation of obstetrics and gynecology (OBGY) education. Augmented reality (AR) is now emerging information technology, which has been increasingly used in medical education of other disciplines. The present study aimed to evaluate whether AR-assisted learning mode could enhance the spatial comprehension and clinical thinking ability of undergraduates during the OBGY teaching.',
    keyword: 'Augmented reality, Obstetrics and gynecology, Anatomical teaching, Medical undergraduates'
  },
]

articles.forEach(async article => {
  await sqliteConnector.insert(articleTable).values({
    id: article.id,
    title: article.title,
    autor: article.autor,
    publishYear: article.publishYear,
    resource: article.resource,
    abstract: article.abstract,
    keyword: article.keyword
  })

  console.log("El artículo " + article.id + " fue registrado!!")
});