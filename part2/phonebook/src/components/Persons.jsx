const Persons = ({persons, delPerson}) => {
    const deletePerson = (person) => {
        //console.log(person)
        delPerson(person)
        //console.log('invoked deletePerson', id)
    }
    return (
        <div>
            {persons.map(person=> (
                <p key={person.name}>
                    {person.name} {person.number}  
                    <button onClick={()=>deletePerson(person)}>
                        delete
                    </button>
                </p>
            ))}
        </div>
    )
}

export default Persons