import './App.css';
import Landing from './components/landing';
import About from './components/aboutme';
import EyeExplorePage from './components/pages/eyeExplore';
import StudySprint from './components/pages/studySprint';
import Portfolio from './components/pages/portfolio';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/abt" element={<About />} />
        <Route path="/eyeexplore" element={<EyeExplorePage />} />
        <Route path="/studysprint" element={<StudySprint />} />
        <Route path="/portfolio" element={<Portfolio />} />


      </Routes>
    </div>
  );
}

export default App;
