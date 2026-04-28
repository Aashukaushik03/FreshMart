import "./Hero.css";

export default function Hero({ onShopClick }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-decor">
        <div className="decor-circle c1" />
        <div className="decor-circle c2" />
        <div className="decor-circle c3" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-tag">🌱 100% Organic &amp; Fresh</span>
          <h1 className="hero-title">
            Farm Fresh <br />
            <em>Goodness</em> <br />
            Delivered Daily
          </h1>
          <p className="hero-subtitle">
            Shop the finest organic produce, artisan foods, and natural products
            sourced directly from local farms. No middlemen, just freshness.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onShopClick}>Shop Now →</button>
            <a href="#about" className="btn-ghost">How it works</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>12K+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>500+</strong>
              <span>Organic Products</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>50+</strong>
              <span>Local Farms</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card main-card">
            <div className="card-emoji">🛒</div>
            <div className="card-content">
              <p className="card-label">Your Fresh Basket</p>
              <div className="basket-items">
                <div className="basket-item">🥦 Organic Broccoli <span>₹65</span></div>
                <div className="basket-item">🍓 Strawberries <span>₹120</span></div>
                <div className="basket-item">🥑 Avocados (2) <span>₹180</span></div>
                <div className="basket-item">🍋 Lemons (6) <span>₹55</span></div>
              </div>
              <div className="basket-total">
                <span>Total</span>
                <strong>₹420</strong>
              </div>
            </div>
          </div>

          <div className="hero-badge badge-delivery">
            <span className="badge-icon">🚚</span>
            <div>
              <strong>Free Delivery</strong>
              <p>Orders above ₹499</p>
            </div>
          </div>

          <div className="hero-badge badge-fresh">
            <span className="badge-icon">⭐</span>
            <div>
              <strong>4.9 Rating</strong>
              <p>From 8,200+ reviews</p>
            </div>
          </div>

          <div className="floating-produce p1">🍅</div>
          <div className="floating-produce p2">🥕</div>
          <div className="floating-produce p3">🌽</div>
        </div>
      </div>
    </section>
  );
}
