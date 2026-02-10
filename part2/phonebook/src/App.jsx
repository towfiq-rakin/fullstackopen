import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [searchQuery, setSearchQuery] = useState('')

  const personToShow = searchQuery === '' ?
    persons:
    persons.filter(person=>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={personToShow}/>
    </div>
  )
}

export default App