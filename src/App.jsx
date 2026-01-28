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


function App() {
  return (
    <Router>
      {/* This wrapper ensures the footer stays down and the layout is contained */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        
        {/* pt-20 matches the Navbar height on mobile. 
            We keep it on desktop too if the Navbar is fixed/white to prevent overlap. */}
        <main className="flex-grow md:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/elements" element={<ElementsDetail />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/initiatives" element={<Initiatives />} />
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