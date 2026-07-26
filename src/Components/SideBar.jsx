// Sidebar.jsx
import React from 'react';
import { FaCloudSun, FaThLarge, FaChartLine, FaMapPin, FaBell, FaUser, FaCog } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaCloudSun />
      </div>
      <div className="nav-icons">
             
        <Link to="/"><FaThLarge /></Link>
        <a href="#"><FaChartLine /></a>
        <Link to="/Map"><FaMapPin /></Link>
        <a href="#"><FaBell /></a>
        <a href="#"><FaUser /></a>
      </div>
    </aside>
  );
};

export default Sidebar;