const PriceFilterCard = ({
  price,
  setPrice,
  stockFilter,
  setStockFilter,
  categories,
  setCategories,
}) => {
  const toggleCategory = (category) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <div className="card shadow-lg rounded-lg p-4">
      <div className="price-slider mb-4">
        <label className="form-label fw-bold">Price Range</label>
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="form-range"
        />
        <div className="d-flex justify-content-between mt-2">
          <span>${price}</span>
          <span>Max $1000</span>
        </div>
      </div>

      <h5 className="fw-bold mt-4">Categories</h5>
      {[
        "Accessories",
        "Electronics",
        "Equipment",
        "Footwear",
        "Gadgets",
        "Indoor",
        "Supplements",
      ].map((cat) => (
        <div key={cat} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={cat}
            checked={categories.includes(cat)}
            onChange={() => toggleCategory(cat)}
          />
          <label className="form-check-label" htmlFor={cat}>
            {cat}
          </label>
        </div>
      ))}

      <h5 className="fw-bold mt-4">Availability</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="in-stock"
          name="stock"
          checked={stockFilter === "IN_STOCK"}
          onChange={() => setStockFilter("IN_STOCK")}
        />
        <label className="form-check-label" htmlFor="in-stock">
          In Stock
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="out-of-stock"
          name="stock"
          checked={stockFilter === "OUT_OF_STOCK"}
          onChange={() => setStockFilter("OUT_OF_STOCK")}
        />
        <label className="form-check-label" htmlFor="out-of-stock">
          Out of Stock
        </label>
      </div>
    </div>
  );
};
export default PriceFilterCard;
