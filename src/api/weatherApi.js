

const API_KEY = "a97263654abf64611d845f4fa60d58aa";

const BASE_URL = 
"https://api.openweathermap.org/data/2.5";


export const getWeather = async (city) => {

    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );


    const data = await response.json();

    return data;
};


// Search by map coordinates
export const getWeatherByLocation = async (lat, lon) => {

    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("API RESPONSE:", data);
    return data;
};