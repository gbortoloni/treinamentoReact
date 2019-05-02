import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: this.props.numero
  };

  maisUm = () => {
    this.alterarNumero(1);
  };

  menosUm = () => {
    this.alterarNumero(-1);
  };

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca });
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
        <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
      </div>
    );
  }
}

//Solução 01
// constructor(props) {
//   super(props);
//   this.maisUm = this.maisUm.bind(this);
// }

//Solução 02
//<button onClick={() => this.maisUm()}>Inc</button>

//Solução 03
// maisUm = () => {
//     this.state.numero++;
//   }
