import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">🌿 FreshMart</Link>
          <p>Your trusted source for fresh, organic, and natural groceries delivered straight from local farms to your doorstep.</p>
          <div className="social-links">
            {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
              <a key={i} href="#" className="social-btn">{icon}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/shop">Deals</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            {["Vegetables", "Fruits", "Dairy", "Grains"].map(cat => (
              <li key={cat}>
                <Link to={`/shop/${cat.toLowerCase()}`}>{cat}</Link>
              </li>
            ))}
            <li><Link to="/shop">View All</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>📍 123 Farm Lane, Ludhiana, Punjab 141001</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@freshmart.in</li>
            <li>🕐 Mon–Sat: 8 AM – 8 PM</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="newsletter-desc">Get weekly deals and fresh picks straight to your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button onClick={() => alert("Thanks for subscribing! 🌿")}>Subscribe</button>
          </div>
          <div className="payment-icons">
            <span>💳</span><span>📱</span><span>🏦</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FreshMart. All rights reserved. Made with 💚 in India.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
