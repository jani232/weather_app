


# 🌦️ Weather App

A React-based weather application that provides current weather information for cities in Sri Lanka using the OpenWeather API.

The application allows users to search for weather information and explore different weather measurements such as temperature, wind, humidity, visibility, and atmospheric pressure.

## 🚀 Features

- 🌡️ Current temperature
- 🔥 Top 3 hottest cities in Sri Lanka
- ❄️ Top 3 coldest cities in Sri Lanka
- 💨 Wind speed, direction and gust
- 💧 Humidity information
- 👁️ Visibility information
- 🌡️ Temperature search by city
- 🔍 Weather search functionality
- 🗺️ Interactive weather map
- 📍 Weather information based on map location
- 🌪️ Atmospheric pressure
- 📱 Responsive user interface

## 🛠️ Technologies Used

- React.js
- JavaScript
- Vite
- React Hooks
  - useState
  - useEffect
  - useRef
- React Router
- React Icons
- React Leaflet
- OpenStreetMap
- OpenWeather API
- CSS

## 📡 API

This project uses the OpenWeather Current Weather API.

OpenWeather documentation:

https://openweathermap.org/api/current?collection=current_forecast

The API provides weather information including temperature, humidity, pressure, visibility, wind speed, wind direction and wind gust where available.

## 🔑 Environment Variables

The OpenWeather API key is stored in an environment variable and is not included in the repository.

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_api_key_here