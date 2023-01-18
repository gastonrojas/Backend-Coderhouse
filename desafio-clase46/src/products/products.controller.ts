import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/product-repo.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create( @Body() create: CreateProductDto){
        return await this.productsService.create(create)        
    }

    @Get()
    async getAllProducts(){
        return await this.productsService.findAll();
    }

    @Get(':id')
    async getProductById( @Param('id') id: string){
        return await this.productsService.getProductById(id)
    }

    @Put(':id')
    async updateProduct( @Param('id') id: string, @Body() productUpdated: CreateProductDto){
        return await this.productsService.updateProduct(id, productUpdated);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string){
        return await this.productsService.deleteProduct(id)
    }
}
