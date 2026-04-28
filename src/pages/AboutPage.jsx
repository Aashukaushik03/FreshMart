import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", emoji: "👨‍🌾", bio: "Former farmer turned entrepreneur, passionate about connecting local farms with urban families." },
  { name: "Priya Kapoor", role: "Head of Operations", emoji: "👩‍💼", bio: "Supply chain expert with 10 years ensuring every product reaches you at peak freshness." },
  { name: "Rohit Sharma", role: "Farm Relations", emoji: "🧑‍🤝‍🧑", bio: "Works directly with 50+ local farms to curate the finest seasonal produce." },
  { name: "Sneha Patel", role: "Product & Tech", emoji: "👩‍💻", bio: "Builds the technology that makes ordering fresh groceries effortless for every family." },
];

const values = [
  { emoji: "🌱", title: "Farm First",      desc: "We partner directly with local, organic farms — cutting out middlemen to give you fresher produce and fair prices." },
  { emoji: "♻️", title: "Planet Friendly", desc: "Biodegradable packaging, electric delivery vehicles, and zero food waste policies across our entire supply chain." },
  { emoji: "🤝", title: "Community",       desc: "Every purchase supports local farmers and their families, building sustainable livelihoods across rural India." },
  { emoji: "✅", title: "Transparency",    desc: "We show you exactly where your food comes from — every product is traceable back to its source farm." },
];

const milestones = [
  { year: "2020", event: "FreshMart founded in Ludhiana with 5 partner farms" },
  { year: "2021", event: "Expanded to 3 cities, reached 1,000 happy customers" },
  { year: "2022", event: "Launched same-day delivery and mobile app" },
  { year: "2023", event: "Partnered with 50+ farms across Punjab and Haryana" },
  { year: "2024", event: "Hit 10,000 customers — became North India's top organic store" },
  { year: "2025", event: "Expanded nationally with 25 cities and 12,000+ customers" },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="section-tag">Our Story</span>
          <h1>Grown with <em>Love</em>, <br />Delivered with Care</h1>
          <p>FreshMart was born from a simple belief: every family deserves access to fresh, honest, and affordable organic food.</p>
          <button className="btn-primary" onClick={() => navigate("/shop")}>Shop Our Products →</button>
        </div>
        <div className="about-hero-visual">
          <div className="about-stat-card">
            <div className="stat-row">
              <div className="about-stat"><strong>12K+</strong><span>Customers</span></div>
              <div className="about-stat"><strong>50+</strong><span>Farms</span></div>
            </div>
            <div className="stat-row">
              <div className="about-stat"><strong>98%</strong><span>On-Time</span></div>
              <div className="about-stat"><strong>4.9★</strong><span>Rating</span></div>
            </div>
          </div>
          <div className="about-emoji-float">🌾</div>
          <div className="about-emoji-float f2">🥬</div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-inner">
          <div className="mission-text">
            <span className="section-tag">Our Mission</span>
            <h2>Connecting Farms to <em>Families</em></h2>
            <p>We started FreshMart because we were frustrated with the grocery industry — stale produce, hidden chemicals, and no idea where the food actually came from.</p>
            <p>Today, we work hand-in-hand with certified organic farmers across North India, bringing you produce that's picked at peak ripeness and delivered to your door within 24 hours.</p>
            <p>No chemicals. No mystery ingredients. Just honest, fresh food the way nature intended.</p>
          </div>
          <div className="mission-image">
            <div className="mission-img-box">
              <span>🚜</span>
              <p>Direct from our partner farms in Punjab, Haryana & Himachal Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-inner">
          <div className="section-header">
            <span className="section-tag">What We Stand For</span>
            <h2>Our Core <em>Values</em></h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.emoji}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="about-inner">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2>How We <em>Grew</em></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="about-inner">
          <div className="section-header">
            <span className="section-tag">The People</span>
            <h2>Meet Our <em>Team</em></h2>
            <p>A passionate group of food lovers, farmers, and tech builders.</p>
          </div>
          <div className="team-grid">
            {team.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.emoji}</div>
                <h3>{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Ready to Eat <em>Fresh</em>?</h2>
          <p>Join 12,000+ families who trust FreshMart for their daily groceries.</p>
          <div className="cta-btns">
            <button className="btn-primary" onClick={() => navigate("/shop")}>Start Shopping →</button>
            <button className="btn-ghost" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>
      </section>
    </div>
  );
}
