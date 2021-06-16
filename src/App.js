import { useState } from "react";
import { Botonera } from "./componentes/Botonera";
import { Explicacion } from "./componentes/Explicacion";
import { Formulario } from "./componentes/Formulario";
import { Imagen } from "./componentes/Imagen";
import { Titulo } from "./componentes/Titulo";

function App() {
  const [bichos, setBichos] = useState([
    {
      id: "g",
      nombre: "gatete",
      imagen: "gatete.jpg",
      descripcion: {
        corta: "Un gatete feliz",
        larga: "El animal más perfecto del mundo",
      },
      favorito: true,
    },
    {
      id: "p",
      nombre: "perrete",
      imagen: "perrete.jpg",
      descripcion: {
        corta: "Un perrete feliz",
        larga: "No está mal",
      },
      favorito: false,
    },
  ]);
  const getBicho = (id) => bichos.find((bicho) => bicho.id === id);
  const [bichoActivo, setBichoActivo] = useState(getBicho("g"));
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const cambiaBichoActivo = (id) => {
    setBichoActivo(getBicho(id));
  };
  const toggleBichoActivo = (id) => {
    setBichoActivo(getBicho(bichoActivo.id === "p" ? "g" : "p"));
  };
  const toggleFormulario = () => {
    setFormularioAbierto(!formularioAbierto);
  };
  return (
    <>
      <Formulario
        abierto={formularioAbierto}
        toggleFormulario={toggleFormulario}
      />
      <main>
        <Titulo nombre={bichoActivo.nombre} />
        <Imagen bicho={bichoActivo} toggleFormulario={toggleFormulario} />
        <Botonera
          idBichoActivo={bichoActivo.id}
          cambiaBichoActivo={cambiaBichoActivo}
          toggleBichoActivo={toggleBichoActivo}
        />
        <Explicacion explicacion={bichoActivo.descripcion.larga} />
      </main>
    </>
  );
}

export default App;
