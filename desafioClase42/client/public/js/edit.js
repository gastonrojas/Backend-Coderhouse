const editForm = document.getElementById('editProductForm')

editForm.addEventListener('submit', e =>{
    e.preventDefault();
    const productEdited = {
        title: editForm[0].value,
        price: editForm[1].value,
        thumbnail: editForm[2].value,
    }
    axios.put(`http://localhost:8080/api/products/${editForm[3].value}`, productEdited)
        .then(resp=> window.location.href = `http://localhost:3030/detalle/${editForm[3].value}`)
})