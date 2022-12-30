const productsForm = document.getElementById('createProductForm')

productsForm.addEventListener('submit', ( e =>{
    e.preventDefault();
    const newProduct = {
        title: productsForm[0].value,
        price: productsForm[1].value,
        thumbnail: productsForm[2].value
    }
    axios.post('http://localhost:8080/api/products', newProduct)
        .then(response=> window.location.assign('productos'))
}))



