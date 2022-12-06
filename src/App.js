import React from 'react';
import Quotes from './Components/Quotes';
import { Routes, Route } from 'react-router-dom';
import Author from './Components/Author.js';
import About from './Components/About.js';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Meliora</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/" element={<Author />} />
          <Route path="/" element={<Quotes />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
