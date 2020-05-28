import React, { useState } from 'react'

import PeopleList from './PeopleList'
import AddPersonForm from './AddPersonForm'


export default (props) => {

	const [listItens, setListItens] = useState([]);
	
	function addPerson(person){
		setListItens([...listItens, <li className="contact" key={person.id}>{person.name}</li>])
	}

	return(
		<div>
			<h1>Contact Manager</h1>
			<AddPersonForm onSubmit={addPerson}/>
			<PeopleList people={listItens}/>
		</div>

	)
}