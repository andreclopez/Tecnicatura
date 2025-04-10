//Escribe una función llamada filtrarPares que reciba un array de números
//y devuelva un nuevo array solo con los números pares.

function filtrarPares() {

    let entrada = prompt("Ingrese un conjunto de números separados por coma");
  
    // Convertir la cadena en un array 
    let array = entrada.split(",").map(numero => parseFloat(numero));
  
    // Filtra pares
    let pares = array.filter(numero => numero % 2 === 0);
  
    console.log("Números pares:", pares);
  }
  
  filtrarPares();
