// fetch('http://localhost:8080/api/products')
//     .then(res=> res.text())
//     .then(data=>handleProducts(data))


axios.get('http://localhost:8080/api/products')
    .then(response=> handleProducts(response.data))

async function handleProducts(prods) {
  const recursoRemoto = await fetch(`views/partials/products.ejs`);
  const layoutText = await recursoRemoto.text();
  const functionTemplate = ejs.compile(layoutText);
  const html = functionTemplate({ products: prods});
  document.getElementById('products').innerHTML = html;
}

