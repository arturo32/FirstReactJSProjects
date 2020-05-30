

const initialState = {
	people: [{name: 'Arturo', id: 1}]
}


export default (state=initialState, action) => {
	switch (action.type) {
		case 'ADD_PERSON':

			let newId = state.people[state.people.length -1].id + 1;
			let newPerson = {...action.payload, id: newId};
		
			return {people: [...state.people, newPerson]};
			
		default:
			return state;
	}
}
