import React, { useEffect,useState } from "react";
import DayForecast from "./dailyforecast";
import RainySvg from "./../assets/rainysvg.svg";
import CloudySvg from "./../assets/cloudysvg.svg";
import SunnySvg from "./../assets/sunnysvg.svg";
import WindySvg from "./../assets/windysvg.svg";
import { Link } from "react-router-dom";

const Forecast = ({ data }) => {
  const [forecast,setForecast] = useState(data.list);
  function convertDateFormat(inputString) {
    // Parse the input string into a Date object
    const inputDate = new Date(inputString);  

    // Check if the input is a valid date
    if (isNaN(inputDate.getTime())) {
      return "Invalid date";
    }

    // Define options for formatting the date
    const options = { day: "numeric", month: "short", year: "numeric" };

    // Convert the date to the desired format
    const formattedDate = inputDate.toLocaleDateString("en-US", options);
    // const formattedDate = inputDate.toLocaleDateString();

    return formattedDate;
  }

  const typeofWeather = (weather) => {
    if (weather.includes("rain")) {
      return RainySvg;
    } else if (weather.includes("cloud")) {
      return CloudySvg;
    } else if (weather.includes("wind")) {
      return WindySvg;
    } else if (weather.includes("sun")) {
      return SunnySvg;
    } else return SunnySvg;
  };

const getDates = () => {
  let date = new Date();
  const d = [];
  
  for (let i=0;i<5;++i) {
    date.setDate(new Date().getDate()+i)
    d.push(date.toLocaleDateString())
  } 
  return d;
}

useEffect(() => {
  setForecast(data.list);
})

const getForecast = (date) => {
  const forecastData = forecast.filter((f) => {
    return new Date(f.dt*1000).toLocaleDateString() === date
  })[0];
  return {humidity: forecastData.main.humidity, wind: forecastData.wind.speed, maxTemp: forecastData.main.temp_max, minTemp: forecastData.main.temp_min, imageUrl: `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`,weatherDesc: forecastData.weather[0].description }
}



  return (
    <div>
      <h2 style={{ color: "white", padding: "1em", margin: "1em" }}>
        {data.city.name}, {data.city.country}
      </h2>
      <div
        style={{
          padding: "1em",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          overflowX:"scroll"
        }}
      >
        {/* {data.list.map((forecast, index) => 
        {
          console.log(new Date(data.list[index].dt*1000).toLocaleDateString())
          return index%6===0 ?
          (<Link to={`/${new Date(data.list[index].dt*1000).toLocaleDateString()}`}>
          
          <div
            key={index}
            style={{
              background: "rgba(60, 60, 60,0.3)",
              margin: "1em",
              padding: "1em",
              borderRadius: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              width: "18%",
              minWidth:"250px",
              
            }}
          >
            <h2>{convertDateFormat(forecast.dt_txt)}</h2>
            <h4>Temp Min: {forecast.main.temp_min} K</h4>
            <h4>Temp Max: {forecast.main.temp_max} K</h4>
            <p>
              <img
                src={typeofWeather(forecast.weather[0].description)}
                alt={forecast.weather[0].description}
                style={{ width: "100px", margin: "1em" }}
              />
            </p>
            <h4>Humidity: {forecast.main.humidity}%</h4>
            <h4>Wind Speed: {forecast.wind.speed} m/s</h4>
            {/* You can include more details as needed */}
          {/* </div>
        </Link>):null
})} */}
{
  getDates().map((date,index) => {
    return <Link to={`/${date}`}>
          
          <div
            key={index}
            style={{
              background: "rgba(60, 60, 60,0.3)",
              margin: "1em",
              padding: "1em",
              borderRadius: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              width: "18%",
              minWidth:"250px",
              
            }}
          >
            <h2>{date}</h2>
            <h4>Temp Min: {getForecast(date).minTemp} K</h4>
            <h4>Temp Max: {getForecast(date).maxTemp} K</h4>
            <p>
              {/* <img
                // src={getForecast(date).imageUrl}
                alt={getForecast(date).weatherDesc}
                style={{ width: "100px", margin: "1em" }}
              /> */}
            </p>
            <h4>Humidity: {getForecast(date).humidity}%</h4>
            <h4>Wind Speed: {getForecast(date).wind} m/s</h4>
            {/* You can include more details as needed */}
           </div>
        </Link>
  })
}
      </div>
    </div>
  );
};

export default Forecast;
