const createCart =  (userID) => {
    if(!userID) throw new Error('Error de registro.')
    return {
        id: userID,
        products: []
    }
}

export default createCart;