import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Weather from './Weather'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2><i>Weather Report</i></h2>
        <Weather city="Karachi" weather="Hot" />
        <Weather city="Lahore"  weather="Mild" />
        <Weather city="Islamabad" weather="Mild" />
        <Weather city="Sibbi" weather="Hot" />
        <Weather city="Rawalpindi" weather="Mild" />
        <Weather city="Murree" weather="Cold" />
      </header>
    </div>
  );
}

export default App;
