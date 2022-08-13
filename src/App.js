import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Contact from './Contact';

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
