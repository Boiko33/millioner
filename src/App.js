import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import EndGame from './pages/EndGame/EndGame';

import './styles/globals.scss';
//
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end-game" element={<EndGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
