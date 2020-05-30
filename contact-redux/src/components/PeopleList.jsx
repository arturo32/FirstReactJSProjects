import React from 'react'
import { connect } from 'react-redux'


//Each time the state changes PeopleList will be re-rendered, with an updated props.people
function PeopleList(props){
	
	const listItens = props.people.map(p => <li className="contact" key={p.id}>{p.name}</li>);
	
	return (	
		<div id="ContactList">	
			<ul>{listItens}</ul>
		</div>
	)
}


//Function that maps "global" state objects to properties in People List
function mapStateToProps(state){
	return{
		people: state.people
	}
}

export default connect(mapStateToProps)(PeopleList)