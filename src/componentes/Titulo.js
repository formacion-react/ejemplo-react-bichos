import PropTypes from "prop-types";

export const Titulo = (props) => {
  const { nombre } = props;
  return (
    <header>
      <h1>{nombre[0].toUpperCase() + nombre.slice(1)}</h1>
    </header>
  );
};

Titulo.propTypes = {
  nombre: PropTypes.string.isRequired,
};
