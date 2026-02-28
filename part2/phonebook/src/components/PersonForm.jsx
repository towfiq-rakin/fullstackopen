import { useState } from "react"
import personServices from './../services/persons'

const PersonForm = ({ persons, setPersons, setNotification }) => {

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
    

    const existingPerson = persons.find(person =>
      person.name.toLowerCase() === newName.toLowerCase()
    )

    if (existingPerson) {
      console.log(existingPerson)
      //alert(`${newName} is already added to phonebook`)
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const upadatedPersonObj = { ...existingPerson, number: newPhone }

        personServices
        .update(existingPerson.id, upadatedPersonObj)
        .then(returnedPersons=>{
          setPersons(persons.map(person=>
            person.name === existingPerson.id ? returnedPersons : person
          ))
          setNewName('')
          setNewPhone('')
        })

        setNotification(
          `Updated ${existingPerson.name}`
        )

        setTimeout(()=>{setNotification(null)},5000)
      }
    }
    else{
      const newPersonObj = 
      { 
        name: newName,
        number: newPhone
      }
      
      personServices
      .create(newPersonObj)
      .then(newPerson=>{
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewPhone('')
      })

      setNotification(
        `Added ${newPersonObj.name}`
      )

      setTimeout(()=>{setNotification(null)},5000)
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