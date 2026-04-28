import "./CartDrawer.css";

export default function CartDrawer({ open, onClose, cart, onRemove, onUpdateQty }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div className={`cart-overlay ${open ? "visible" : ""}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart 🛒</h3>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">🛍️</div>
              <p>Your cart is empty!</p>
              <span>Add some fresh products</span>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">{item.emoji}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price}</div>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Subtotal</span>
              <strong>₹{total}</strong>
            </div>
            {total < 499 && (
              <div className="free-delivery-hint">
                Add ₹{499 - total} more for free delivery 🚚
              </div>
            )}
            <button className="checkout-btn">Proceed to Checkout →</button>
            <button className="continue-btn" onClick={onClose}>Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
}
