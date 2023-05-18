import React, { useState } from 'react'
import './App.css'

function App() {
  
//ENTER YOUR API KEY BELOW
  const apiKey = 'EXAMPLE-API'
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

  const [ errorMessage, setErrorMessage ] = useState('');

  const [ weatherData, setWeatherData ] = useState([{}])
  const [ city, setCity ] = useState('')
  const getWeather = (event) => {
    if (event.key === 'Enter') {
      if (apiKey === 'EXAMPLE-API') {
        setErrorMessage('Please enter YOUR unique Api Key in line 7 of App.js');
        return;
      }
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check spelling.');
      } else if (response.status === 401) {
        throw new Error('Invalid API, please try again');
      } else {
        throw new Error('An error occurred. Please try again later.');
      }
    }
    return response.json();
  })
  .then(data => {
    setWeatherData(data);
    setCity('');
    setErrorMessage('');
  })
  .catch(error => {
    setErrorMessage(error.message);
    console.log(error); // To log the error to the console for debugging purposes
  });

  }
};

  function handleClick() {
    if (apiKey === 'EXAMPLE-API') {
      setErrorMessage('Please enter YOUR unique Api Key in line 7 of App.js');
      return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
  .then(response => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check spelling.');
      } else if (response.status === 401) {
        throw new Error('Invalid API, please try again');
      } else {
        throw new Error('An error occurred. Please try again later.');
      }
    }
    return response.json();
  })
  .then(data => {
    setWeatherData(data);
    setCity('');
    setErrorMessage('');
  })
  .catch(error => {
    setErrorMessage(error.message);
    console.log(error); // To log the error to the console for debugging purposes
  });
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
{errorMessage ? (
  <p className='error-message'>{errorMessage}</p>
) : weatherData.cod === '404' && city !== '' ? (
  <p className='error-message'>City not found. Please check spelling.</p>
) : null}

    </div>
  )
}

export default App
