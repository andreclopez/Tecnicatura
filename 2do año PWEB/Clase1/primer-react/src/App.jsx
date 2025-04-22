import React from "react";
import Boton from "./components/Boton";
import { useState } from "react";
// import "./App.css"

function App() {
  const [visor, setVisor] = useState(0);


  function hicieronClic(num) {
    console.log("Me avisaron de un clic", num);
    // visor = num;
    if (visor != 0) {
      setVisor(visor + "" + num);
    } else {
      setVisor(num);
    }
  }

  return (
    <h1>
      <div
        id="box"
        className="bg-red-500 text-4xl miTexto text-black-600 text-center pt-5
         pb-5 mt-0 m-2.5"
      >
        Calculadora
      </div>
      <div className=" bg-gray-200 p-2 w-32 text-right rounded-md m-2 ">
        {visor}
      </div>
      <div className="grid grid-cols-3 w-32">
        <Boton num={1} alHacerClic={hicieronClic} />
        <Boton num={2} alHacerClic={hicieronClic} />
        <Boton num={3} alHacerClic={hicieronClic} />
        <Boton num={4} alHacerClic={hicieronClic} />
        <Boton num={5} alHacerClic={hicieronClic} />
        <Boton num={6} alHacerClic={hicieronClic} />
        <Boton num={7} alHacerClic={hicieronClic} />
        <Boton num={8} alHacerClic={hicieronClic} />
        <Boton num={9} alHacerClic={hicieronClic} />
        <Boton num={"+"} alHacerClic={hicieronClic} />
        <Boton num={"-"} alHacerClic={hicieronClic} />
      </div>
    </h1>
  );
}

export default App;
