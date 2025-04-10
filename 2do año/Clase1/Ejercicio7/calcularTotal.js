// Crea una función calcularTotal que reciba un array de objetos 
// representando productos con las propiedades {nombre, precio, cantidad}
// y retorne el total a pagar.

function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

const carrito = [
    { nombre: "Laptop", precio: 1000, cantidad: 2 },
    { nombre: "Mouse", precio: 50, cantidad: 3 },
    { nombre: "Teclado", precio: 80, cantidad: 1 }
];

console.log(calcularTotal(carrito)); // El total del ejemplo corresponde a 2230