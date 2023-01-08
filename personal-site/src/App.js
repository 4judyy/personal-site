import './App.css';
import Landing from './components/landing';
import About from './components/about';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
