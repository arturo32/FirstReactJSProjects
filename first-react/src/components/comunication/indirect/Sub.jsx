import React from 'react'


export default props => {
	
	return (
	<div>
		<button onClick={() => {
			props.onClicks(Math.random(), 'Generated')
		}}>Change</button>
	</div>
	)
}