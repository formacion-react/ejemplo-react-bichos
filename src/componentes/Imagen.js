import PropTypes from "prop-types";

export const Imagen = (props) => {
  const {
    bicho: {
      nombre,
      imagen,
      descripcion: { corta: descripcionCorta },
      favorito,
    },
    toggleFormulario,
  } = props;
  const onClickEditar = (e) => {
    e.preventDefault();
    toggleFormulario();
  };
  return (
    <section className="imagenes">
      <img
        src={`img/${imagen}`}
        title={descripcionCorta}
        alt={descripcionCorta}
        className={`${nombre}${favorito ? " favorito" : ""}`}
      />
      <a href="editar-bicho" className="editar-bicho" onClick={onClickEditar}>
        ✍
      </a>
      {favorito && <i className="bicho-favorito">👑</i>}
    </section>
  );
};

Imagen.propTypes = {
  bicho: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.shape({
      corta: PropTypes.string.isRequired,
      larga: PropTypes.string.isRequired,
    }).isRequired,
    favorito: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFormulario: PropTypes.func.isRequired,
};
