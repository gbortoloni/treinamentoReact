import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import CounterRedux from "./componentes/CounterRedux";
import counterReducer from "./reducers/counterReducer";
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
// import Hook from "./componentes/Hook";

const reducers = combineReducers({
  counter: counterReducer
});

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Provider store={createStore(reducers)}>
      {/* <Field initialValue="Teste" /> */}
      <CounterRedux/>
    </Provider>
    {/* <PrimeiroComponente valor="Ola" /> */}
    {/* <Hook /> */}
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
  </div>,
  elemento
);
