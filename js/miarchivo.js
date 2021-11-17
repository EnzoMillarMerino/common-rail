


let nuestrosCursos = [
    { id: 1, nombre: "Curso 1", tipo: "curso", precio: 25000, },
    { id: 2, nombre: "Curso 2", tipo: "curso", precio: 35000, },
    { id: 3, nombre: "Curso 3", tipo: "curso", precio: 40000, },
    { id: 4, nombre: "Curso 4", tipo: "curso", precio: 45000, },
    { id: 5, nombre: "Curso 5", tipo: "curso", precio: 50000, },
    { id: 6, nombre: "Curso 6", tipo: "curso", precio: 55000, },

]

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {
    let elijoProducto = parseInt(prompt('ingrese el ID de su producto'))
    let productoAgregar = nuestrosCursos.filter((el) => el.id == elijoProducto)[0]
    carritoDeCompras.push(productoAgregar)
    console.log(carritoDeCompras)
    actualizarCarrito()

}

function actualizarCarrito() {

    console.log('cantidad de productos agregados: ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su carrito es $' + suma)
}









