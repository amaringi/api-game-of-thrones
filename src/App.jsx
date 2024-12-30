import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actores, setActores] = useState([]); // Estado para almacenar los actores

  useEffect(() => {
    const obtenerActor = async () => {
      try {
        const resultados = await axios.get("http://thronesapi.com/api/v2/Characters");
        setActores(resultados.data); // Actualizar el estado con los datos de los actores
      } catch (error) {
        console.error("Error al obtener los datos de los actores:", error);
      }
    };

    obtenerActor();
  }, []);

  return (
    <div>
      <div className="titulo">
      <h1>ACTORES GAME OF THRONES</h1>
      </div>
      <ul className="tarjeta">
        {actores.map((actor) => (
          <li key={actor.id} className="caja">
            <h2>{actor.fullName}</h2>
            <img src={actor.imageUrl} alt={actor.fullName} width="150" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
