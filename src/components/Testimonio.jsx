import "../stylesheets/Testimonios.css";

/* Exportación nos deja solo un elemento "export" */
function Testimonio(props) {
  return (
    <div className="contenedor-testimonios">
      <img
        className="imagen-testimonio"

        /* Obligatorio el uso de "{" y "`" */
        src={`./imgs/testimonio_${props.imagen}.jpg`}

        alt={`Foto de ${props.nombre}`}
        
      />

      <div className="contenedor-texto-testimonio">
        <p className="texto-testimonio"> &quot;{props.testimonio}&quot;</p>
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong>
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
      </div>
    </div>
  );
}

/* Exportación por defecto exporta todo */
export default Testimonio;
