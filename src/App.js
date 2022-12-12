import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Character from './Pages/Character';
import Glossary from './Pages/Glossary';
import AboutUs from './Pages/about-us';
import NavApp from './Components/navapp';
import './font/get_schwifty.ttf';

function App() {
  return (
    <div className="App">
      <NavApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/game" element={<Character />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
