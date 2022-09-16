function monstarLista (lista) {
    if (lista)  console.log(lista)
    else console.log('lista vacia!!')
}

( function (lista) {
    if (lista.length)  console.log(lista)
    else console.log('lista vacia!!')
})([])


const crearMultiplicador = (multiplo) => {
    return ( multiplo2) => multiplo * multiplo2
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(triplicar(4))