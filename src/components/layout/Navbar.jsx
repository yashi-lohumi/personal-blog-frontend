import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isBlogPost = location.pathname.startsWith('/blogs/');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky navbar state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate reading scroll progress on blog detail pages
      if (isBlogPost) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
        setScrollProgress(scrolledPct);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogPost, location.pathname]);

  const handleSubscribeClick = () => {
    // Navigate to contact or focus on a newsletter input
    navigate('/contact');
    setTimeout(() => {
      const emailInput = document.getElementById('newsletter-input') || document.getElementById('contact-email-input');
      if (emailInput) {
        emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        emailInput.focus();
      }
    }, 100);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-gutter bg-surface border-b border-outline-variant shadow-sm transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-container-max mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-headline-subsection text-headline-subsection font-bold text-on-surface hover:opacity-80 transition-opacity"
          >
            TechVisionary
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-body-base text-body-base transition-all duration-200 nav-link-underline pb-1 ${
                    isActive
                      ? 'text-primary font-bold active'
                      : 'text-on-surface-variant hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA & Theme toggle & Mobile trigger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-[12px] border border-outline-variant text-on-surface hover:bg-surface-container transition-colors active:scale-95 duration-200"
              aria-label="Toggle dark/light mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={handleSubscribeClick}
              className="bg-primary text-on-primary px-6 py-2 rounded-[14px] font-bold text-meta-info hover:shadow-md hover:bg-opacity-90 active:scale-95 transition-all"
            >
              Subscribe
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-[64px] bg-surface border-b border-outline-variant shadow-lg py-6 px-gutter flex flex-col gap-6 z-40 animate-slide-down">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-body-base text-body-base block py-2 border-l-4 pl-4 ${
                    isActive
                      ? 'text-primary font-bold border-primary bg-primary/5'
                      : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary/50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}

        {/* Reading progress bar just below the navbar */}
        {isBlogPost && (
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        )}
      </nav>
    </>
  );
}
