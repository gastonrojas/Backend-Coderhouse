const deleteForm = document.getElementById('deleteProductForm');

deleteForm.addEventListener("submit", e=>{
    e.preventDefault();
    axios.delete(`http://localhost:8080/api/products/${deleteForm[0].value}`)
        .then(resp=> window.location.href = `http://localhost:3030/productos`)
})