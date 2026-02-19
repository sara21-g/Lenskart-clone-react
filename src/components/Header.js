import React, { useState, useEffect } from 'react';

function Header({ darkTheme, toggleTheme, cartCount, onLoginClick }) {
  const [activeNav, setActiveNav] = useState('');

  // Handle navigation click with smooth scroll
  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveNav(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.pageYOffset > 100) {
          header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
          header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo-image">
              <img src="images/logo.png" alt="Lenskart Logo" />
            </a>
            
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for?" />
              <button><i className="fas fa-search"></i></button>
            </div>

            <div className="header-actions">
              <a href="#login" className="header-action" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>
                <i className="far fa-user"></i>
                <span>Account</span>
              </a>
              <a href="#wishlist" className="header-action">
                <i className="far fa-heart"></i>
                <span>Wishlist</span>
              </a>
              <a href="#cart" className="header-action cart-badge">
                <i className="fas fa-shopping-cart"></i>
                <span>Cart</span>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </a>
              <button 
                className="theme-toggle" 
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                <i className={`fas fa-${darkTheme ? 'sun' : 'moon'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="container">
          <ul className="nav-menu">
            <li className="nav-item">
              <a 
                href="#eyeglasses" 
                className={`nav-link ${activeNav === 'eyeglasses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('eyeglasses', e)}
              >
                EYEGLASSES <i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#sunglasses" 
                className={`nav-link ${activeNav === 'sunglasses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('sunglasses', e)}
              >
                SUNGLASSES <i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#screen-glasses" 
                className={`nav-link ${activeNav === 'screen-glasses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('screen-glasses', e)}
              >
                SCREEN GLASSES <i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact-lenses" 
                className={`nav-link ${activeNav === 'contact-lenses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('contact-lenses', e)}
              >
                CONTACT LENSES <i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#power-sunglasses" 
                className={`nav-link ${activeNav === 'power-sunglasses' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('power-sunglasses', e)}
              >
                POWER SUNGLASSES <i className="fas fa-chevron-down"></i>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#try-on" 
                className={`nav-link special ${activeNav === 'try-on' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('try-on', e)}
              >
                3D TRY ON
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#store-locator" 
                className={`nav-link ${activeNav === 'store-locator' ? 'active' : ''}`}
                onClick={(e) => handleNavClick('store-locator', e)}
              >
                STORE LOCATOR
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
