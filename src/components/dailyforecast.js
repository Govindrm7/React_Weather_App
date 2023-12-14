import React from 'react';

const DayForecast = ({ data }) => {
  const { day, highTemp, lowTemp, weather } = data;

  // Function to get the image based on weather conditions
  const getWeatherImage = () => {
    // Implement logic to map weather conditions to image URLs
    // Example: return a URL based on 'weather' information
    // For simplicity, assume weather is a string indicating weather conditions (e.g., 'sunny', 'rainy', 'cloudy')
    // This function could use a switch statement or an object mapping
    return `images/${weather}.png`;
  };

  return (
    <div className="day-forecast">
      <h2>{day}</h2>
      <img src={getWeatherImage()} alt={weather} />
      <p>High: {highTemp}°C</p>
      <p>Low: {lowTemp}°C</p>
    </div>
  );
};

export default DayForecast;
