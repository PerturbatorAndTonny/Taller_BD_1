import express from "express";
import morgan from "morgan";
import articleRoutes from './routes/article.js'

const app = express();
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.set("view engine", "ejs");

app.get('/', (req, res) => res.render('index'));
app.use('/', articleRoutes);

app.listen(port, () => {
  console.log('App running on port ', port)
})
