const products = require('../../contenedor')

module.exports = (req, res)=>{
    const update = products.updateProduct(req.params.id, req.body)
    update ? res.json(update) : res.json({ error : 'producto no encontrado' })
}