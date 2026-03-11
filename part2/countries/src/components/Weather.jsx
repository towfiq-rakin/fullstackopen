import { useState, useEffect } from 'react'
import weatherServices from '../services/weather'


const Weather = ({country}) => {

    const [weather, setWeather] = useState(null)

    useEffect(()=>{
        if (country.capitalInfo && country.capitalInfo.latlng) {
            weatherServices
            .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
            .then(initWeather=>{
                setWeather(initWeather)
            })
        }
    },[country])

    if (!weather) {
        return null
    }

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather