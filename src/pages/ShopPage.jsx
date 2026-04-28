import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_PRODUCTS, CATEGORIES } from "../data/products";
import "./ShopPage.css";

const TABS = ["All", "Vegetables", "Fruits", "Dairy", "Grains"];

export default function ShopPage({ addToCart }) {
  const { category } = useParams();
  const navigate = useNavigate();

  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [added, setAdded] = useState({});

  useEffect(() => {
    if (category) {
      const matched = TABS.find(t => t.toLowerCase() === category.toLowerCase());
      if (matched) setActive(matched);
    } else {
      setActive("All");
    }
    window.scrollTo(0, 0);
  }, [category]);

  const handleTabClick = (tab) => {
    setActive(tab);
    navigate(tab === "All" ? "/shop" : `/shop/${tab.toLowerCase()}`);
  };

  const handleCatCard = (name) => {
    setActive(name);
    navigate(`/shop/${name.toLowerCase()}`);
  };

  let filtered = active === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === active);

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }

  if (sort === "price-asc")  filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating")     filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500);
  };

  return (
    <div className="shop-page">
      {/* Hero Banner */}
      <div className="shop-hero">
        <div className="shop-hero-content">
          <span className="section-tag">Our Store</span>
          <h1>Shop Fresh, <em>Live Well</em></h1>
          <p>Browse all our organic and farm-fresh products.</p>
        </div>
      </div>

      <div className="shop-inner">
        {/* Category Cards */}
        <section className="shop-cats">
          <div className="shop-cats-grid">
            {CATEGORIES.map(c => (
              <button
                key={c.name}
                className={`shop-cat-card ${active === c.name ? "active" : ""}`}
                style={{ "--cat-bg": c.color }}
                onClick={() => handleCatCard(c.name)}
              >
                <span className="shop-cat-icon">{c.emoji}</span>
                <span className="shop-cat-name">{c.name}</span>
                <span className="shop-cat-count">{c.count}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Controls */}
        <div className="shop-controls">
          <div className="shop-tabs">
            {TABS.map(t => (
              <button
                key={t}
                className={`tab-btn ${active === t ? "active" : ""}`}
                onClick={() => handleTabClick(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="shop-filters">
            <div className="search-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && <button className="clear-search" onClick={() => setSearch("")}>✕</button>}
            </div>

            <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Results info */}
        <div className="results-info">
          <span>{filtered.length} product{filtered.length !== 1 ? "s" : ""} found
            {active !== "All" ? ` in ${active}` : ""}
            {search ? ` for "${search}"` : ""}
          </span>
          {(active !== "All" || search) && (
            <button className="clear-filter" onClick={() => { setActive("All"); setSearch(""); navigate("/shop"); }}>
              Clear filters ✕
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="no-results">
            <div style={{ fontSize: 64 }}>🔍</div>
            <h3>No products found</h3>
            <p>Try a different search term or category.</p>
            <button className="btn-primary" onClick={() => { setActive("All"); setSearch(""); navigate("/shop"); }}>
              Browse All Products
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map(p => (
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
                    <button
                      className={`add-btn ${added[p.id] ? "added" : ""}`}
                      onClick={() => handleAdd(p)}
                    >
                      {added[p.id] ? "✓" : "+"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
