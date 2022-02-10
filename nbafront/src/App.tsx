import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Standings } from './models/Standings';
import 'bootstrap/dist/css/bootstrap.min.css'; 




function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
