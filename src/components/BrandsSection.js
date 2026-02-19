import React from 'react';

function BrandsSection() {
  const brands = [
    { id: 1, image: 'images/brands/vincent.png', name: 'Vincent Chase' },
    { id: 2, image: 'images/brands/johnjacobs.png', name: 'John Jacobs' },
    { id: 3, image: 'images/brands/aqualens.png', name: 'Aqualens' },
    { id: 4, image: 'images/brands/air.png', name: 'Lenskart Air' },
    { id: 5, image: 'images/brands/hustlr.png', name: 'Hustlr' },
    { id: 6, image: 'images/brands/hooper.png', name: 'Hooper' }
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="section-title">OUR BRANDS</h2>
        <div className="brands-grid">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="brand-item"
              style={{ backgroundImage: `url('${brand.image}')` }}
            >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
