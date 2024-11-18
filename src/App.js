// import logo from './logo.svg';
import './App.css';
import './css/styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Mercury from './pages/mercury';
import Venus from './pages/venus';
import Earth from './pages/earth';
import Mars from './pages/mars';
import Jupiter from './pages/jupiter';
import Saturn from './pages/saturn';
import Uranus from './pages/uranus';
import Neptune from './pages/neptune';
import Citations from './pages/citations';

import Footer from './Footer'

function App() {
  return (
    <Router basename="/AY101-Project">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mercury" element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/neptune" element={<Neptune />} />
          <Route path="/citations" element={<Citations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
