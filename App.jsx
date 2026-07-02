import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [page, setPage] = useState('landing');

  return (
    <div className="app">
      {page === 'landing' && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>🌿 Paradise Nursery</h1>
            <p>
              Welcome to Paradise Nursery, your one-stop destination for beautiful,
              healthy plants. Whether you're a seasoned gardener or just starting out,
              we have the perfect plants to bring life and color to your home.
            </p>
            <button className="landing-btn" onClick={() => setPage('products')}>
              Get Started
            </button>
          </div>
        </div>
      )}

      {page === 'products' && (
        <div>
          <nav className="navbar">
            <div className="navbar-logo">🌿 Paradise Nursery</div>
            <button className="navbar-cart" onClick={() => setPage('landing')}>
              🏠 Home
            </button>
          </nav>
          <div className="product-page">
            <h2>Our Plants</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
              Browse our collection of beautiful plants
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
