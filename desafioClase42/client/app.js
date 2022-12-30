import express from "express";

import router from './routes/router.js'

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('views', './public/views');
app.set('view engine', 'ejs');

app.use('/', router)

app.listen(3030, ()=> console.log("Servidor escuchando puerto 3030"))