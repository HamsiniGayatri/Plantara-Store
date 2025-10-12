import { Navbar } from "../../components/navbar";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import "./index.css";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(1000); // Adjust max as needed
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Apply filters
  const filteredProducts = products.filter((p) => {
    const matchesPrice = p.price <= priceRange;
    const matchesName = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesPrice && matchesName;
  });

  return (
    <>
    <main>
      <Navbar />
      <div class="promo-section">
  <div class="promo-text">
    <h2>"Bring Nature Closer to Your Home 🌿"</h2>
    <p>Subscribe to get plant care tips, special offers, and eco-friendly ideas delivered to your inbox.</p>
    <form class="subscribe-form">
      <button type="submit" className="discountBtn">Instant 30% Discount</button>
      <button type="submit" className="subscribe">Subscribe</button>
    </form>
  </div>
  <div class="promo-image">
    <img src="/data/images/ZZ.jpg" alt="Green indoor plant"/>
  </div>
</div>

<div class="section-title">
  <h2>Elite Collection</h2>
</div>

      <main className="main-container">
  {/* Sidebar always in layout */}
  <aside className={`sidebar ${isFilterOpen ? "open" : "closed"}`}>
    <button className="close-btn" onClick={() => setIsFilterOpen(false)}>
      ✖
    </button>
    <h3>Filters</h3>

    <div className="filter-section">
      <label>Price up to: {priceRange}</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
      />
    </div>

    <div className="filter-section">
      <label>Search by name</label>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search product..."
      />
    </div>
  </aside>

  {/* Product list */}
  <div className="product-list">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</main>
       <footer className="footer">
             <div className="footer-end">
        © {new Date().getFullYear()} GoVerdana. All rights reserved.
      </div>
        </footer>
        </main>
    </>
  );
};
