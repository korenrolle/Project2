import './App.css';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
// import Game from './Pages/Game';
import Character from './Pages/Character';

function App() {
  return (
    <div className="App">
      <h2>I'm Pickle Rick...Who are you?</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Pages/Game" element={<Game />} /> */}
        <Route path="/Pages/Character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
