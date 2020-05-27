import React, { Component } from 'react'
import './Counter.css'
import Display from './Display'
import IncrementForm from './IncrementForm'
import Buttons from './Buttons'

export default class Counter extends Component{
	
	state = {
		increment:this.props.increment,
		value: 0
	} 

	increase = () => {
		this.setState({
			value: this.state.value + this.state.increment
		})
	}

	decrease = () => {
		this.setState({
			value: this.state.value -this.state.increment
		})
	}

	changeIncrement = (newIncrement) => {
		this.setState({
			increment: newIncrement
		})
	}

	render(){
		return (
			<div>
				<h2>Counter</h2>
				<IncrementForm increment={this.state.increment}
				onIncrementChange={this.changeIncrement}/>
				<Display value={this.state.value}></Display>
				<Buttons onIncrease={this.increase} onDecrease={this.decrease} ></Buttons>
			</div>
		)
	}	

}