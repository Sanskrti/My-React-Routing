import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
