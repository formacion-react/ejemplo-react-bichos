import PropTypes from "prop-types";
import { useState } from "react";

export const Formulario = (props) => {
  const { abierto, toggleFormulario } = props;
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    descripcion: "",
    favorito: false,
  });
  const setDato = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.id]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  const onClickCerrar = (e) => {
    e.preventDefault();
    toggleFormulario();
  };
  return (
    <div className={`formulario-editar${abierto ? " on" : ""}`}>
      <form>
        <label htmlFor="nombre">Nombre bicho:</label>
        <input
          type="text"
          id="nombre"
          value={datosFormulario.nombre}
          onChange={setDato}
        />
        <label htmlFor="descripcion">Descripción:</label>
        <input type="text" id="descripcion" onChange={setDato} />
        <label htmlFor="favorito">
          <input type="checkbox" id="favorito" onChange={setDato} /> ¿Es tu
          bicho favorito?
        </label>
        <button type="submit">Guardar</button>
      </form>
      <a
        href="cerrar-formulario"
        className="cerrar-form"
        onClick={onClickCerrar}
      >
        ❌
      </a>
    </div>
  );
};

Formulario.propTypes = {
  abierto: PropTypes.bool.isRequired,
  toggleFormulario: PropTypes.func.isRequired,
};
