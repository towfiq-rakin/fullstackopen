import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchQuery, setSearchQuery] = useState('')
  const [notification, setNotification] = useState(null)
  
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
  
  const deletePerson = (person) => {
    if(confirm(`Delete ${person.name} ?`)) {
      personServices
      .deletePer(person.id)
      .then(()=>{
        //console.log('deleted',id)
        setPersons(persons.filter(p => p.id !== person.id));
      })
      .catch(error=>{
        console.log(error)
        setNotification({
          message:`Information of ${person.name} has already been deleted from server`,
          type:'error'
        })
        setPersons(persons.filter(p=>p.id!==person.id))
        setTimeout(()=>setNotification(null),5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification info={notification}/>
      <Filter value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
      <h2>Add a new</h2>
      <PersonForm 
        persons={persons} 
        setPersons={setPersons} 
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <Persons persons={personToShow} delPerson={deletePerson}/>
    </div>
  )
}

export default App