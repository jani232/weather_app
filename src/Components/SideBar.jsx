// Sidebar.jsx
import React from 'react';
import { FaCloudSun, FaThLarge, FaChartLine, FaMapPin, FaBell, FaUser, FaCog} from 'react-icons/fa';
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";


import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaCloudSun />
      </div>
      <div className="nav-icons">
             
        <Link to="/"><FaThLarge /></Link>
        <Link to="/Map"><FaMapPin /></Link>
        <Link to="/Tempeture"><CiTempHigh /></Link>
        <Link to="/Wind"><LuWind /></Link>
        <Link to="/Humidity"><WiHumidity /></Link>
        <Link to="/Visibility"><MdOutlineVisibility /></Link>


      </div>
    </aside>
  );
};

export default Sidebar;