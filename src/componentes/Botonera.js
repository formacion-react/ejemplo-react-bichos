import PropTypes from "prop-types";

import { Boton } from "./Boton";

export const Botonera = (props) => {
  const { idBichoActivo, cambiaBichoActivo, toggleBichoActivo } = props;
  return (
    <section className="controles">
      <Boton
        className="set-perrete"
        activo={idBichoActivo === "p"}
        accion={() => cambiaBichoActivo("p")}
      >
        🐶
      </Boton>
      <Boton
        className="set-gatete"
        activo={idBichoActivo === "g"}
        accion={() => cambiaBichoActivo("g")}
      >
        😺
      </Boton>
      <Boton className="toggle-bicho" accion={toggleBichoActivo}>
        Conmutar
      </Boton>
    </section>
  );
};

Botonera.propTypes = {
  idBichoActivo: PropTypes.string.isRequired,
  cambiaBichoActivo: PropTypes.func.isRequired,
  toggleBichoActivo: PropTypes.func.isRequired,
};
