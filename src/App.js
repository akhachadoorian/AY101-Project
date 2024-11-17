// import logo from './logo.svg';
import './App.css';
import './styles.css';
import "./mars.css"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Mars from './pages/mars'

import Footer from './Footer'

function App() {
  return (
    <Router basename="/AY101-Project">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mars" element={<Mars />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
