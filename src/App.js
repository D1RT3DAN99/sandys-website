import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contactme" element={<Contact/>} />
          <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
