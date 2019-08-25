import React from "react";
import Buttons from "./buttons";



class Calculator extends React.Component {
  render () {
    return (
      <div className="block">
		    <h1>the calculator</h1>
		    <Buttons />
      </div>
    );
  }
}

export default Calculator;