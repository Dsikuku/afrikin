import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import Socials from './pages/Socials';
import Contact from './pages/Contact';
import ElementsDetail from './pages/ElementsDetail';
import NotFound from './pages/NotFound';
import InitiativeDetail from './pages/InitiativeDetail';
import KinnectDetail from './pages/KinnectDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/elements" element={<ElementsDetail />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/initiatives" element={<Initiatives />} />
            {/* Specific route first */}
            <Route path="/initiatives/kinnect-series" element={<KinnectDetail />} />
            {/* Generic route second */}
            <Route path="/initiatives/:id" element={<InitiativeDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;