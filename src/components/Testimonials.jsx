import "./Testimonials.css";

const reviews = [
  { name: "Priya Sharma", location: "Mumbai", avatar: "👩‍🦱", rating: 5, text: "FreshMart has completely changed how I shop. The produce is incredibly fresh and the delivery is always on time. My family loves it!" },
  { name: "Rahul Gupta", location: "Delhi", avatar: "👨‍💼", rating: 5, text: "Best organic grocery delivery in the city. The quality is outstanding and prices are very reasonable. Highly recommended!" },
  { name: "Ananya Patel", location: "Bangalore", avatar: "👩‍🎓", rating: 5, text: "I've tried many grocery apps but FreshMart is by far the best. The app is so easy to use and the products are always top quality." },
  { name: "Vikram Singh", location: "Pune", avatar: "🧔", rating: 4, text: "Great selection of organic produce. Same-day delivery is a game changer. Will definitely keep ordering from FreshMart!" },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="section-header">
          <span className="section-tag">Customer Love</span>
          <h2>What Our <em>Customers</em> Say</h2>
          <p>Join thousands of happy families who shop fresh with us every day.</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-stars">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </div>
              <p className="review-text">"{r.text}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.avatar}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-loc">📍 {r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <strong>4.9/5</strong>
            <span>Average Rating</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>12,000+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>98%</strong>
            <span>On-Time Delivery</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <strong>50+</strong>
            <span>Partner Farms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
