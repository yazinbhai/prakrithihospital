import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Hospital from './pages/Hospital';
import Contact from './pages/Contact';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
