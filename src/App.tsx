import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FormationsList from './components/FormationsList';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Business20 from './components/Business20';
import EasyFormaPlus from './components/EasyFormaPlus';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FormationsList />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-20" element={<Business20 />} />
          <Route path="/easy-forma-plus" element={<EasyFormaPlus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;