# Weather App

A simple weather application that allows users to check the weather for a specific location. The app features a **React** frontend and a **Java Spring Boot** backend hosted on Render.  

**Live App:** [Weather App](https://parkparkweatherapp.netlify.app/)  
**Backend Repository:** [Spring Boot Weather API](https://github.com/pjh000104/SpringbootWeatherAPI/tree/main)

## Features

- Enter a location to get current weather information.
- Switch between different metrics (e.g., Celsius/Fahrenheit, metric/imperial).  
- Simple and user-friendly interface.

## Tech Stack

- **Frontend:** React  
- **Backend:** Java Spring Boot  
- **Hosting:** Render (backend), Netlify (frontend)  

## Backend

The backend is built using **Java Spring Boot** and hosted on **Render**.  

**Important:** Render’s free plan puts apps to sleep when not in use. Before using the app, make sure the backend is awake by visiting:  
[https://springbootweatherapi.onrender.com/](https://springbootweatherapi.onrender.com/)

## Usage

1. Open the app: [https://parkparkweatherapp.netlify.app/](https://parkparkweatherapp.netlify.app/)  
2. Enter a location in the input field.  
3. Click the button to change metrics as needed.  
4. View the current weather data for your selected location.

## Notes

- The first request may take a few seconds if the backend is waking up from sleep.  
- Ensure an active internet connection to fetch data from the Spring Boot API.
