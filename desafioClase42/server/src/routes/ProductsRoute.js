import { Router } from 'express';

export default class ProductsRoute {
    constructor(controller){
        this.router = new Router()
            .get('/', controller.getAll.bind(controller))
            .get('/:id', controller.getById.bind(controller))
            .post('/', controller.store.bind(controller))
            .put('/:id', controller.update.bind(controller))
            .delete('/:id', controller.delete.bind(controller))
    }
    get(){
        return this.router
    }
}