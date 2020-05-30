import React, { useState } from 'react'


export default props => {
	
	const [person, setPerson] = useState({name: '', id: null});
	

	let sendPerson = () => {
		if(person.name === '') return;
		setPerson(person.id)
		//Calling function passed by properties
		props.onSubmit(person)

		//Cleaning the input box
		setPerson({name: '', id: person.id})
	}

	return (
		<div>
			<input type="text" value={person.name} placeholder="Name"
			onChange={(e) => setPerson({name: e.target.value}) }/>
			<button onClick={sendPerson}>Add</button>		
		</div>
	)
}