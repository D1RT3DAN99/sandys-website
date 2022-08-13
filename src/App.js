import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
