import React from 'react';

function CategorySection() {
  // Category data passed as props-like structure
  const categories = [
    {
      id: 1,
      name: 'Eyeglasses',
      image: 'images/categories/eyeglasses.png',
      price: '₹1000'
    },
    {
      id: 2,
      name: 'Sunglasses',
      image: 'images/categories/sunglasses.png',
      price: '₹1500'
    },
    {
      id: 3,
      name: 'Computer Glasses',
      image: 'images/categories/computer.png',
      price: '₹1200'
    },
    {
      id: 4,
      name: 'Contact Lenses',
      image: 'images/categories/lenses.png',
      price: '₹500'
    }
  ];

  return (
    <section className="category-section" id="eyeglasses">
      <div className="container">
        <h2 className="section-title">Top Categories</h2>

        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Separate CategoryCard component receiving props
function CategoryCard({ category }) {
  return (
    <a href={`#${category.name.toLowerCase()}`} className="category-card">
      <div className="category-image">
        <img src={category.image} alt={category.name} />
      </div>
      <div className="category-info">
        <p className="category-name">{category.name}</p>
        <p className="category-desc">Starting from {category.price}</p>
      </div>
    </a>
  );
}

export default CategorySection;
