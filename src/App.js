import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './views/Work';
import About from './views/About';
import Contact from './views/Contact';
import Editorial from './views/Editorial';
import Footer from './components/Footer';

import './App.scss';

const AppWrapper = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/editorial" element={<Editorial />} />
      </Routes>
      <Footer/>
    </div>

  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;