import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/PrimeiroComponente";
// import { CompA, CompB } from "./componentes/DoisComponentes";
import MultiElementos from "./componentes/MultiElementos";
const elemento = document.getElementById("root");

ReactDOM.render(
  <div>
    <MultiElementos />
    {/* <CompA valor="Ola eu sou o A" />
    <CompB valor="Ola eu sou o B" /> */}
    {/* <PrimeiroComponente valor="Ola"/> */}
  </div>,
  elemento
);
