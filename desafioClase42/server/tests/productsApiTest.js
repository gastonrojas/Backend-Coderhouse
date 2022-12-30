import { strict as assert} from 'assert';
import { isGeneratorObject } from 'util/types';

import productsService from '../src/business/productsServiceFactory.js'

const product = {title: 'gorro', price: '2000', thumbnail: 'https://hk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-bucket-hat-s00-hats-and-gloves--M77760_PM2_Front%20view.jpg'}

describe('Creacion de producto', async ()=>{
    it('agregar productos correctamente',async ()=>{
        const productAdded = await productsService.storeProduct(product);
        const productFound = await productsService.getProductById(productAdded.id);
        assert.deepStrictEqual(productFound, productAdded);

        const anotherProductAdded = await productsService.storeProduct({title: 'otroGorro', price: '4000', thumbnail: 'https://hk.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-bucket-hat-s00-hats-and-gloves--M77760_PM2_Front%20view.jpg'});
        const productsFound = await productsService.getProducts();
        assert.strictEqual(productsFound.length, 2);
        assert.deepStrictEqual(productsFound, [productAdded, anotherProductAdded]);

        await productsService.deleteProduct(productAdded.id);
        await productsService.deleteProduct(anotherProductAdded.id);
    });
});

describe('Lectura de productos', ()=>{
    it('traer un solo objeto al agregar un elemento', async ()=>{
        const productAdded = await productsService.storeProduct(product);
        const products = await productsService.getProducts();
        assert.strictEqual(products.length, 1);
        await productsService.deleteProduct(productAdded.id);
    });
    it('traer un solo objeto al leer por id', async ()=> {
        const productAdded = await productsService.storeProduct(product);
        assert.deepStrictEqual(await productsService.getProductById(productAdded.id), productAdded);
        await productsService.deleteProduct(productAdded.id);
    });
});

describe('Actualizacion de productos', () => {
    it('editar un pructo correctamente', async () => {
        const productAdded = await productsService.storeProduct(product);
        const productUpdated = await productsService.updateProduct(productAdded.id, {
            title: product.title,
            price: 6000,
            thumbnail: product.thumbnail
        })
        assert.deepStrictEqual(await productsService.getProductById(productAdded.id), productUpdated)
        await productsService.deleteProduct(productAdded.id)
    })
})

describe('Borrado de producto', ()=>{
    it('eliminar un producto correctamente', async ()=>{
        const productAdded = await productsService.storeProduct(product);
        await productsService.deleteProduct(productAdded.id)
        const products = await productsService.getProducts();
        assert.deepStrictEqual(products, [])
    })
})
