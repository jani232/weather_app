import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./Components/SideBar";
import Home from "./Pages/Home";
import MapLocation from "./Pages/MapLocation";
 
//for the map
import "leaflet/dist/leaflet.css";

import Tempeture from "./Pages/Tempeture";
import Wind from "./Pages/Wind";
import Humidity from "./Pages/Humidity";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Map" element={<MapLocation />} />
            <Route path="/Tempeture" element={<Tempeture/>} />
            <Route path="/Wind" element={<Wind/>} />
            <Route path="/Humidity" element={<Humidity/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;