const Persons = ({persons, delPerson}) => {
    const deletePerson = (id) => {
        delPerson(id)
        //console.log('invoked deletePerson', id)
    }
    return (
        <div>
            {persons.map(person=> (
                <p key={person.name}>
                    {person.name} {person.number}  
                    <button onClick={()=>deletePerson(person.id)}>
                        delete
                    </button>
                </p>
            ))}
        </div>
    )
}

export default Persons