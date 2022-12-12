import './Home.css';
import React, { useEffect, useState } from 'react';
import Player from '../Components/Player';
import { Routes, Route } from 'react-router-dom';
import Portal from '../Portal.png'
import Character from './Character';
import NavHome from '../Components/navhome';
import Glossary from './Glossary';
import AboutUs from './about-us';

const Home = (props) => {
  return (
    <nav className="Home">
      <NavHome />
      <div className="Home-Page">
        <Routes>
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/game" element={<Character />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Player className="video" />
        <img src={Portal} className="portal-logo" />
        

      </div>
    </nav>
  );
};
export default Home;
