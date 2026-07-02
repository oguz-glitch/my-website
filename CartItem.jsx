import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      return total + cost * item.quantity;
    }, 0).toFixed(2);
  };

  const calculateItemTotal = (item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return (cost * item.quantity).toFixed(2);
  };

  const handleRemoveItem = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, quantity: parseInt(newQuantity) }));
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery 🌿');
  };

  return (
    <div style={styles.cartPage}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>🌿 Paradise Nursery</div>
        <button style={styles.continueBtn} onClick={onContinueShopping}>
          ← Continue Shopping
        </button>
      </nav>

      <div style={styles.cartContainer}>
        <h2 style={styles.cartTitle}>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div style={styles.emptyCart}>
            <p style={styles.emptyText}>🛒 Your cart is empty!</p>
            <button style={styles.shopBtn} onClick={onContinueShopping}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div style={styles.cartItemsList}>
              {cartItems.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                  <img src={item.image} alt={item.name} style={styles.itemImg} />
                  <div style={styles.itemDetails}>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <p style={styles.itemCost}>Unit Price: {item.cost}</p>
                    <p style={styles.itemTotal}>Total: ${calculateItemTotal(item)}</p>

                    {/* Quantity Controls */}
                    <div style={styles.quantityControls}>
                      <button style={styles.qtyBtn} onClick={() => handleDecrement(item)}>−</button>
                      <input
                        type="number"
                        value={item.quantity}
                        min="0"
                        onChange={(e) => handleQuantityChange(item, e.target.value)}
                        style={styles.qtyInput}
                      />
                      <button style={styles.qtyBtn} onClick={() => handleIncrement(item)}>+</button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button style={styles.removeBtn} onClick={() => handleRemoveItem(item.name)}>
                    🗑 Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div style={styles.cartSummary}>
              <div style={styles.totalSection}>
                <span style={styles.totalLabel}>Total Amount:</span>
                <span style={styles.totalAmount}>${calculateTotalAmount()}</span>
              </div>
              <div style={styles.cartActions}>
                <button style={styles.continueShoppingBtn} onClick={onContinueShopping}>
                  Continue Shopping
                </button>
                <button style={styles.checkoutBtn} onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  cartPage: {
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
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
  continueBtn: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  cartContainer: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
  },
  cartTitle: {
    fontSize: '2rem',
    color: '#2e7d32',
    marginBottom: '30px',
    borderBottom: '2px solid #4caf50',
    paddingBottom: '10px',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '80px 20px',
  },
  emptyText: {
    fontSize: '1.5rem',
    color: '#666',
    marginBottom: '20px',
  },
  shopBtn: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '25px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  cartItemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  itemImg: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: '1.1rem',
    color: '#2e7d32',
    marginBottom: '5px',
  },
  itemCost: {
    fontSize: '0.95rem',
    color: '#666',
    marginBottom: '3px',
  },
  itemTotal: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  qtyBtn: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    fontSize: '1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyInput: {
    width: '50px',
    textAlign: 'center',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '5px',
  },
  removeBtn: {
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  cartSummary: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  totalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  totalLabel: {
    fontSize: '1.3rem',
    color: '#333',
  },
  totalAmount: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
  },
  continueShoppingBtn: {
    backgroundColor: 'transparent',
    border: '2px solid #2e7d32',
    color: '#2e7d32',
    padding: '12px 25px',
    borderRadius: '25px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  checkoutBtn: {
    backgroundColor: '#ff5722',
    color: 'white',
    border: 'none',
    padding: '12px 40px',
    borderRadius: '25px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default CartItem;
