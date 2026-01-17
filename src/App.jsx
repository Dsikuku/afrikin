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


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/elements" element={<ElementsDetail />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;