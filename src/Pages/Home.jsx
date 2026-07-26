// Home.jsx
import React from 'react';
import {
  FaWind,
  FaLocationArrow,
  FaTint,
  FaEye,
  FaCalendarWeek,
  FaMapMarkedAlt,
  FaCloudSun,
  FaMapMarkerAlt ,
  FaChevronRight,
  FaCloudRain,
  FaChurch,
  FaFlagCheckered,
  FaRegClock,
  FaChevronCircleRight,
  FaCloudShowersHeavy,
  FaTree,
  FaCity
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="card">
      {/* Header with Weatherry brand */}

 
 <div className="weather-layout">
      {/* top: location & time + weather condition */}
      <div className="top-bar">
        <div className="location">
          <h1>Florida, US</h1>
          <div className="date-time">
            <span><FaRegClock /> 5:01 AM</span>
          </div>
        </div>
        <div className="weather-condition">
          <div className="temp-large">28°C</div>
          <div className="condition-tag">
            <FaCloudShowersHeavy /> Rainy Storm Clouds
          </div>
        </div>
      </div>

      {/* highlights: wind, uv, humidity, visibility */}
<div className="highlights">

  <div className="header-brand">
    <span className="update-badge">Today's Highlight</span>
  </div>

  <div className="highlight-grid">

    <div className="highlight-item">
      <div className="label">Wind Status</div>
      <div className="value">
        <FaLocationArrow /> 7.90 
        <span className="unit">km/h</span>
      </div>
      <div className="sub">5:01 AM</div>
    </div>

    <div className="highlight-item">
      <div className="label">UV Index</div>
      <div className="value">5.50</div>
      <div className="uv-scale">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div className="highlight-item">
      <div className="label">Humidity</div>
      <div className="value">
        <FaTint /> 84%
      </div>
    </div>

    <div className="highlight-item">
      <div className="label">Visibility</div>
      <div className="value">
        <FaEye /> 03 
        <span className="unit">km</span>
      </div>
      <div className="sub">5:01 AM</div>
    </div>

  </div>

</div>
      </div>

      {/* middle: 7days forecast + map */}
      <div className="middle-section">
        <div className="forecast">
          <div className="forecast-title">
            <span><FaCalendarWeek /> 7 days Forecast</span>
            <span style={{fontSize: '0.95rem' }}>▼</span>
          </div>
          <div className="forecast-days">
            <div className="day-row"><span className="day">7 day</span><span className="temps"><span className="high">+29°</span><span className="low">/18°</span></span></div>
            <div className="day-row"><span className="day">Everglades</span><span className="temps"><span className="high">+21°</span><span className="low">/16°</span></span></div>
            <div className="day-row"><span className="day">Headwaters Wildlife...</span><span className="temps"><span className="high">+24°</span><span className="low">/20°</span></span></div>
            <div className="day-row"><span className="day">Avon Park</span><span className="temps"><span className="high">+30°</span><span className="low">/17°</span></span></div>
          </div>
        </div>

        <div className="map-card">
          <div className="map-label"><FaMapMarkedAlt /> Weather condition map</div>
          <div className="map-placeholder">
            <FaCloudSun /> <span>Florida</span>
          </div>
          <div className="map-footer">
            <span><FaMapMarkerAlt  /> Alpine</span>
            <span className="view-more"><FaChevronRight /> View More</span>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Home;