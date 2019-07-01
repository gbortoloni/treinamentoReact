import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { dec, inc, stepChanged } from "../actions/counterActions";

const Counter = props => (
  <div>
    <div>Número: {props.counter.number}</div>
    <input onChange={props.stepChanged} value={props.counter.step} type="number"/><br/>
    <button onClick={props.inc}>Inc</button><br/>
    <button onClick={props.dec}>Dec</button>
  </div>
);

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      dec,
      inc,
      stepChanged
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
