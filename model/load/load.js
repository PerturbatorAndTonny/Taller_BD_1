import { articleTable } from "../db/schema.js";
import { sqliteConnector } from "../../drizzle.config.js";

const articles = [
  {
    id: '02646196251330161',
    title: 'Digital empowerment of undergraduate students with vision disability',
    autor: 'Sahar Abu Shokhedim, Zuheir N Khlaif, Muayed K Hattab, Jamil Itmazi',
    publishYear: 2025,
    resource: 'https://doi.org/10.1177/02646196251330161',
    abstract: 'The digital transformation of higher education institutions (HEIs) worldwide has played a significant role in enhancing their competitiveness, with many integrating emerging information technologies into their systems. This study explores how HEIs are working to digitally empower students with vision impairments and how such efforts influence these students’ transition into higher education. Using semi-structured interviews with 18 participants from two universities, the research employed thematic analysis to uncover key insights. The results revealed a range of strategies adopted by universities to support students with vision disabilities, emphasizing the critical role of both social support networks and ongoing professional development in strengthening students’ digital skills.',
    keyword: 'Digital empowering, Palestine, undergraduate students, visual disability'
  },
  {
    id: 'su142113830',
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
  {
    id: 'S0164121224002875',
    title: 'The Power of Words in Agile vs. Waterfall Development: Written Communication in Hybrid Software Teams',
    autor: 'Delina Ly, Michiel Overeem, Sjaak Brinkkemper, Fabiano Dalpiaz',
    publishYear: 2025,
    resource: 'https://doi.org/10.1016/j.jss.2024.112243',
    abstract: 'Software development is constantly evolving, adapting to emerging technologies and development paradigms while leveraging advancements in communication technologies and work modes. We conduct an exploratory case study in a large software organization to investigate how the development paradigm and the formality of communication channels affect written communication within hybrid teams.',
    keyword: 'Collaborative software development, Development paradigms, Waterfall development, Agile development, Communication channel formality, Hybrid software teams'
  },
  {
    id: 'S1877050925011640',
    title: 'Software anomaly detection technology based on deep learning',
    autor: 'Guangtao Long, Kai Yu, Shengfeng Yang, Xiaohong Zhou, Xudong Shen, Nanfang Lu',
    publishYear: 2025,
    resource: 'https://doi.org/10.1016/j.procs.2025.04.066',
    abstract: 'In recent years, with the widespread popularity of software applications, software security issues have become increasingly prominent. Abnormal software operation is one of the main causes of software security issues, and the application of artificial intelligence algorithms provides new ideas for software anomaly detection. This article proposes a software anomaly detection technique based on deep learning to address common software runtime issues.',
    keyword: 'Deep learning, Software operation, Anomaly detection'
  },
  {
    id: 'S0920548925000819',
    title: 'Enhancing security, privacy, and usability in social robots: A software development framework',
    autor: 'Samson O. Oruma, Mary Sánchez-Gordón, Vasileios Gkioulos',
    publishYear: 2025,
    resource: 'https://doi.org/10.1016/j.csi.2025.104052',
    abstract: 'The field of social robotics is witnessing a transformative shift in public interaction and service provision with the advent of Social Robots in Public Spaces (SRPS). However, this progress brings forth significant software security challenges. Developers and stakeholders struggle with designing secure SRPS software without specific standards and frameworks. Existing Secure Software Development Life Cycles fall short in addressing the intricate security needs of SRPS, often prioritizing functionality over security. Integrating various technologies within SRPS and the dynamic nature of public spaces compounds the challenge of ensuring security and user acceptance.',
    keyword: 'Secure software, Social robots, Public space software, Human–robot interactionSafety'
  },
  {
    id: '2192-4880',
    title: 'E-learning in the Cloud Computing Environment: Features, Architecture, Challenges, and Solutions',
    autor: 'Mohammed Jawad Al-Dujaili, Haider TH. Salim ALRikabi, Mohammad K. Abdul-Hussein, Huda Abbas Kanber, Ibtihal Razaq Niama ALRubeei',
    publishYear: 2024,
    resource: 'https://doi.org/10.3991/ijep.v14i1.47109 ',
    abstract: 'The need to constantly and consistently improve the quality and quantity of the educational system  is  essential.  E-learning  has  emerged  from  the  rapid  cycle  of  change  and  the  expan-sion of new technologies. Advances in information technology have increased network band-width, data access speed, and reduced data storage costs. In recent years, the implementation of  cloud  computing  in  educational  settings  has  garnered  the  interest  of  major  companies,  leading to substantial investments in this area.',
    keyword: 'cloud computing, education systems, e-learning, distance education, engineering education'
  },
  {
    id: '5183532',
    title: 'A Data-Driven Methodology for Monitoring Total Quality Management (Tqm) Systems in the Industry 4.0 Era',
    autor: 'Carlos Zurrón Barragán, Ruben Urraca, Andres Sanz-Garcia',
    publishYear: 2025,
    resource: 'https://doi.org/10.3991/ijep.v14i1.47109',
    abstract: 'Monitoring Total Quality Management (TQM) implementations has long been challenging due to subjectivity, lack of resources, and siloed data. In the Industry 4.0 era, new technologies have become available to address these limitations. This article presents a knowledge discovery in databases (KDD) methodology for continuous monitoring of TQM systems by evaluating the accuracy of quality control (QC) data collected by line operators.',
    keyword: 'TQM, Industry 4.0, Knowledge discovery database, Machine learning, Human factor, Sensitivity analysis, Variable importance'
  }, 
  {
    id: '1687-7586',
    title: 'Application of Multimodal Multimedia Information and Big DataTechnology in Teaching Chinese as a Foreign Language Course',
    autor: 'Yanhua Nie',
    publishYear: 2023,
    resource: 'https://doi.org/10.1155/2023/2257863',
    abstract: 'With the change of the times, under the leadership of big data, cloud computing, network technology, mobile Internet, and other high technology, education has gradually broken free from the traditional teaching mode. At the same time, advanced technology has also lifted the confinement of traditional teaching mode in space and time and opened the skylight of intelligent thinking mode. From the current situation of Chinese language fever around the world, the demand of Chinese language learners for learning materials and learning resources will continue to increase in the future. ',
    keyword: 'TQM, Industry 4.0, Knowledge discovery database, Machine learning, Human factor, Sensitivity analysis, Variable importance'
  }
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