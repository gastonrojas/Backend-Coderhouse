import Product from "../entities/Product.js"

export function validateCartProducts(cp){
    if (!Array.isArray(cp)) return null
    if (!cp.length) return cp
    cp.forEach(p=>{
        new Product(p.product)
        if(p.quantity < 1) throw new Error('quantity must be a positive number')
    })
    return cp
}