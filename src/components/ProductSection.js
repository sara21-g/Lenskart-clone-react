import React, { useState } from 'react';

function ProductSection({ onAddToCart }) {
  // Product data array
  const products = [
    {
      id: 1,
      name: 'Vincent Chase Sleek Steel VC E13478',
      image: 'images/products/p1.png',
      size: 'Size: Medium • Matte Black Full Rim Rectangle',
      currentPrice: 1500,
      originalPrice: 3000,
      discount: '50% OFF',
      rating: 4.5,
      reviews: '2.3k',
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'John Jacobs Supreme Steel JJ E13957',
      image: 'images/products/p2.png',
      size: 'Size: Wide • Gunmetal Full Rim Aviator',
      currentPrice: 2200,
      originalPrice: 4000,
      discount: '45% OFF',
      rating: 4.0,
      reviews: '1.8k',
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Lenskart Air Wrap LA E14532',
      image: 'images/products/p3.png',
      size: 'Size: Medium • Crystal Blue Full Rim Round',
      currentPrice: 1800,
      originalPrice: 3500,
      discount: '49% OFF',
      rating: 5.0,
      reviews: '3.1k',
      badge: null
    },
    {
      id: 4,
      name: 'Aqualens Sleek LK E12890',
      image: 'images/products/p4.png',
      size: 'Size: Narrow • Transparent Full Rim Cat Eye',
      currentPrice: 1200,
      originalPrice: 2500,
      discount: '52% OFF',
      rating: 4.2,
      reviews: '1.5k',
      badge: 'HOT DEAL'
    },
    {
      id: 5,
      name: 'Vincent Chase Polarized VC S14920',
      image: 'images/products/p5.png',
      size: 'Size: Medium • Black Full Rim Wayfarer Sunglasses',
      currentPrice: 2500,
      originalPrice: 5000,
      discount: '50% OFF',
      rating: 4.6,
      reviews: '2.9k',
      badge: null
    },
    {
      id: 6,
      name: 'John Jacobs Smart VC S13456',
      image: 'images/products/p6.png',
      size: 'Size: Large • Brown Full Rim Aviator Sunglasses',
      currentPrice: 2800,
      originalPrice: 5500,
      discount: '49% OFF',
      rating: 4.1,
      reviews: '1.2k',
      badge: 'TRENDING'
    },
    {
      id: 7,
      name: 'Lenskart BLU Zero Power LK E15678',
      image: 'images/products/p7.png',
      size: 'Size: Medium • Black Full Rim Rectangle Computer Glasses',
      currentPrice: 1400,
      originalPrice: 3000,
      discount: '53% OFF',
      rating: 4.8,
      reviews: '4.2k',
      badge: null
    },
    {
      id: 8,
      name: 'Bausch & Lomb Monthly Contact Lenses',
      image: 'images/products/p8.png',
      size: 'Pack of 6 Lenses • -2.50 Power',
      currentPrice: 999,
      originalPrice: 1800,
      discount: '44% OFF',
      rating: 4.7,
      reviews: '3.5k',
      badge: 'SALE'
    }
  ];

  return (
    <section className="product-section" id="sunglasses">
      <div className="container">
        <h2 className="section-title">TRENDING EYEGLASSES</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ProductCard component receiving product data via props
function ProductCard({ product, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Toggle wishlist
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Handle add to cart with button animation
  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product.name);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    while (stars.length < 5) {
      stars.push(<i key={`empty-${stars.length}`} className="far fa-star"></i>);
    }
    return stars;
  };

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      
      <div 
        className={`product-wishlist ${isWishlisted ? 'active' : ''}`}
        onClick={toggleWishlist}
      >
        <i className={`${isWishlisted ? 'fas' : 'far'} fa-heart`}></i>
      </div>
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-details">
        <div className="product-rating">
          <span className="stars">
            {renderStars(product.rating)}
          </span>
          <span className="rating-count">({product.rating}/5) {product.reviews}</span>
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        <p className="product-size">{product.size}</p>
        
        <div className="product-price">
          <span className="current-price">₹{product.currentPrice.toLocaleString()}</span>
          <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          <span className="discount">{product.discount}</span>
        </div>
        
        <div className="product-actions">
          <button 
            className="btn btn-primary add-to-cart"
            onClick={handleAddToCart}
            style={isAdding ? { background: '#4caf50' } : {}}
          >
            {isAdding ? 'Added!' : 'Buy Now'}
          </button>
          <button className="btn btn-secondary">Try On</button>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
