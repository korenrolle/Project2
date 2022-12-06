import './App.css';
import { useState, useEffect } from 'react';
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
