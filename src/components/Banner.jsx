import { useNavigate } from "react-router-dom";
import "./Banner.css";

export default function Banner() {
  const navigate = useNavigate();

  return (
    <section className="banner-section">
      <div className="banner-inner">
        <div className="banner-card green-card">
          <div className="banner-content">
            <span className="banner-tag">Limited Offer</span>
            <h3>Get 20% Off Your First Order</h3>
            <p>Use code <strong>FRESH20</strong> at checkout. Valid on all organic produce.</p>
            <button className="banner-btn white-btn" onClick={() => navigate("/shop")}>Claim Offer →</button>
          </div>
          <div className="banner-decor">🥗</div>
        </div>

        <div className="banner-card orange-card">
          <div className="banner-content">
            <span className="banner-tag">Free Delivery</span>
            <h3>Same-Day Delivery Available</h3>
            <p>Order before 12 PM and get your groceries delivered by evening.</p>
            <button className="banner-btn white-btn" onClick={() => navigate("/shop")}>Order Now →</button>
          </div>
          <div className="banner-decor">🚚</div>
        </div>
      </div>

      <div className="why-us">
        <div className="why-inner">
          {[
            { icon: "🌱", title: "100% Organic",    desc: "All products certified organic and pesticide-free" },
            { icon: "🚜", title: "Direct from Farms",desc: "No middlemen — straight from local farmers to you" },
            { icon: "♻️", title: "Eco Packaging",   desc: "Biodegradable and sustainable packaging always" },
            { icon: "💳", title: "Secure Payments",  desc: "UPI, cards, wallets — all payments 100% secure" },
          ].map(w => (
            <div key={w.title} className="why-card">
              <div className="why-icon">{w.icon}</div>
              <div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
