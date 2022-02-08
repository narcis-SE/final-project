import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { fetchStandings } from './services/StandingsServices';
import { Standings } from './models/Standings';



function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
