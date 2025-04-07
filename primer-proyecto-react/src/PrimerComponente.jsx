const string ='Esto es un texto'
const number = 123456
const array = ['Curso de React', 'Youtube', 4, 100000]
const boolean = true
const funcion = () => 1+1
const objeto = { nombre: 'Curso de Javascript', duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
  return (
    <h1> {array} </h1>
  )
}
