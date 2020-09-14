import React, { useState, useEffect } from "react";

function App() {
  const [count, saveCount] = useState(0);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `Número contador: ${count} `;
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div class="jumbotron">
            <p class="display-4 text-center">Hola Mundo, Proyecto creado por Edris Ríos y Elvin Gonzales
            <br/>
            {count}
            </p>
          </div>
          <p>Número de clicks {count}</p>
          <div className="justify-content-center">
            <button
              className="btn btn-success"
              onClick={() => saveCount(count + 1)}
            >
              Aumenta
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                if (count > 0) saveCount(count - 1);
              }}
            >
              Decrece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
