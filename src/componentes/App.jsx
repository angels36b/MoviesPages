import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";

//components
// import Movies from "./Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const datos = (e) => {
    e.preventDault; //evita que se recargue la pagina
    //metodo de get
    fetch(
        `https://api.tvmaze.com/search/shows?q=${busqueda}`
      ).then((response) => response.json());
      
      setMovies(response);
    };


 
  const cambiarState = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
  };

  return (
    <section className="container">
      <h4 className=" py-4 text-center">Buscador de peliculas</h4>
      <form className="form-input" onSubmit={datos}>
        <div className="input-group mb-3">
          <input
            onChange={cambiarState}
            type="text"
            className="form-control"
            placeholder="Que serie desea buscar?"
            name="buscador"
          />
          <button className="btn btn-primary"> Buscar </button>
        </div>
      </form>
    </section>
  );
}
export default App;

// npx npkill elimina la carpeta node
