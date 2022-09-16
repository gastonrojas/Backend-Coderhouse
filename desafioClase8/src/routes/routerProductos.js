const express = require('express')

const apiProductos = require('../controllers/index.js')

const routerProductos = express.Router()

routerProductos.get('/', apiProductos.getAll)
routerProductos.get('/:id', apiProductos.getById)
routerProductos.post('/', apiProductos.post)
routerProductos.put('/:id', apiProductos.put)
routerProductos.delete('/:id', apiProductos.del)


module.exports = routerProductos