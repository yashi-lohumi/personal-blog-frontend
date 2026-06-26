import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/shared/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load page components for code splitting & faster initial paint
const Home = lazy(() => import('./pages/Home'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface transition-colors duration-300">
      {/* Global sticky navigation bar */}
      <Navbar />
      
      {/* Page body wrapper */}
      <main className="flex-grow pt-20">
        <Suspense fallback={
          <div className="py-32 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          {/* Key on pathname forces mount animation when switching routes */}
          <div key={location.pathname} className="animate-page-fade">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Suspense>
      </main>
      
      {/* Global editorial footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
