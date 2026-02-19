import React from 'react';

function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: 'fa-truck',
      title: 'Free Shipping',
      description: 'On all orders above ₹2000 across India'
    },
    {
      id: 2,
      icon: 'fa-undo',
      title: '60 Days Return',
      description: 'Easy returns & exchange within 60 days'
    },
    {
      id: 3,
      icon: 'fa-shield-alt',
      title: '1 Year Warranty',
      description: 'Manufacturing defects warranty on frames'
    },
    {
      id: 4,
      icon: 'fa-camera',
      title: '3D Try-On',
      description: 'Virtual try-on technology for perfect fit'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
