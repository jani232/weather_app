import React, { useState, useEffect } from 'react';
import { getWeather } from "../api/weatherApi";
import {
  FaEye,
  FaSearch,
  FaMapMarkerAlt
} from "react-icons/fa";


export default function Visibility() {


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


  // Highest and lowest visibility cities
  const [highestCities, setHighestCities] = useState([]);
  const [lowestCities, setLowestCities] = useState([]);


  // Search input
  const [location, setLocation] = useState("");


  // City that was actually searched
  const [searchCity, setSearchCity] = useState("");


  // Search visibility
  const [visibility, setVisibility] = useState(null);



  // =========================================
  // GET VISIBILITY FOR ALL SRI LANKAN CITIES
  // =========================================

  useEffect(() => {

    const fetchVisibilityByCity = async () => {

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


              // OpenWeather gives visibility in meters
              // Convert meters to kilometers
              const visibilityKm =
                data.visibility / 1000;


              return {

                city: city,

                visibility: visibilityKm

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


        // Highest visibility
        const highest = [...weatherList]
          .sort(
            (a, b) =>
              b.visibility - a.visibility
          )
          .slice(0, 3);


        // Lowest visibility
        const lowest = [...weatherList]
          .sort(
            (a, b) =>
              a.visibility - b.visibility
          )
          .slice(0, 3);


        // Save results
        setHighestCities(highest);
        setLowestCities(lowest);


      } catch (error) {

        console.log(
          "Error getting Sri Lankan visibility:",
          error
        );

      }

    };


    fetchVisibilityByCity();


  }, []);



  // =========================================
  // SEARCH VISIBILITY
  // =========================================

  useEffect(() => {


    // Don't search if nothing has been searched
    if (searchCity.trim() === "") {

      return;

    }


    const fetchVisibility = async () => {

      try {

        const data = await getWeather(searchCity);


        // City not found
        if (data.cod !== 200) {

          console.log(
            "City not found:",
            searchCity
          );

          setVisibility(null);

          return;

        }


        // Convert meters to kilometers
        const visibilityKm =
          data.visibility / 1000;


        // Save visibility
        setVisibility(visibilityKm);


      } catch (error) {

        console.log(
          "Error getting visibility:",
          error
        );

        setVisibility(null);

      }

    };


    fetchVisibility();


  }, [searchCity]);



  return (

    <div className="temperature-page">


      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className="temperature-header">

        <div>

          <h1>
            Visibility Overview
          </h1>

          <p>
            Current visibility across Sri Lanka
          </p>

        </div>


        <div className="temperature-header-icon">

          <FaEye />

        </div>

      </div>



      {/* =========================================
          HIGHEST AND LOWEST VISIBILITY
      ========================================= */}

      <div className="temperature-cards">


        {/* =========================================
            HIGHEST VISIBILITY
        ========================================= */}

        <div className="temperature-card hottest-card">


          <div className="temperature-card-header">


            <div>

              <span className="temperature-icon hot-icon">

                <FaEye />

              </span>


              <div>

                <h2>
                  Highest Visibility
                </h2>

                <p>
                  Clearest conditions
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

                  {city.visibility.toFixed(1)} km

                </span>


              </div>

            ))}


          </div>


        </div>



        {/* =========================================
            LOWEST VISIBILITY
        ========================================= */}

        <div className="temperature-card coldest-card">


          <div className="temperature-card-header">


            <div>

              <span className="temperature-icon cold-icon">

                <FaEye />

              </span>


              <div>

                <h2>
                  Lowest Visibility
                </h2>

                <p>
                  Reduced visibility
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

                  {city.visibility.toFixed(1)} km

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
              Search Visibility
            </h2>

            <p>
              Check the current visibility of a city
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



            {visibility !== null ? (


              <div className="result-temperature">


                <span>
                  Current Visibility
                </span>


                <strong>

                  {visibility.toFixed(1)} km

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