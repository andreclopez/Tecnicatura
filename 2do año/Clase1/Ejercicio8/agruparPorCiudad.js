// Crea una función agruparPorCiudad que reciba un array de objetos con la 
// estructura {nombre, ciudad} y retorne un objeto donde las claves sean 
// las ciudades y los valores sean arrays con los nombres de las personas 
// de cada ciudad.

function agruparPorCiudad(array) {
    return array.reduce((resultado, persona) => {
        const { ciudad, nombre } = persona;
        if (!resultado[ciudad]) {
            resultado[ciudad] = [];
        }
        resultado[ciudad].push(nombre); 
        return resultado;
    }, {});
}

const personas = [
    { nombre: "Juan", ciudad: "Madrid" },
    { nombre: "Ana", ciudad: "Barcelona" },
    { nombre: "Carlos", ciudad: "Madrid" },
    { nombre: "Luis", ciudad: "Sevilla" },
    { nombre: "Elena", ciudad: "Barcelona" }
];

console.log(agruparPorCiudad(personas));