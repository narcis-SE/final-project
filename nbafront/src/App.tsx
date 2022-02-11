import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Standings } from './models/Standings';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom';
import Generator from './components/generator';




function App() {
  return (
    <div className="App">
        <Router>
        <div className="header">
        <img src="./NBA GALAXY.gif" height={200} width={250}/>
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/game">Trivia Game</Link>
                </li>
              </ul>
            </nav>
          <img src="./NBA GALAXY.gif" height={200} width={250}/>
        </div>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/game" element={<Generator/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
