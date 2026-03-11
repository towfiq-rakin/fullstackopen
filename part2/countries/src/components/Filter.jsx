import { useState } from 'react'
import CountryDetail from './CountryDetail'

const Filter = ({ value, onChange, countries }) => {
  const [showCountry, setShowCountry] = useState(null)

  const countryDisplay = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    } 
    
    if (countries.length === 1) {
      return <CountryDetail country={countries[0]} />
    }

    // Only show the specific country if it is still among the search results
    const countryInResults = showCountry && countries.find(c => c.cca3 === showCountry.cca3)
    if (countryInResults) {
      return (
        <div>
          <button onClick={() => setShowCountry(null)}>back to list</button>
          <CountryDetail country={countryInResults} />
        </div>
      )
    }

    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {countries.map(country => (
          <li key={country.cca3}>
            {country.name.common} 
            <button onClick={() => setShowCountry(country)}>show</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <div>
        find countries
        <input 
          type="text" 
          value={value}
          onChange={onChange}
        />
      </div>
      <div>{countryDisplay()}</div>
    </div>
  )
}

export default Filter