import './App.css';
import Landing from './components/landing';
import About from './components/about';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/projects';
import React from 'react';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/abt" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
