import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/contactus" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
