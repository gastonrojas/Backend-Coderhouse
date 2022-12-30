import { Router } from "express";

import controller from '../controllers/controller.js'

const router = new Router();

router.get('/productos', controller.index)
router.get('/detalle/:id', controller.detail)
router.get('/crear', controller.create)
router.get('/editar/:id', controller.edit)
router.post('/crear', controller.store)
router.post('/editar', controller.update)
router.post('/borrar', controller.delete)


    export default router