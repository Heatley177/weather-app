# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and utilizing api key from [openweathermap.org](https://openweathermap.org/). 

## Features

- Current weather display upon input of desired city.
- "Enter" key & button click activates data fetch
- Error message kindly display "City not found. Please check spelling." along with mild shake animation
- Current date display
- Error display message focusing on error 401 (invalid API Key), error 404 (invalid city), & not changing the EXAMPLE-API (src -> App.js -> Line 7) to YOUR unique API Key to allow the app to be usable.

### How to Use

Create an account on [openweathermap.org](https://openweathermap.org/) to get a free API key and add to the existing code (src -> App.js -> Line 7). Save changes and run "npm start" to use in your localhost browser. 

PLEASE NOTE, When setting up a new openweathermap account, the generated API key takes some considerable time to get set up: Your API key will be activated automatically, between 10 minutes and 2 hours after your successful registration.
