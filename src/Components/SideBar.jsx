// Sidebar.jsx
import React from 'react';
import { FaCloudSun, FaThLarge, FaChartLine, FaMapPin, FaBell, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaCloudSun />
      </div>
      <div className="nav-icons">
        <a href="#" className="active"><FaThLarge /></a>
        <a href="#"><FaChartLine /></a>
        <a href="#"><FaMapPin /></a>
        <a href="#"><FaBell /></a>
        <a href="#"><FaUser /></a>
      </div>
      <div className="bottom-icon">
        <FaCog />
      </div>
    </aside>
  );
};

export default Sidebar;