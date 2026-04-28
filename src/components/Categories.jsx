import "./Categories.css";

const cats = [
  { emoji: "🥦", name: "Vegetables", count: "8+ items",  color: "#e8f5e9" },
  { emoji: "🍎", name: "Fruits",     count: "8+ items",  color: "#fce4ec" },
  { emoji: "🥛", name: "Dairy",      count: "5+ items",  color: "#e3f2fd" },
  { emoji: "🌾", name: "Grains",     count: "4+ items",  color: "#fff8e1" },
  { emoji: "🥩", name: "Meat & Fish",count: "70+ items", color: "#fbe9e7" },
  { emoji: "🧃", name: "Beverages",  count: "55+ items", color: "#e8f5e9" },
  { emoji: "🍫", name: "Snacks",     count: "100+ items",color: "#ede7f6" },
  { emoji: "🧴", name: "Personal Care",count:"90+ items",color: "#e0f7fa" },
];

export default function Categories({ onCategoryClick }) {
  return (
    <section className="categories" id="categories">
      <div className="categories-inner">
        <div className="section-header">
          <span className="section-tag">Browse by Category</span>
          <h2>Shop What You <em>Love</em></h2>
          <p>Explore our wide range of fresh, organic, and natural products.</p>
        </div>
        <div className="cat-grid">
          {cats.map((c) => (
            <div
              key={c.name}
              className="cat-card"
              style={{ "--cat-bg": c.color }}
              onClick={() => onCategoryClick && onCategoryClick(c.name)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && onCategoryClick && onCategoryClick(c.name)}
            >
              <div className="cat-icon">{c.emoji}</div>
              <div className="cat-name">{c.name}</div>
              <div className="cat-count">{c.count}</div>
              <div className="cat-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
