import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const plants = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_plant_edit.jpg/800px-Snake_plant_edit.jpg",
        description: "Excellent air purifier that removes toxins. Very easy to care for and thrives in low light.",
        cost: "$15"
      },
      {
        name: "Spider Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.jpg/800px-Chlorophytum_comosum_0001.jpg",
        description: "Great for removing formaldehyde and xylene. Produces beautiful hanging offshoots.",
        cost: "$12"
      },
      {
        name: "Peace Lily",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/800px-Spathiphyllum_cochlearispathum_RTBG.jpg",
        description: "Elegant white flowers and excellent air purifier. Thrives in low to medium light.",
        cost: "$18"
      }
    ]
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bloem_lavandula_1.jpg/800px-Bloem_lavandula_1.jpg",
        description: "Beautiful purple flowers with a calming fragrance. Perfect for bedrooms and relaxation.",
        cost: "$20"
      },
      {
        name: "Jasmine",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jasminum_polyanthum2.jpg/800px-Jasminum_polyanthum2.jpg",
        description: "Sweet-smelling flowers that bloom in winter and spring. A classic fragrant plant.",
        cost: "$18"
      },
      {
        name: "Rosemary",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Rosemary_bush.jpg/800px-Rosemary_bush.jpg",
        description: "Fragrant herb perfect for cooking and aromatherapy. Easy to grow indoors.",
        cost: "$15"
      }
    ]
  },
  {
    category: "Insect Repellent Plants",
    plants: [
      {
        name: "Oregano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Origanum_vulgare_-_harilik_pune.jpg/800px-Origanum_vulgare_-_harilik_pune.jpg",
        description: "Natural insect repellent with culinary uses. Strong aroma deters pests effectively.",
        cost: "$10"
      },
      {
        name: "Mint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Spear_Mint_P1210177_%28cropped%29.jpg/800px-Spear_Mint_P1210177_%28cropped%29.jpg",
        description: "Repels ants, mosquitoes, and other insects. Also great for teas and cooking.",
        cost: "$8"
      },
      {
        name: "Marigold",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tagetes_erecta_flowers.jpg/800px-Tagetes_erecta_flowers.jpg",
        description: "Bright orange flowers that repel aphids and mosquitoes naturally.",
        cost: "$10"
      }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Vera",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png",
        description: "Soothes burns and skin irritations. Easy to grow and very low maintenance.",
        cost: "$14"
      },
      {
        name: "Echinacea",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Echinacea_purpurea2.jpg/800px-Echinacea_purpurea2.jpg",
        description: "Boosts the immune system naturally. Beautiful purple flowers with medicinal benefits.",
        cost: "$16"
      },
      {
        name: "Peppermint",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mentha_%C3%97_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-095.jpg/800px-Mentha_%C3%97_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-095.jpg",
        description: "Relieves headaches and digestive issues. Great for teas and natural remedies.",
        cost: "$10"
      }
    ]
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        name: "ZZ Plant",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/ZZ_plant_%28Zamioculcas_zamiifolia%29.jpg/800px-ZZ_plant_%28Zamioculcas_zamiifolia%29.jpg",
        description: "Thrives on neglect. Perfect for busy people or beginners. Very drought tolerant.",
        cost: "$25"
      },
      {
        name: "Pothos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Epipremnum_aureum_31082012.jpg/800px-Epipremnum_aureum_31082012.jpg",
        description: "Extremely hardy vine that grows in almost any condition. Ideal for beginners.",
        cost: "$10"
      },
      {
        name: "Cactus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Echinocactus_grusonii_a1.jpg/800px-Echinocactus_grusonii_a1.jpg",
        description: "Requires minimal watering and care. Perfect for sunny windowsills.",
        cost: "$8"
      }
    ]
  }
];

const ProductList = ({ onCartClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({ ...prev, [plant.name]: true }));
  };

  const isInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>🌿 Paradise Nursery</div>
        <button style={styles.cartBtn} onClick={onCartClick}>
          🛒 Cart
          {totalCartItems > 0 && (
            <span style={styles.cartBadge}>{totalCartItems}</span>
          )}
        </button>
      </nav>

      {/* Product Page */}
      <div style={styles.productPage}>
        <h2 style={styles.pageTitle}>Our Plant Collection</h2>

        {plants.map((category, catIndex) => (
          <div key={catIndex} style={styles.categorySection}>
            <h3 style={styles.categoryTitle}>{category.category}</h3>
            <div style={styles.productGrid}>
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} style={styles.productCard}>
                  <img src={plant.image} alt={plant.name} style={styles.productImg} />
                  <div style={styles.cardBody}>
                    <h4 style={styles.plantName}>{plant.name}</h4>
                    <p style={styles.plantDesc}>{plant.description}</p>
                    <p style={styles.plantCost}>{plant.cost}</p>
                    <button
                      style={isInCart(plant.name) ? styles.addedBtn : styles.addBtn}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#2e7d32',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  navLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  cartBtn: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'relative',
  },
  cartBadge: {
    backgroundColor: '#ff5722',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 7px',
    fontSize: '0.75rem',
    marginLeft: '8px',
  },
  productPage: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#2e7d32',
    marginBottom: '40px',
  },
  categorySection: {
    marginBottom: '50px',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    color: '#1b5e20',
    borderBottom: '2px solid #4caf50',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'flex-start',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    width: '260px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease',
  },
  productImg: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '15px',
  },
  plantName: {
    fontSize: '1.1rem',
    color: '#2e7d32',
    marginBottom: '8px',
  },
  plantDesc: {
    fontSize: '0.85rem',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  plantCost: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '12px',
  },
  addBtn: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '0.95rem',
  },
  addedBtn: {
    backgroundColor: '#aaa',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'not-allowed',
    width: '100%',
    fontSize: '0.95rem',
  },
};

export default ProductList;
