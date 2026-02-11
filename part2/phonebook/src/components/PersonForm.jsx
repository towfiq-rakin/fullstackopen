import { useState } from "react"
import personServices from './../services/persons'

const PersonForm = ({ persons, setPersons }) => {

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person =>
      person.name === newName
    )

    if (nameExists) {
      console.log(nameExists)
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const nameObj = 
      { 
        name: newName,
        number: newPhone
      }
      
      personServices
      .create(nameObj)
      .then(newPerson=>{
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewPhone('')
      })
    }

  }
  return (
    <form onSubmit={addPerson} >
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handleNewPhone}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
} 

export default PersonForm