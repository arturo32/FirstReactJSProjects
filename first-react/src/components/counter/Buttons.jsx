import React, { Component } from 'react'



export default class Display extends Component{

	render(){
		return(
			<div>
				<button onClick={this.props.onIncrease}>+</button>
				<button onClick={this.props.onDecrease}>-</button>
			</div>
		)
	}



}