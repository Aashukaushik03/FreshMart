import { useState } from "react";
import { ALL_PRODUCTS } from "../data/products";
import "./FeaturedProducts.css";

const PREVIEW_COUNT = 8;
const tabs = ["All", "Fruits", "Vegetables", "Dairy", "Grains"];

export default function FeaturedProducts({ addToCart, onViewAll }) {
  const [active, setActive] = useState("All");
  const [added, setAdded] = useState({});

  const filtered = active === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);
  const shown = filtered.slice(0, PREVIEW_COUNT);

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500);
  };

  return (
    <section className="products" id="products">
      <div className="products-inner">
        <div className="section-header">
          <span className="section-tag">Fresh Picks</span>
          <h2>Featured <em>Products</em></h2>
          <p>Handpicked seasonal favorites, delivered straight from the farm.</p>
        </div>

        <div className="product-tabs">
          {tabs.map(t => (
            <button key={t} className={`tab-btn ${active === t ? "active" : ""}`} onClick={() => setActive(t)}>
              {t}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {shown.map(p => (
            <div key={p.id} className="product-card">
              {p.badge && <span className="product-badge">{p.badge}</span>}
              <div className="product-img"><span>{p.emoji}</span></div>
              <div className="product-info">
                <span className="product-cat">{p.category}</span>
                <h3 className="product-name">{p.name}</h3>
                <div className="product-rating">
                  <span className="stars">{"★".repeat(Math.floor(p.rating))}{"☆".repeat(5 - Math.floor(p.rating))}</span>
                  <span className="rating-val">{p.rating}</span>
                  <span className="rating-count">({p.reviews})</span>
                </div>
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-current">₹{p.price}</span>
                    <span className="price-original">₹{p.originalPrice}</span>
                    <span className="price-off">{Math.round((1 - p.price / p.originalPrice) * 100)}% off</span>
                  </div>
                  <button className={`add-btn ${added[p.id] ? "added" : ""}`} onClick={() => handleAdd(p)}>
                    {added[p.id] ? "✓" : "+"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <button className="btn-outline" onClick={onViewAll}>
            View All {ALL_PRODUCTS.length} Products →
          </button>
        </div>
      </div>
    </section>
  );
}
