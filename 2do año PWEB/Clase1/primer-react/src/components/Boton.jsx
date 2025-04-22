function Boton(props) {
  const { num, alHacerClic } = props;

  const esNum = !(num == "+" || num == "-");

  function hagoClic()
  {
    console.log("clic...", num);
    alHacerClic(num);
  }

  return (
    <div>
      {esNum ? (
        <button onClick={hagoClic} className="bg-gray-400 hover:text-black hover:bg-red-500 cursor-pointer text-white font-bold m-2 pl-4 pr-4 pt-2 pb-2 w-10 rounded-3xl ">
          {num}
        </button>
      ) : (
        <div className="bg-orange-400 hover:text-black hover:bg-green-500 cursor-pointer text-white font-bold m-2 pl-4 pr-4 pt-2 pb-2 w-10 rounded-3xl ">
          {num}
        </div>
      )}

      {/* <div
        className={ esNum ? "bg-gray-400" : "bg-orange-400" }
      >
        {num}
      </div> */}
    </div>
  );
}

export default Boton;
