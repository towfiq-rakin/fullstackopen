import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=>{
    //console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      //console.log('fullfilled');
      setPersons(response.data)
    })
  },[])
  //console.log('render',persons.length, 'persons');
  
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