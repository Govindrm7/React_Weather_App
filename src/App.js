import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FiveDayForecast from './pages/fivedayforecast';
import DayDetails from './pages/daydetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FiveDayForecast/>} />
        <Route path="/:month/:date/:year" element={<DayDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
