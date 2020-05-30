import React from 'react'

import PeopleList from './PeopleList'
import AddPersonForm from './AddPersonForm'
import addPerson from '../actions'
import { connect } from 'react-redux'




function ContactManager(props){

	//const [listItens, setListItens] = useState([]);
	
	function handleClick(person){
		props.addPerson(person);	
		//setListItens([...listItens, <li className="contact" key={person.id}>{person.name}</li>])
	}
	

	return(
		<div>
			<h1>Contact Manager</h1>
			<AddPersonForm onSubmit={handleClick}/>
			<PeopleList/>
		</div>

	)
}

/*Map actions (that will be send to be dispatch) to the
properties of Contact Manager*/
const mapDispatchToProps = {
	addPerson
}

export default connect(null, mapDispatchToProps)(ContactManager)