import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Product } from 'src/interface/products/product.interface';
import { CreateProductDto } from 'src/dto/product-repo.dto';
import { productsDao } from 'src/persistance/dao/products.dao';

@Injectable()
export class ProductsService {

    async create(create: CreateProductDto){
        return await productsDao.save({id: randomUUID(), ...create});
    }

    async findAll(){
        return await productsDao.getAll();
    }

    async getProductById(id: string){
       return await productsDao.getById(id)
    }

    async updateProduct(id:string, productUpdated: CreateProductDto){
      return await productsDao.updateOneById(id, productUpdated);
    }

    async deleteProduct(id: string){
        return await productsDao.deleteOneById(id)
    }
}
