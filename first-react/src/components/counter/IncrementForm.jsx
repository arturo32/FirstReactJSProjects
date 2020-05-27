import React, { Component } from 'react'



export default class Display extends Component{

	render(){
		return(
			<div>
				<label htmlFor="incrementInput">Increment:</label>
				<input id="incrementInput" type="number" value={this.props.increment}
				onChange={e => this.props.onIncrementChange(+e.target.value)}/>	
			</div>
			
		)
	}



}