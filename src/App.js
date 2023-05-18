import React, { useState } from 'react'
import './App.css'

function App() {
  
//ENTER YOUR API KEY BELOW
  const apiKey = 'EXAMPLE API'
//ENTER YOUR API KEY ABOVE



  const currentDate = (d) => {
    let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


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
          <div className='date' >{currentDate(new Date())}</div>
        </div>
      ): (
        <div className='weather-data'>
          <div className='date' >{currentDate(new Date())}</div>
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
