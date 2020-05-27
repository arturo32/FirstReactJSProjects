import React, { useState } from 'react'


export default (props) => {

	const [numbers, setNumbers] = useState(Array(props.qtyOfNumbers).fill(0))
	
	function generateNewNumber(array){
		const newNumber = parseInt(Math.random()*59)+1
		return array.includes(newNumber) ? generateNewNumber(array) : newNumber
	}

	function generateNumbers(){
		
		const a = Array(props.qtyOfNumbers).fill(0)
		.reduce(array => [...array, generateNewNumber(array)], [])
		
		setNumbers(a)
	}

	return (
		<>
			<h3>Mega</h3>
			<h4>{numbers.join(" ")}</h4>
			<button onClick={generateNumbers}>Generate Number</button>
		</>
	)
}