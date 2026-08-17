import React, { useState, useEffect } from 'react';
import { getWeather } from "../api/weatherApi";
import { FaTemperatureHigh, FaTemperatureLow, FaSearch, FaMapMarkerAlt } from "react-icons/fa";



export default function Tempeture() {


//Because OpenWeather doesn't automatically give us:"Here are the hottest cities in Sri Lanka."We need to ask for the weather of several cities ourselves
const sriLankanCities = [
"Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Mullaitivu",
  "Vavuniya",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Monaragala",
  "Ratnapura",
  "Kegalle"
];

  // Hottest and coldest cities
  const [highestCities, setHighestCities] = useState([]);
  const [lowestCities, setLowestCities] = useState([]);

  // Search input
  const [location, setLocation] = useState("");

  // City that was actually searched
  const [searchCity, setSearchCity] = useState("");

  // Search weather
  const [temperature, setTemperature] = useState(null);



useEffect(() => {

    const fetchWeatherByCity = async () => {

      try {

        // Send all city requests at the same time
        const results = await Promise.all(

          sriLankanCities.map(async (city) => {

            try {

              const data = await getWeather(city);

              // Check if city was found
              if (data.cod !== 200) {

                console.log("Could not find:", city);

                return null;
              }

              return {
                city: city,
                temperature: data.main.temp
              };

            } catch (error) {

              console.log("Error getting weather for:", city);

              return null;
            }

          })

        );


        // Remove cities that failed
        const weatherList = results.filter(
          (city) => city !== null
        );


        // Highest temperatures
        const highest = [...weatherList]
          .sort((a, b) => b.temperature - a.temperature)
          .slice(0, 3);


        // Lowest temperatures
        const lowest = [...weatherList]
          .sort((a, b) => a.temperature - b.temperature)
          .slice(0, 3);


        // Save results
        setHighestCities(highest);
        setLowestCities(lowest);

      } catch (error) {

        console.log("Error getting Sri Lankan weather:", error);

      }

    };

    fetchWeatherByCity();


}, []);   // use [] instead of [location] becuse we want to get the Sri Lankan city temperatures when the page loads.We don't want to repeatedly request all 10 cities every time the user types something.








   useEffect(() => {

    // Don't search if nothing has been searched
    if (searchCity.trim() === "") {
      return;
    }

    const fetchWeather = async () => {

      try {

        const data = await getWeather(searchCity);

        // City not found
        if (data.cod !== 200) {

          console.log("City not found:", searchCity);

          setTemperature(null);


          return;
        }

        // Current temperature
        setTemperature(data.main.temp);



      } catch (error) {

        console.log("Error getting weather:", error);

        setTemperature(null);


      }

    };

     fetchWeather();

       }, [searchCity]);


 return (

    <div className="temperature-page">

      {/* PAGE HEADER */}
      <div className="temperature-header">

        <div>
          <h1>Temperature Overview</h1>
          <p>Current temperatures across Sri Lanka</p>
        </div>

        <div className="temperature-header-icon">
          <FaTemperatureHigh />
        </div>

      </div>


      {/* =========================
          HOTTEST AND COLDEST CITIES
      ========================== */}

      <div className="temperature-cards">


        {/* =========================
            HOTTEST CITIES
        ========================== */}

        <div className="temperature-card hottest-card">

          <div className="temperature-card-header">

            <div>
              <span className="temperature-icon hot-icon">
                <FaTemperatureHigh />
              </span>

              <div>
                <h2>Hottest Cities</h2>
                <p>Highest temperatures</p>
              </div>
            </div>

            <span className="temperature-badge">
              TOP 3
            </span>

          </div>


          <div className="city-list">

            {highestCities.map((city, index) => (

              <div className="city-temperature-item" key={city.city}>

                <div className="city-info">

                  <span className="city-rank">
                    {index + 1}
                  </span>

                  <span className="city-name">
                    {city.city}
                  </span>

                </div>

                <span className="city-temp hot-temp">
                  {city.temperature} °C
                </span>

              </div>

            ))}

          </div>

        </div>



        {/* =========================
            COLDEST CITIES
        ========================== */}

        <div className="temperature-card coldest-card">

          <div className="temperature-card-header">

            <div>
              <span className="temperature-icon cold-icon">
                <FaTemperatureLow />
              </span>

              <div>
                <h2>Coldest Cities</h2>
                <p>Lowest temperatures</p>
              </div>
            </div>

            <span className="temperature-badge">
              TOP 3
            </span>

          </div>


          <div className="city-list">

            {lowestCities.map((city, index) => (

              <div className="city-temperature-item" key={city.city}>

                <div className="city-info">

                  <span className="city-rank">
                    {index + 1}
                  </span>

                  <span className="city-name">
                    {city.city}
                  </span>

                </div>

                <span className="city-temp cold-temp">
                  {city.temperature} °C
                </span>

              </div>

            ))}

          </div>

        </div>


      </div>



      {/* =========================
          SEARCH
      ========================== */}

      <div className="temperature-search-card">

        <div className="search-title">

          <div className="search-title-icon">
            <FaSearch />
          </div>

          <div>
            <h2>Search Weather</h2>
            <p>Check the current temperature of a city</p>
          </div>

        </div>


        <div className="weather-search">

          <div className="search-input-wrapper">

            <FaMapMarkerAlt />

            <input
              type="text"
              placeholder="Enter city name..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

          </div>


          <button
            className="search-button"
            onClick={() => setSearchCity(location)}
          >

            <FaSearch />
            Search

          </button>

        </div>


        {/* =========================
            SEARCH RESULT
        ========================== */}

        {searchCity !== "" && (

          <div className="search-result">

            <div className="result-location">

              <FaMapMarkerAlt />

              <div>

                <span>Location</span>

                <h3>
                  {searchCity}
                </h3>

              </div>

            </div>


            {temperature !== null ? (

              <div className="result-temperature">

                <span>Current Temperature</span>

                <strong>
                  {temperature}°C
                </strong>

              </div>

            ) : (

              <p className="weather-not-found">
                Weather information not found.
              </p>

            )}

          </div>

        )}

      </div>


    </div>

  );
}