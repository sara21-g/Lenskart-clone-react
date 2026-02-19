import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#store">Store Locator</a></li>
              <li><a href="#guide">Buying Guide</a></li>
              <li><a href="#frame">Frame Size</a></li>
              <li><a href="#tryon">Lenskart 3D Try On</a></li>
              <li><a href="#franchise">Franchise Opportunity</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>About Us</h3>
            <ul className="footer-links">
              <li><a href="#hiring">We Are Hiring</a></li>
              <li><a href="#refer">Refer & Earn</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#coupons">Lenskart Coupons</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Help</h3>
            <ul className="footer-links">
              <li><a href="#faq">FAQ's</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#returns">Returns & Exchange</a></li>
              <li><a href="#cancel">Cancellation</a></li>
              <li><a href="#track">Track Order</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#facebook" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#youtube" className="social-link"><i className="fab fa-youtube"></i></a>
              <a href="#linkedin" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div style={{ marginTop: '30px' }}>
              <h3>Download App</h3>
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <div style={{ background: 'white', padding: '10px 15px', borderRadius: '8px', color: '#000', fontSize: '11px', fontWeight: '600' }}>
                  <i className="fab fa-apple"></i> App Store
                </div>
                <div style={{ background: 'white', padding: '10px 15px', borderRadius: '8px', color: '#000', fontSize: '11px', fontWeight: '600' }}>
                  <i className="fab fa-google-play"></i> Play Store
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <div className="payment-icon">VISA</div>
            <div className="payment-icon">MC</div>
            <div className="payment-icon">AMEX</div>
            <div className="payment-icon">PAYTM</div>
            <div className="payment-icon">UPI</div>
            <div className="payment-icon">COD</div>
          </div>
          <p style={{ marginTop: '20px' }}>© 2026 Lenskart.com. All Rights Reserved.</p>
          <p style={{ marginTop: '10px' }}>
            <a href="#privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a> | 
            <a href="#terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', margin: '0 10px' }}>Terms & Conditions</a> | 
            <a href="#sitemap" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', margin: '0 10px' }}>Sitemap</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
