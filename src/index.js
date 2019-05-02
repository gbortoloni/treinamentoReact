import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/PrimeiroComponente";
// import CompA, { CompB as B } from "./componentes/DoisComponentes";
// import MultiElementos from "./componentes/MultiElementos";
// import FamiliaBortoloni from "./componentes/FamiliaBortoloni";
// import Familia from "./componentes/Familia";
// import Membro from "./componentes/Membro";
// import ComponenteComFuncao from "./componentes/ComponenteComFuncao";
// import Pai from "./componentes/Pai";
// import ComponenteClasse from "./componentes/ComponenteClasse";
// import Contador from "./componentes/Contador";
import Hook from "./componentes/Hook";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador numero={0}/> */}
    {/* <ComponenteClasse valor="Componente de classe"/> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Bortoloni">
      <Membro nome="Giuliano" />
      <Membro nome="Marcia" />
    </Familia> */}
    {/* <FamiliaBortoloni sobrenome="Agria"/> */}
    {/* <MultiElementos /> */}
    {/* <CompA valor="Ola eu sou o A" />
    <B valor="Ola eu sou o B" /> */}
    {/* <PrimeiroComponente valor="Ola"/> */}
  </div>,
  elemento
);
