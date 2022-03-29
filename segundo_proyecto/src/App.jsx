
function App() {

  const persona = {
    nombre: "Francisco",
    apellidoPaterno: "Anguiano",
    apellidoMaterno: "Morales",
    edad: 21,
  };

  const {nombre, apellidoPaterno, apellidoMaterno, edad} = persona;

  const contactoPersona = {
    telefono: "2871234567",
    email: "fran@gmail.com",
    empresa: "Anguiano",
  };

  const nuevoTelefono = "123456789"

  const infoPersona = {...persona, ...contactoPersona, puesto: "Ingeniero"};

  const frutas = ["manzana", "naranja", "fresa", "pera"];
  const vegetales = ["lechuga", "zanahoria", "alcachofa", "papa"];
  const carnes = ["pescado", "pollo", "cerdo", "res"];
  
  const alimentos = [
    ...frutas,
    ...vegetales,
    ...carnes,
    "Cualquier otro alimento",
  ];

      console.log(frutas);
      console.log(vegetales);
      console.log(carnes);
      console.log(alimentos);
    
      return (
  <div className="App">
      <h1>
      {`Soy 
      ${nombre}
      ${apellidoPaterno}
      ${apellidoMaterno}
      y tengo ${edad}
      `}
      </h1>
    </div>
  );
}

export default App;
