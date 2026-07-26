// Pages/MapLocation.jsx

import React, { useState,useRef } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { getWeatherByLocation } from "../api/weatherApi";



function LocationMarker() {
const markerRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [weather, setWeather] = useState(null);


  useMapEvents({

async click(e) {

    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    setPosition(e.latlng);

    try {

        const data = await getWeatherByLocation(
            lat,
            lng
        );

        console.log("Weather:", data);

        setWeather(data);

        setTimeout(() => {
            if(markerRef.current){
                markerRef.current.openPopup();
            }
        }, 100);

    } catch(error) {

        console.log(error);

    }

}

  });



  return position ? (

    <Marker position={position} ref={markerRef}>

      <Popup autoPan={true}>

        {
          weather && weather.main ? (

            <div>

              <h3>
                📍 {weather.name}
              </h3>


              <h2>
                🌡 {weather.main.temp} °C
              </h2>


              <p>
                ☁ {weather.weather[0].description}
              </p>


              <p>
                💧 Humidity: {weather.main.humidity}%
              </p>


              <p>
                💨 Wind: {weather.wind.speed} m/s
              </p>


            </div>


          ) : (

            <p>
              Loading weather...
            </p>

          )

        }


      </Popup>


    </Marker>


  ) : null;

}




const MapLocation = () => {


  return (

    <div className="map-page">


      <h2>
        Weather Map
      </h2>



      <MapContainer

        center={[7.8731, 80.7718]}

        zoom={7}

        style={{
          height: "80vh",
          width: "100%"
        }}

      >


        <TileLayer

          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

        />


        <LocationMarker />


      </MapContainer>



    </div>

  );

};


export default MapLocation;