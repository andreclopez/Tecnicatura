import { useState } from 'react'
import './App.css'

function App() {
  // const edad = 0;
  const [ edad, setEdad ] = useState(0);


  function cambioElInput(e){

    console.log("llega el evento:", e.target.value)
    setEdad(e.target.value);

  }

  function procesaBoton()
  {
     if "edad" =< 12
    
  }

  // return con parte visual

  return (
   <div>
    <h1 className="text-3xl p-5 bg-yellow-300 w-full text-center mt-1">Ingrese su edad</h1>
    <div className="bg-gray-300 p-3 flex justify-center">
      <input onChange={(e) => cambioElInput(e)} className="bg-white border rounded-lg p-2 " type="number" />
      <div onClick={procesaBoton} className="bg-black cursor-pointer text-white rounded-lg p-3 ml-4">ENVIAR</div>
    </div>
    <div>
      Visor de edad: {edad}
    </div>
    <div className="bg-gray-300 p-3 flex justify-start"> 
      1- Si es menor de edad, solicitar el dni, y nombre del padre / madre / tutor
    </div> <br />
    <div className="bg-gray-300 p-3 flex justify-start">
    2- Si es mayor de edad, solicitar telefono, direccion y ciudad
    </div> <br />
    <div className="bg-gray-300 p-3 flex justify-start">
    3- Para ambos casos solicitar Pais
    </div> <br />
    <div className="bg-gray-300 p-3 flex justify-start">
    4- Al final un boton REGISTRAR, que construya un objeto con todos los datos solicitados
    </div> <br />
   </div>
  )
}

export default App
