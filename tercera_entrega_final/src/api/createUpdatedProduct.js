const createUpdatedProduct = (id, {name, description, price, image})=>{
    if (!name) throw new Error(`MISSING_ARGS: el campo 'name' es obligatorio`);
    if (!description) throw new Error(`MISSING_ARGS: el campo 'description' es obligatorio`);
    if (!price) throw new Error(`MISSING_ARGS: el campo 'price' es obligatorio`);
 
    return {
            id,
            name,
            description,
            price,
            image: image || 'default.jpeg'
    }
}

export default createUpdatedProduct;