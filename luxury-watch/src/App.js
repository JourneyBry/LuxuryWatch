import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { MensWatches } from './Components/pages/MensWatches';
import { WomensWatches } from './Components/pages/WomensWatches';
import { Home } from './Components/pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men's_watches" element={<MensWatches />} />
        <Route path="/women's_watches" element={<WomensWatches />} />
      </Routes>
    </div>
  );
}

export default App;
