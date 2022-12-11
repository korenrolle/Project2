import './Home.css';
import React, { useEffect, useState } from 'react';
import Player from '../Components/Player';
import { Routes, Route } from 'react-router-dom';
import Character from './Character';
import NavHome from '../Components/navhome';
import Glossary from './Glossary';

const Home = (props) => {
  return (
    <nav className="Home">
      <NavHome />
      <div className="Home-Page">
        <Routes>
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/character" element={<Character />} />
        </Routes>
        <Player className="video" />
      </div>
    </nav>
  );
};
export default Home;
