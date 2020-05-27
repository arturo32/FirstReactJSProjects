import React, { useState } from 'react'
import Sub from './Sub'


export default props => {

	const [text, setText] = useState('Value')
	const [num, setNum] = useState(0)

	function whenClick(generatedValue, text){
		console.log("Action!!!")
		setText(text)
		setNum((generatedValue*100).toFixed(0))
		console.log(num);
	}

	return(
		<div>
			<h4>{text}: {num}</h4>
			<Sub onClicks={whenClick}></Sub>
		</div>
	)
}