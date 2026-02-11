import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=>{
    personServices
    .getAll()
    .then(initPersons=>{
      setPersons(initPersons)
    })
  },[])
  
  const personToShow = searchQuery === '' ?
    persons:
    persons.filter(person=>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  
  const deletePerson = (id) => {
    personServices
    .deletePer(id)
    .then(()=>{
      //console.log('deleted',id)
      setPersons(persons.filter(person => person.id !== id));
    })
    .catch(error=>console.log(error))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={personToShow} delPerson={deletePerson}/>
    </div>
  )
}

export default App