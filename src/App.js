import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import HOMELOGO from './RNMlogo.png'
import Character from './Pages/Character';

function App() {
  return (
    <div className="App">
      <img src={HOMELOGO} className="App-Logo" alt="Logo" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/game" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
