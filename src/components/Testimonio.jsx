import "../stylesheets/Testimonios.css";

/* Exportación nos deja solo un elemento "export" */
function Testimonio({ imagen, nombre, testimonio, empresa, cargo }) {

  /* props trae a todos los parámetros y se llaman mediante "." "props.imagen" */

  return (
    <div className="contenedor-testimonios">
      <img
        className="imagen-testimonio"

        /* Obligatorio el uso de "{" y "`" */
        src={`imgs/testimonio_${imagen}.jpg`}

        alt={`Foto de ${nombre}`}
        
      />

      <div className="contenedor-texto-testimonio">
        <p className="texto-testimonio"> &quot;{testimonio}&quot;</p>
        <p className="nombre-testimonio">
          <strong>{nombre}</strong>
        </p>
        <p className="cargo-testimonio">
          {cargo} en <strong>{empresa}</strong>
        </p>
      </div>
    </div>
  );
}

/* Exportación por defecto exporta todo */
export default Testimonio;
