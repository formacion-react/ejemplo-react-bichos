import PropTypes from "prop-types";

export const Boton = (props) => {
  const { nombre, activo, className, accion, children } = props;
  return (
    <button
      className={`${className}${activo ? " activo" : ""}`}
      data-bicho={nombre}
      onClick={accion}
    >
      {children}
    </button>
  );
};

Boton.propTypes = {
  className: PropTypes.string.isRequired,
  activo: PropTypes.bool,
};
