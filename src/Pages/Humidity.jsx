import React, { useState, useEffect } from 'react';
import { getWeather } from "../api/weatherApi";
import {
  FaTint,
  FaSearch,
  FaMapMarkerAlt
} from "react-icons/fa";


export default function Humidity() {


  // Sri Lankan cities
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


  // Highest and lowest humidity cities
  const [highestCities, setHighestCities] = useState([]);
  const [lowestCities, setLowestCities] = useState([]);


  // Search input
  const [location, setLocation] = useState("");


  // City that was actually searched
  const [searchCity, setSearchCity] = useState("");


  // Search humidity
  const [humidity, setHumidity] = useState(null);



  // =========================================
  // GET HUMIDITY FOR ALL SRI LANKAN CITIES
  // =========================================

  useEffect(() => {

    const fetchHumidityByCity = async () => {

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

                humidity: data.main.humidity

              };

            } catch (error) {

              console.log(
                "Error getting weather for:",
                city
              );

              return null;

            }

          })

        );


        // Remove cities that failed
        const weatherList = results.filter(
          (city) => city !== null
        );


        // Highest humidity
        const highest = [...weatherList]
          .sort((a, b) => b.humidity - a.humidity)
          .slice(0, 3);


        // Lowest humidity
        const lowest = [...weatherList]
          .sort((a, b) => a.humidity - b.humidity)
          .slice(0, 3);


        // Save results
        setHighestCities(highest);
        setLowestCities(lowest);


      } catch (error) {

        console.log(
          "Error getting Sri Lankan humidity:",
          error
        );

      }

    };


    fetchHumidityByCity();


  }, []);



  // =========================================
  // SEARCH HUMIDITY
  // =========================================

  useEffect(() => {


    // Don't search if nothing has been searched
    if (searchCity.trim() === "") {

      return;

    }


    const fetchHumidity = async () => {

      try {

        const data = await getWeather(searchCity);


        // City not found
        if (data.cod !== 200) {

          console.log(
            "City not found:",
            searchCity
          );

          setHumidity(null);

          return;

        }


        // Current humidity
        setHumidity(
          data.main.humidity
        );


      } catch (error) {

        console.log(
          "Error getting humidity:",
          error
        );

        setHumidity(null);

      }

    };


    fetchHumidity();


  }, [searchCity]);



  return (

    <div className="temperature-page">


      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className="temperature-header">

        <div>

          <h1>
            Humidity Overview
          </h1>

          <p>
            Current humidity across Sri Lanka
          </p>

        </div>


        <div className="temperature-header-icon">

          <FaTint />

        </div>

      </div>



      {/* =========================================
          HIGHEST AND LOWEST HUMIDITY
      ========================================= */}

      <div className="temperature-cards">


        {/* =========================================
            HIGHEST HUMIDITY
        ========================================= */}

        <div className="temperature-card hottest-card">


          <div className="temperature-card-header">


            <div>

              <span className="temperature-icon hot-icon">

                <FaTint />

              </span>


              <div>

                <h2>
                  Highest Humidity
                </h2>

                <p>
                  Most humid cities
                </p>

              </div>

            </div>


            <span className="temperature-badge">

              TOP 3

            </span>


          </div>



          <div className="city-list">


            {highestCities.map((city, index) => (

              <div
                className="city-temperature-item"
                key={city.city}
              >


                <div className="city-info">


                  <span className="city-rank">

                    {index + 1}

                  </span>


                  <span className="city-name">

                    {city.city}

                  </span>


                </div>


                <span className="city-temp hot-temp">

                  {city.humidity}%

                </span>


              </div>

            ))}


          </div>


        </div>



        {/* =========================================
            LOWEST HUMIDITY
        ========================================= */}

        <div className="temperature-card coldest-card">


          <div className="temperature-card-header">


            <div>

              <span className="temperature-icon cold-icon">

                <FaTint />

              </span>


              <div>

                <h2>
                  Lowest Humidity
                </h2>

                <p>
                  Least humid cities
                </p>

              </div>

            </div>


            <span className="temperature-badge">

              TOP 3

            </span>


          </div>



          <div className="city-list">


            {lowestCities.map((city, index) => (

              <div
                className="city-temperature-item"
                key={city.city}
              >


                <div className="city-info">


                  <span className="city-rank">

                    {index + 1}

                  </span>


                  <span className="city-name">

                    {city.city}

                  </span>


                </div>


                <span className="city-temp cold-temp">

                  {city.humidity}%

                </span>


              </div>

            ))}


          </div>


        </div>


      </div>



      {/* =========================================
          SEARCH
      ========================================= */}

      <div className="temperature-search-card">


        <div className="search-title">


          <div className="search-title-icon">

            <FaSearch />

          </div>


          <div>

            <h2>
              Search Humidity
            </h2>

            <p>
              Check the current humidity of a city
            </p>

          </div>


        </div>



        <div className="weather-search">


          <div className="search-input-wrapper">

            <FaMapMarkerAlt />


            <input

              type="text"

              placeholder="Enter city name..."

              value={location}

              onChange={(e) =>
                setLocation(e.target.value)
              }

            />

          </div>



          <button

            className="search-button"

            onClick={() =>
              setSearchCity(location)
            }

          >

            <FaSearch />

            Search

          </button>


        </div>



        {/* =========================================
            SEARCH RESULT
        ========================================= */}

        {searchCity !== "" && (


          <div className="search-result">


            <div className="result-location">


              <FaMapMarkerAlt />


              <div>

                <span>
                  Location
                </span>

                <h3>

                  {searchCity}

                </h3>

              </div>


            </div>



            {humidity !== null ? (


              <div className="result-temperature">


                <span>
                  Current Humidity
                </span>


                <strong>

                  {humidity}%

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