import { useState } from "react"
import { useEffect } from "react"
import Filter from "./components/Filter"
import countryServices from "./services/countries"


const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=>{
    countryServices
    .getAll()
    .then(initCountries=>{
      setCountries(initCountries)
    })
  },[])
  
  const filteredCountries = countries
    .filter(country => 
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
  return (
    <div>
      <h1>Countries</h1>
      <Filter 
        value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}
        countries={filteredCountries}
      />
    </div>
  )
}

export default App
