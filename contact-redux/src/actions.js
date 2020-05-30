
export default function addPerson(person){
	return{
		type: "ADD_PERSON",
		payload: person
	}
}