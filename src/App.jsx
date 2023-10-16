import "./App.css";
import Testimonio from "./components/Testimonio/";

function App() {
  return (
    <div className="App">
      <div className="contenedor_Padre">
        <h1>Testimonios de Dios sabe quien:</h1>
        <Testimonio
          nombre="Orlidan Montesdeoca"
          imagen="Orlo"
          cargo="Desarrollador FrontEnd"
          empresa="WebCats"
          testimonio={
            <>
              Como entusiasta de la tecnología, me comprometo con el dinámico
              panorama de la era digital. Mi dedicación radica en explorar el
              extenso universo tecnológico y <b>desarrollar</b> soluciones
              innovadoras mediante la implementación de 
              <b>código</b> y <b> diseño</b>. Constantemente persigo desafíos que
              promuevan mi continua formación y progreso en este estimulante
              campo.
            </>
          }
        />
        <Testimonio
          nombre="Ricardo Zaldumbide"
          imagen="Richie"
          cargo="Desarrollador Backend"
          empresa="WebCats"
          testimonio={
            <>
              Soy Ricardo Zaldumbide, un joven apasionado por la 
              <b>programación</b> y la <b>electrónica</b>. Mi orgullo radica en
              mi capacidad para perseguir objetivos con tenacidad y habilidad
              para colaborar eficazmente con otros desarrolladores.
            </>
          }
        />
        <Testimonio
          nombre="Cristhian Recalde"
          imagen="Gris"
          cargo="Dev UX/UI"
          empresa="WebCats"
          testimonio={
            <>
              Tengo una pasión por la programación, trato de encontrar la 
              <b>mejor solución</b> y no me gusta rendirme. Dominio en
              conocimientos de TI capaz de utilizar <b>metodos, tecnicas y
              herramientas de alto invel</b> para el desarrollo de software, con
              capacidad de analisis y resolucion de problemas.
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
