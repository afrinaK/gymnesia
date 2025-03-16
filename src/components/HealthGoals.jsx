import React, { useEffect, useState } from "react";
import "../styles/HealthGoals.css"; // Import the CSS file

const HealthGoals = () => {
  const [products, setProducts] = useState([]);
  const PEXELS_API_KEY =
    "kM6pDZDK5HALO3aDZHHrbTZ5Je3rF8Z2P59sKwKMULF4BSMBDoWtFciJ"; // Replace with your Pexels API key
  const MOCK_API_URL = "https://jsonplaceholder.typicode.com/posts"; // Mock API for prices

  useEffect(() => {
    // Fetch images from Pexels API
    fetch(`https://api.pexels.com/v1/search?query=pills&per_page=12`, {
      headers: { Authorization: PEXELS_API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        // Fetch prices from mock API
        fetch(MOCK_API_URL)
          .then((res) => res.json())
          .then(() => {
            // Combine images and prices
            const combinedData = data.photos.map((photo, index) => ({
              id: photo.id,
              image: photo.src.medium,
              title: `Product ${index + 1}`,
              price: `$${(Math.random() * 100).toFixed(2)}`, // Random price for demo
            }));
            setProducts(combinedData);
          });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="health-goals">
      <h1>
        Solutions For Your <span className="highlight">Unique</span> Health
        Goals
      </h1>
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {[
          "All",
          "Best Selling",
          "Weight Loss",
          "Beauty",
          "Testosterone",
          "Sexual Health",
        ].map((category) => (
          <button key={category} className="filter-btn">
            {category}
          </button>
        ))}
      </div>
      <div className="categories">
        <div className="other-categories">
          <div className="product-grid">
            {products.slice(4).map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthGoals;
