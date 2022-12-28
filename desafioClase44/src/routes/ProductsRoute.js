import { Router } from 'express';

export default class ProductsRoute {
    constructor(controller){
        this.router = new Router()
            .get('/', controller.getAll.bind(controller))
            .post('/', controller.store.bind(controller))
    }
    get(){
        return this.router
    }
}