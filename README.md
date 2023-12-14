# React_Weather_App
# Weather Forecasting Application

This project is a weather forecasting application built using React. It displays a 5-day weather forecast, allowing users to view high and low temperatures daily along with an image indicating weather conditions.

## Getting Started

To get started with the project, follow these steps:

### Installation

1. Clone the repository: `git clone https://github.com/your-username/weather-forecast-app.git`
2. Navigate to the project directory: `cd weather-forecast-app`
3. Install dependencies: `npm install`

### Usage

#### Step 1: Hard-coded Data

Start by rendering the basic UI with hard-coded data. This will ensure everything displays correctly before fetching real data.

#### Step 2: Hourly Forecast

Implement the functionality to click on a day to view its hourly forecast. Maintain the current view in the top-level App state.

#### Step 3: Adding React Router

1. Install React Router: `npm install react-router-dom`
2. Create routes for the application:
   - `/` should display the 5-day forecast.
   - `/:name-of-day` should show the hourly forecast for a particular day.

#### Step 4: Fetch Real Data

Sign up for a free API key from [OpenWeatherMap](https://openweathermap.org/). Use this key to fetch a real 5-day forecast and feed that data into your app.

### API Key Setup

Ensure to keep your API key secure. You can set it as an environment variable or use a configuration file (avoid committing it to version control).

### Run the Application

To run the application locally: go to app folder then in terminal write below command

```bash
npm run start
