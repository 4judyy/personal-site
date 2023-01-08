import './App.css';
import Landing from './components/landing';
import About from './components/about';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/projects';
import React from 'react';



function App() {
  return (
    <div className='App'>
      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/#" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
