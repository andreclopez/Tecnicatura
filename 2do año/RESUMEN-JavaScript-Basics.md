# JavaScript - Conceptos Básicos

Resumen de algunos conceptos fundamentales de JavaScript, para repasar lo esencial.

---

## 1. Clases y Métodos

En JavaScript, una **clase** es una plantilla para crear objetos. Los **métodos** son funciones definidas dentro de la clase.

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const juan = new Persona("Juan", 30);
juan.saludar(); // "Hola, soy Juan y tengo 30 años."
```

---

## 2. Arrays y Manejo de Arrays

Los **arrays** son estructuras que almacenan múltiples elementos. JavaScript ofrece diversos métodos para manipularlos:

- `push()`: Añade un elemento al final
- `pop()`: Elimina el último elemento
- `map()`: Aplica una función a cada elemento
- `filter()`: Filtra elementos que cumplan una condición

```javascript
const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(num => num * num);
console.log(cuadrados); // [1, 4, 9, 16, 25]

const mayoresA3 = numeros.filter(num => num > 3);
console.log(mayoresA3); // [4, 5]
```

---

## 3. Objetos Literales

Un **objeto literal** es una colección de pares clave-valor. Se usa para representar entidades con sus propiedades y métodos.

```javascript
const persona = {
  nombre: "Ana",
  edad: 25,
  profesion: "Desarrolladora",
  saludar() {
    console.log(`Hola, soy ${this.nombre} y soy ${this.profesion}.`);
  }
};

console.log(persona.nombre); // "Ana"
persona.saludar(); // "Hola, soy Ana y soy Desarrolladora."
```

---

## Conclusión

- **Clases**: Plantillas para crear objetos con estructura y comportamiento.
- **Arrays**: Herramienta poderosa para almacenar y manipular colecciones de datos.
- **Objetos Literales**: Estructura clave-valor para modelar información de forma clara y directa.
