import React from 'react';
import HourlyForecast from "../components/hourlyforecast";
import bgm from "./../assets/bgm.png";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";

const DayDetails = ({ match }) => {
  const params= useParams()
  const {date,month,year} = params
  const [data_,setData] = useState(null)
  useEffect(() => {
    const API_KEY = "c86ebcf70483d42afab3581948f8a122";
    const lat = "42.3601";
    const lon = "-71.0589";
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data)});
  }, []);

  return (
    <>
      <h1
        style={{
          position: "absolute",
          width: "100%",
          margin: "0em",
          padding: "0.5em 0",
          backgroundColor: "black",
          color: "white",
          top: "0px",
          textAlign:"center"
        }}
      >
        5-Day Weather Forecast
      </h1>
      <div
        style={{
          background: `url(${bgm})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          paddingTop:"2.5em"
        }}
      >
        <div style={{ background: "rgba(0,0,0,0.5)", minHeight: "100vh" }}>
          {/* Render Forecast component with fetched data */}
          {(data_)?<HourlyForecast data={data_} date={`${month}/${date}/${year}`} />:null}
          
        </div>
      </div>
    </>
  );
}

export default DayDetails;
