import logo from './logo.svg';
import './App.css';
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Footer from './Footer'

function App() {
  return (
    <Router basename="/AY101-Project">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
