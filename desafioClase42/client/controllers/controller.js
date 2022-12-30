import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080'

const controller = {

    async index(req, res){
        res.render('index')
     },
    async detail(req, res){
        const { data } = await axios.get(`api/products/${req.params.id}`)
        res.render('detail', {product: data})
     }, 

    async create(req, res){

       res.render('create')
     }, 

    async edit(req, res){
        const { data } = await axios.get(`api/products/${req.params.id}`)
        res.render('edit', {product: data})
     }, 

    async store(req, res){
        const data = await axios.get('api/products')
     }, 

    async update(req, res){
        const data = await axios.get('api/products')
     }, 

    async delete(req, res){
        const data = await axios.get('api/products')
     },
    
}

export default controller