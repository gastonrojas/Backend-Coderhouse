import express from "express";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080'

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    const data = axios.get()
    console.log(data)
    res.json(data)
})

app.listen(3030)