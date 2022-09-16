const products = require('../../contenedor')
module.exports = (req, res)=>{
    const product = products.getById(req.params.id)
    console.log(product)
    product ? res.json(product) : res.json({ error : 'producto no encontrado' })
}