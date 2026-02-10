import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '040-12234567'
    }
  ]) 
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
        phone: newPhone
      }
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewPhone('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handleNewPhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=> (
        <p key={person.name}>{person.name} {person.phone}</p>
      )
      )}
    </div>
  )
}

export default App