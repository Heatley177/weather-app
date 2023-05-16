import React, { useState } from 'react'
import './App.css'

function App() {
  
  const apiKey = 'd366064fd720218ae086c75058de12a4'
  const [ weatherData, setWeatherData ] = useState([{}])
  const [ city, setCity ] = useState('')
  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity('')
        }
      )
    }
  }
  function handleClick() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity('')
        }
      )
    }

  return (
    <div className='container'>
      <h1>Yet Another Weather App</h1>
      <input 
      placeholder='Enter City...'
      className='input'
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />
      <button className='button' onClick={handleClick}>Search Weather</button>
      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>What's the weather like today? Enter in a city to get started.</p>
        </div>
      ): (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°F</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
      )}

          {weatherData.cod === '404' ? (
            <p className='error-message'>City not found. Please check spelling.</p>
          ): (
            <>
            </>
          )}
    </div>
  )
}

export default App
