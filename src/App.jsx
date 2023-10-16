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
          testimonio="Soy un joven apasionado por la tecnología y participe de esta nueva era digital, me encanta explorar el vasto mundo tecnológico y encontrar formas creativas de dar vida a ideas a través del código y el diseño. Siempre estoy buscando nuevos desafíos y oportunidades para seguir aprendiendo y creciendo en este emocionante campo."
      
        />
        <Testimonio
          nombre="Ricardo Zaldumviche"
          imagen="Richie"
          cargo="Desarrollador Backend"
          empresa="WebCats"
          testimonio="Soy Ricardo Zaldumbide, un joven apasionado por la programación y la electrónica. Mi orgullo radica en mi capacidad para perseguir objetivos con tenacidad y habilidad para colaborar eficazmente con otros desarrolladores.
          "
      
        />
        <Testimonio
          nombre="Cristhian Recalde"
          imagen="Gris"
          cargo="Dev UX/UI"
          empresa="WebCats"
          testimonio="Tengo una pasión por la programación, trato de encontrar la mejor solución y no me gusta rendirme. Me gusta dar valor en donde me encuentre y a la vez puedan contar conmigo, por ello he creado algunos proyectos interesantes que se pueden vislumbrar en este portafolio. Del mismo modo me gusta trabajar en solitario o en grupo, siempre que haya pasión por el trabajo o proyecto cuentan con mi voluntad a cumplirlo de la mejor manera."
      
        />
      </div>
    </div>
  );
}

export default App;
