const products = require('../../contenedor')

module.exports = (req, res)=>{
    res.json(products.save(req.body))
}