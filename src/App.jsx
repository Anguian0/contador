import { useState } from "react";

function App() {
  const [cuenta, setCuenta] = useState(0);

  const handleClick = () => {
    setCuenta(cuenta + 1);
  };

  const handleClick1 = () => {
    setCuenta(cuenta - 1);
  };

  const handleClick0 = () => {
    setCuenta(cuenta - cuenta);
  };

  return (
    <div className="App">
      <div className="mx-auto container card m-4 p-4 shadow-lg">
        <h1>Contador</h1>
        <hr />
        <h2 className="text-center">{cuenta}</h2>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "5px",
          }}
        >
          <button
            type="button"
            onClick={() => {
              handleClick();
            }}
            className="btn btn-outline-danger"
          >
            +1
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick1();
            }}
            className="btn btn-outline-danger mx-3"
          >
            -1
          </button>
          <button
            type="button"
            onClick={() => {
              handleClick0();
            }}
            className="btn btn-outline-danger"
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
