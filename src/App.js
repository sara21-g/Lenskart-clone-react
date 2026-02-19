import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CategorySection from './components/CategorySection';
import ProductSection from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import BrandsSection from './components/BrandsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SuccessMessage from './components/SuccessMessage';

function App() {
  // State Management
  const [darkTheme, setDarkTheme] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('lenskartTheme');
    if (savedTheme === 'dark') {
      setDarkTheme(true);
    }

    // Track visit count
    let visitCount = parseInt(localStorage.getItem('lenskartVisits') || '0');
    visitCount++;
    localStorage.setItem('lenskartVisits', visitCount);
    console.log('Visit count:', visitCount);
  }, []);

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lenskartTheme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  // Apply dark-theme class to body element
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkTheme]);

  // Handle theme toggle
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Handle add to cart
  const handleAddToCart = (productName) => {
    setCartCount(cartCount + 1);
    showSuccessMsg(`${productName} added to cart successfully!`);
  };

  // Show success message
  const showSuccessMsg = (message) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className={`App ${darkTheme ? 'dark-theme' : ''}`}>
      {/* Top Banner */}
      <div className="top-banner">
        <strong>FREE SHIPPING</strong> on orders above ₹2000 | <strong>60 Days Return Policy</strong> | <strong>Try 3D Try On</strong>
      </div>

      {/* Header Component */}
      <Header 
        darkTheme={darkTheme}
        toggleTheme={toggleTheme}
        cartCount={cartCount}
        onLoginClick={() => setShowLoginModal(true)}
      />

      {/* Hero Slider Component */}
      <HeroSlider />

      {/* Category Section Component */}
      <CategorySection />

      {/* Virtual Try-On Banner */}
      <section className="try-on-banner">
        <div className="container">
          <h2>Experience Our 3D Virtual Try-On</h2>
          <p>See how glasses look on you before you buy - right from your device!</p>
          <button className="btn" onClick={() => showSuccessMsg('Virtual Try-On feature will be available soon! Stay tuned.')}>
            Try Now
          </button>
        </div>
      </section>

      {/* Product Section Component */}
      <ProductSection onAddToCart={handleAddToCart} />

      {/* Features Section Component */}
      <FeaturesSection />

      {/* Brands Section Component */}
      <BrandsSection />

      {/* Newsletter Component */}
      <Newsletter onSuccess={showSuccessMsg} />

      {/* Footer Component */}
      <Footer />

      {/* Login Modal Component */}
      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onSuccess={showSuccessMsg}
        />
      )}

      {/* Success Message Component */}
      {showSuccess && <SuccessMessage message={successMessage} />}
    </div>
  );
}

export default App;