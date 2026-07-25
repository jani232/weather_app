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
  FaMapMarkerAlt,
  FaChevronRight,
  FaCloudRain,
  FaChurch,
  FaFlagCheckered,
  FaRegCalendarAlt,
  FaRegClock,
  FaChevronCircleRight
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="card">
      {/* top: location & time + wind badge */}
      <div className="top-bar">
        <div className="location">
          <h1>Florida, US</h1>
          <div className="date-time">
            <span><FaRegCalendarAlt /> 24 July, 2022</span>
            <span><FaRegClock /> 5:01 AM</span>
          </div>
        </div>
        <div className="badge-icon">
          <FaWind /> 7.90 km/h · 5:01 AM
        </div>
      </div>

      {/* highlights: wind, uv, humidity, visibility */}
      <div className="highlights">
        <div className="highlight-item">
          <div className="label">Wind Status</div>
          <div className="value"><FaLocationArrow />7.90 km/h</div>
          <div className="sub">5:01 AM</div>
        </div>
        <div className="highlight-item">
          <div className="label">UV Index</div>
          <div className="value" style={{ fontSize: '0.9rem' }}>0 2 4 6 8 10 12</div>
          <div className="uv-scale">
            <span className="active"></span><span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="highlight-item">
          <div className="label">Humidity</div>
          <div className="value"><FaTint />84%</div>
        </div>
        <div className="highlight-item">
          <div className="label">Visibility</div>
          <div className="value"><FaEye />03 km</div>
        </div>
      </div>

      {/* middle: 7days forecast + map */}
      <div className="middle-section">
        <div className="forecast">
          <div className="forecast-title">
            <span><FaCalendarWeek /> 7 days Forecast</span>
            <span style={{ opacity: 0.4, fontSize: '0.7rem' }}>▼</span>
          </div>
          <div className="forecast-days">
            <div className="day-row"><span className="day">25 July</span><span className="temps"><span className="high">29°</span><span className="low">18°</span></span></div>
            <div className="day-row"><span className="day">26 July</span><span className="temps"><span className="high">21°</span><span className="low">16°</span></span></div>
            <div className="day-row"><span className="day">27 July</span><span className="temps"><span className="high">24°</span><span className="low">20°</span></span></div>
            <div className="day-row"><span className="day">28 July</span><span className="temps"><span className="high">30°</span><span className="low">17°</span></span></div>
            <div className="day-row"><span className="day">7 day</span><span className="temps"><span className="high">—</span><span className="low">Tuesday</span></span></div>
            <div className="day-row"><span className="day">Wednesday</span><span className="temps"><span className="high">—</span><span className="low">—</span></span></div>
            <div className="day-row"><span className="day">Thursday</span><span className="temps"><span className="high">—</span><span className="low">Friday</span></span></div>
          </div>
        </div>

        <div className="map-card">
          <div className="map-label"><FaMapMarkedAlt /> Weather condition map</div>
          <div className="map-placeholder">
            <FaCloudSun /> <span>Florida</span>
          </div>
          <div className="map-footer">
            <span><FaMapMarkerAlt /> Alpine</span>
            <span className="view-more"><FaChevronRight /> View More</span>
          </div>
        </div>
      </div>

      {/* precipitation + kingdom hall / golf */}
      <div className="bottom-row">
        <div className="precip">
          <span className="label"><FaCloudRain /> Precipitation</span>
          <span className="value">EXTREMELY LOW <span className="extreme">▼</span></span>
        </div>
        <div className="right-group">
          <div className="location-tag">
            <FaChurch /> Kingdom Hall of Jehovah's Witnesses
          </div>
          <div className="location-tag">
            <span className="temp">23°</span>
          </div>
          <div className="location-tag">
            <FaFlagCheckered /> River Greens Golf Course
          </div>
          <div className="location-tag">
            <span className="temp">—</span>
          </div>
        </div>
      </div>

      <hr />
      <div style={{ display: 'flex', justifyContent: 'flex-end', color: '#6f8fc9', fontSize: '0.7rem', opacity: 0.4, gap: '0.5rem' }}>
        <span><FaRegClock /> 5:01 AM</span>
        <span>•</span>
        <span><FaChevronCircleRight /> view more</span>
      </div>
    </div>
  );
};

export default Home;