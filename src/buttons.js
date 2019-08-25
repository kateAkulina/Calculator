import React, { Component } from "react";
import { numberLiteralTypeAnnotation } from "@babel/types";
import Calculator from "./App";
import { id, ID } from "postcss-selector-parser";

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.addNum = this.addNum.bind(this);
		this.setOp = this.setOp.bind(this);
		this.calc = this.calc.bind(this);
		this.clear = this.clear.bind(this);
		this.state = {
			v1: '',
			v2: '',
			op: '',
		};
	}

	addNum({target : { value }}) {
		let { v1, op, v2 } = this.state ; 
		if (op) {
			v2 += value;
			this.setState({v2});
		} else {
			v1 += value;
			this.setState({v1});
		}
	}

	setOp({target : {value}}) {
		const {op} = this.state;
		if (op) {
			this.calc()
		}
		this.setState({op: value});
	}

	clear() {
		this.setState({v1: '', v2: '', op: ''});
	}

	calc() {
		let { v1, v2, op } = this.state;
		let res;
	
		if (op) {
			switch (op) {
				case '+':
					res = +v1 + +v2;
					break;
				case '-':
					res = +v1 - +v2;
					break;
				case '/':
					res = +v1 / +v2;
					break;
				case '*':
					res = +v1 * +v2;
					break;
				case '%':
					res = +v1 % +v2;
			}
			this.setState({v1: res, op: '', v2: ''});
		}
	}

	render () {
		const { v1, op, v2 } = this.state;
		return (
			<div className="calculator">
				<div className="output">{v1}{' '}{op}{' '}{v2}</div>
				<div class="first_line">
					<button className="btn" onClick={this.clear}>c</button>
					<button className="btn" onClick={this.calc}>=</button>
				</div>
				<div class="calc-row">
					<button className="btn" onClick={this.addNum} value="1">1</button>
					<button className="btn" onClick={this.addNum} value="2">2</button>
					<button className="btn" onClick={this.addNum} value="3">3</button>   
					<button className="btn" onClick={this.setOp} value="+">+</button>
				</div>
				<div class="calc-row">
					<button className="btn" onClick={this.addNum} value="4">4</button>
					<button className="btn" onClick={this.addNum} value="5">5</button>
					<button className="btn" onClick={this.addNum} value="6">6</button>
                	<button className="btn" onClick={this.setOp} value="-">-</button>
				</div>
				<div class="calc-row">
                	<button className="btn" onClick={this.addNum} value="7">7</button>
                	<button className="btn" onClick={this.addNum} value="8">8</button>
                	<button className="btn" onClick={this.addNum} value="9">9</button>
                	<button className="btn" onClick={this.setOp} value="*">*</button>
				</div>
				<div class="last_line">
					<button className="btn" id="zero" onClick={this.addNum} value="0">0</button>
                	<button className="btn" onClick={this.setOp} value="/">/</button>
					<button className="btn" onClick={this.setOp} value="%">%</button>
            	</div>
            </div>
        );
	};
}

export default Buttons;
