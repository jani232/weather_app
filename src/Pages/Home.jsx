// Home.jsx
import React, { useEffect, useState } from 'react';
import {
  FaWind,
  FaLocationArrow,
  FaTint,
  FaEye,
  FaCalendarWeek,
  FaMapMarkedAlt,
  FaCloudSun,
  FaMapMarkerAlt,
  FaChevronRight,
  FaRegClock,
  FaCloudShowersHeavy,
  FaTachometerAlt
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { getWeather } from "../api/weatherApi";


const Home = () => {

  // Store weather data
  const [weather, setWeather] = useState(null);


  // Get weather when Home page loads
  useEffect(() => {

    const fetchWeather = async () => {

      try {

        // You can change Colombo to another default location
        const data = await getWeather("Colombo");

        if (data.cod === 200) {

          setWeather(data);

        }

      } catch (error) {

        console.log("Error getting weather:", error);

      }

    };

    fetchWeather();

  }, []);


  // Show loading while API is responding
  if (!weather) {

    return (
      <div className="card">
        <p>Loading weather...</p>
      </div>
    );

  }


  return (

    <div className="card">

      <div className="weather-layout">


        {/* =========================
            LOCATION + TEMPERATURE
        ========================== */}

        <div className="top-bar">

          <div className="location">

            <h1>
              {weather.name}, Sri Lanka
            </h1>

            <div className="date-time">

              <span>
                <FaRegClock /> Current Weather
              </span>

            </div>

          </div>


          <div className="weather-condition">

            <div className="temp-large">
              {Math.round(weather.main.temp)}°C
            </div>

            <div className="condition-tag">

              <FaCloudShowersHeavy />

              {weather.weather[0].description}

            </div>

          </div>

        </div>



        {/* =========================
            TODAY'S HIGHLIGHTS
        ========================== */}

        <div className="highlights">

          <div className="header-brand">

            <span className="update-badge">
              Today's Highlights
            </span>

          </div>


          <div className="highlight-grid">


            {/* WIND */}

            <div className="highlight-item">

              <div className="label">
                Wind Status
              </div>

              <div className="value">

                <FaLocationArrow />

                {(weather.wind.speed * 3.6).toFixed(1)}

                <span className="unit">
                  km/h
                </span>

              </div>

              <div className="sub">

                Direction: {weather.wind.deg}°

              </div>

            </div>



            {/* PRESSURE */}

            <div className="highlight-item">

              <div className="label">
                Pressure
              </div>

              <div className="value">

                <FaTachometerAlt />

                {weather.main.pressure}

                <span className="unit">
                  hPa
                </span>

              </div>

              <div className="sub">
                Atmospheric pressure
              </div>

            </div>



            {/* HUMIDITY */}

            <div className="highlight-item">

              <div className="label">
                Humidity
              </div>

              <div className="value">

                <FaTint />

                {weather.main.humidity}%

              </div>

              <div className="sub">
                Relative humidity
              </div>

            </div>



            {/* VISIBILITY */}

            <div className="highlight-item">

              <div className="label">
                Visibility
              </div>

              <div className="value">

                <FaEye />

                {(weather.visibility / 1000).toFixed(1)}

                <span className="unit">
                  km
                </span>

              </div>

              <div className="sub">
                Viewing distance
              </div>

            </div>


          </div>

        </div>

      </div>



      {/* =========================
          7 DAY FORECAST + MAP
      ========================== */}

      <div className="middle-section">


        {/* FORECAST */}

        <div className="forecast">

          <div className="forecast-title">

            <span>
              <FaCalendarWeek />
              7 Days Forecast
            </span>

            <span style={{ fontSize: '0.95rem' }}>
              ▼
            </span>

          </div>


          <div className="forecast-days">

            <div className="day-row">

              <span className="day">
                Today
              </span>

              <span className="temps">

                <span className="high">
                  +29°
                </span>

                <span className="low">
                  /22°
                </span>

              </span>

            </div>


            <div className="day-row">

              <span className="day">
                Tomorrow
              </span>

              <span className="temps">

                <span className="high">
                  +30°
                </span>

                <span className="low">
                  /22°
                </span>

              </span>

            </div>


            <div className="day-row">

              <span className="day">
                Wednesday
              </span>

              <span className="temps">

                <span className="high">
                  +30°
                </span>

                <span className="low">
                  /22°
                </span>

              </span>

            </div>


            <div className="day-row">

              <span className="day">
                Thursday
              </span>

              <span className="temps">

                <span className="high">
                  +29°
                </span>

                <span className="low">
                  /22°
                </span>

              </span>

            </div>

          </div>

        </div>



        {/* =========================
            WEATHER MAP
        ========================== */}

        <Link
          to="/Map"
          className="map-card"
          style={{ textDecoration: "none" }}
        >

          <div className="map-label">

            <FaMapMarkedAlt />

            Weather Condition Map

          </div>


          <div className="map-placeholder">

            <FaCloudSun />

            <span>
              Explore Weather Map
            </span>

          </div>


          <div className="map-footer">

            <span>

              <FaMapMarkerAlt />

              Sri Lanka

            </span>


            <span className="view-more">

              <FaChevronRight />

              View More

            </span>

          </div>

        </Link>


      </div>


    </div>

  );

};


export default Home;