import React from "react";
import Membro from "./Membro";

export default props => (
    <div>
        <Membro nome="Giuliano" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Marcia" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Benjamin" sobrenome={props.sobrenome}></Membro>
    </div>
)