import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FormationsList from './components/FormationsList';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Business20 from './components/Business20';
import EasyFormaPlus from './components/EasyFormaPlus';
import FormationDetail from './components/FormationDetail';
import FAQ from './components/FAQ';
import About from './components/About';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FormationsList />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business-20" element={<Business20 />} />
          <Route path="/easy-forma-plus" element={<EasyFormaPlus />} />
          <Route path="/formation/:id" element={<FormationDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/qui-suis-je" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;