// const PriceFilterCard = ({
//   price,
//   setPrice,
//   stockFilter,
//   setStockFilter,
//   categories,
//   setCategories,
// }) => {
//   const selectCategory = (category) => {
//     setCategories([category]); // Set only one category
//   };

//   const categoryOptions = [
//     "Accessories",
//     "Electronics",
//     "Equipment",
//     "Footwear",
//     "Gadgets",
//     "Indoor",
//     "Supplements",
//   ];

//   return (
//     <div className="card shadow-lg rounded-lg p-4">
//       {/* Price Range */}
//       <div className="price-slider mb-4">
//         <label className="form-label fw-bold">Price Range</label>
//         <input
//           type="range"
//           min={0}
//           max={1000}
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           className="form-range"
//         />
//         <div className="d-flex justify-content-between mt-2">
//           <span>${price}</span>
//           <span>Max $1000</span>
//         </div>
//       </div>

//       {/* Categories as Radio Buttons */}
//       <h5 className="fw-bold mt-4">Categories</h5>
//       {categoryOptions.map((cat) => (
//         <div key={cat} className="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             name="category"
//             id={cat}
//             checked={categories[0] === cat}
//             onChange={() => selectCategory(cat)}
//           />
//           <label className="form-check-label" htmlFor={cat}>
//             {cat}
//           </label>
//         </div>
//       ))}

//       {/* Stock Filter */}
//       <h5 className="fw-bold mt-4">Availability</h5>
//       <div className="form-check">
//         <input
//           className="form-check-input"
//           type="radio"
//           id="in-stock"
//           name="stock"
//           checked={stockFilter === "IN_STOCK"}
//           onChange={() => setStockFilter("IN_STOCK")}
//         />
//         <label className="form-check-label" htmlFor="in-stock">
//           In Stock
//         </label>
//       </div>
//       <div className="form-check">
//         <input
//           className="form-check-input"
//           type="radio"
//           id="out-of-stock"
//           name="stock"
//           checked={stockFilter === "OUT_OF_STOCK"}
//           onChange={() => setStockFilter("OUT_OF_STOCK")}
//         />
//         <label className="form-check-label" htmlFor="out-of-stock">
//           Out of Stock
//         </label>
//       </div>
//     </div>
//   );
// };

// export default PriceFilterCard;
const PriceFilterCard = ({
  price,
  setPrice,
  stockFilter,
  setStockFilter,
  categories,
  setCategories,
}) => {
  const selectCategory = (category) => {
    setCategories([category]); // Only one category at a time
  };

  const categoryOptions = [
    "Accessories",
    "Electronics",
    "Equipment",
    "Footwear",
    "Gadgets",
    "Indoor",
    "Supplements",
  ];

  const handlePriceInput = (e) => {
    const newPrice = Number(e.target.value);
    if (newPrice >= 0 && newPrice <= 1000) {
      setPrice(newPrice);
    }
  };

  return (
    <div className="card shadow-lg rounded-lg p-4">
      {/* Price Range with input box beside label */}
      <div className="price-slider mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="form-label fw-bold mb-0">Price Range</label>
          <input
            type="number"
            min="0"
            max="1000"
            value={price}
            onChange={handlePriceInput}
            className="form-control form-control-sm"
            style={{ width: "100px" }}
          />
        </div>
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

      {/* Categories as Radio Buttons */}
      <h5 className="fw-bold mt-4">Categories</h5>
      {categoryOptions.map((cat) => (
        <div key={cat} className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id={cat}
            checked={categories[0] === cat}
            onChange={() => selectCategory(cat)}
          />
          <label className="form-check-label" htmlFor={cat}>
            {cat}
          </label>
        </div>
      ))}

      {/* Stock Filter */}
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
