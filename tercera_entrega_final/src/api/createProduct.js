import { randomUUID } from 'crypto';

const createProduct = ({name, description,price, image})=>{
    if (!name) throw new Error(`MISSING_ARGS: el campo 'name' es obligatorio`);
    if (!description) throw new Error(`MISSING_ARGS: el campo 'description' es obligatorio`);
    if (!price) throw new Error(`MISSING_ARGS: el campo 'price' es obligatorio`);
 
    return {
            id: randomUUID(),
            name,
            description,
            price,
            image: image || 'default.jpeg'
    }
}

export default createProduct;