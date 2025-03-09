// import React, { useState } from "react";

// const PriceFilterCard = () => {
//   const [price, setPrice] = useState(500);

//   // Handle slider value change
//   const handleSliderChange = (event) => {
//     setPrice(event.target.value);
//   };

//   // Handle input value change
//   const handleInputChange = (event) => {
//     const newPrice = event.target.value;
//     if (newPrice >= 0 && newPrice <= 1000) {
//       setPrice(newPrice);
//     }
//   };

//   return (
//     <div
//       className="card shadow-lg rounded-lg"
//       style={{
//         width: "auto", // Remove fixed width to allow content to dictate the size
//         height: "auto", // Remove fixed height for the same reason
//         padding: "20px", // Optional: Add some padding to the card for spacing
//       }}
//     >
//       <div className="card-body filter-section p-4">
//         {/* Price Slider */}
//         <div className="price-slider mb-4">
//           <label htmlFor="price-range" className="form-label fw-bold">
//             Price Range
//           </label>

//           <div className="d-flex align-items-center">
//             <input
//               type="range"
//               id="price-range"
//               min={0}
//               max={1000}
//               value={price}
//               onChange={handleSliderChange}
//               className="form-range"
//               aria-describedby="price-value"
//               style={{ width: "100%" }} // Inline CSS for range input
//             />
//             <span className="ms-3" id="price-value">
//               ${price}
//             </span>
//           </div>

//           <div className="d-flex justify-content-between mt-2">
//             <input
//               type="number"
//               className="form-control"
//               value={price}
//               min={0}
//               max={1000}
//               onChange={handleInputChange}
//               aria-label="Price input"
//               style={{ width: "80px" }}
//             />
//             <span>-</span>
//             <input
//               type="number"
//               className="form-control"
//               value={1000}
//               readOnly
//               aria-label="Max price"
//               style={{ width: "80px" }}
//             />
//           </div>
//         </div>

//         <div className="categories-filter mt-4">
//           {/* Activity Type Filter Section */}
//           <div className="activity-type-filter mt-4">
//             <h5 className="mb-3 fw-bold">Activity Type</h5>

//             {/* Exercise Modes */}
//             <h6 className="fw-bold">Exercise Modes</h6>
//             <ul className="list-unstyled">
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="walking"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="walking" className="ms-2">
//                   Walking
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="running"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="running" className="ms-2">
//                   Running
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="cycling"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="cycling" className="ms-2">
//                   Cycling
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="swimming"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="swimming" className="ms-2">
//                   Swimming
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input type="checkbox" id="yoga" className="form-check-input" />
//                 <label htmlFor="yoga" className="ms-2">
//                   Yoga
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="hiking"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="hiking" className="ms-2">
//                   Hiking
//                 </label>
//               </li>
//             </ul>

//             {/* Sports Tracking */}
//             <h6 className="fw-bold mt-3">Sports Tracking</h6>
//             <ul className="list-unstyled">
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="triathlon"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="triathlon" className="ms-2">
//                   Triathlon
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="swimming-sports"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="swimming-sports" className="ms-2">
//                   Swimming Sports
//                 </label>
//               </li>
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="weightlifting"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="weightlifting" className="ms-2">
//                   Weightlifting
//                 </label>
//               </li>
//             </ul>
//           </div>

//           {/* Availability Filter Section */}
//           <div className="availability-filter mt-4">
//             <h5 className="mb-3 fw-bold">Availability</h5>
//             <ul className="list-unstyled">
//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="in-stock"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="in-stock" className="ms-2">
//                   In Stock
//                 </label>
//               </li>

//               <li className="d-flex align-items-center mb-2">
//                 <input
//                   type="checkbox"
//                   id="out-of-stock"
//                   className="form-check-input"
//                 />
//                 <label htmlFor="out-of-stock" className="ms-2">
//                   Out of Stock
//                 </label>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceFilterCard;
import React, { useState } from "react";

const PriceFilterCard = () => {
  const [price, setPrice] = useState(500);

  // Handle slider value change
  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  // Handle input value change
  const handleInputChange = (event) => {
    const newPrice = event.target.value;
    if (newPrice >= 0 && newPrice <= 1000) {
      setPrice(newPrice);
    }
  };

  return (
    <div
      className="card shadow-lg rounded-lg"
      style={{
        width: "100%", // Ensure the card takes full width of its container
        height: "auto", // Allow the height to adjust based on content
        padding: "20px",
      }}
    >
      <div className="card-body filter-section p-4">
        {/* Price Slider */}
        <div className="price-slider mb-4">
          <label htmlFor="price-range" className="form-label fw-bold">
            Price Range
          </label>

          <div className="d-flex align-items-center">
            <input
              type="range"
              id="price-range"
              min={0}
              max={1000}
              value={price}
              onChange={handleSliderChange}
              className="form-range"
              aria-describedby="price-value"
              style={{ width: "100%" }} // Inline CSS for range input
            />
            <span className="ms-3" id="price-value">
              ${price}
            </span>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <input
              type="number"
              className="form-control"
              value={price}
              min={0}
              max={1000}
              onChange={handleInputChange}
              aria-label="Price input"
              style={{ width: "80px" }}
            />
            <span>-</span>
            <input
              type="number"
              className="form-control"
              value={1000}
              readOnly
              aria-label="Max price"
              style={{ width: "80px" }}
            />
          </div>
        </div>

        <div className="categories-filter mt-4">
          {/* Activity Type Filter Section */}
          <div className="activity-type-filter mt-4">
            <h5 className="mb-3 fw-bold">Activity Type</h5>

            {/* Exercise Modes */}
            <h6 className="fw-bold">Exercise Modes</h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="walking"
                  className="form-check-input"
                />
                <label htmlFor="walking" className="ms-2">
                  Walking
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="running"
                  className="form-check-input"
                />
                <label htmlFor="running" className="ms-2">
                  Running
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="cycling"
                  className="form-check-input"
                />
                <label htmlFor="cycling" className="ms-2">
                  Cycling
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="swimming"
                  className="form-check-input"
                />
                <label htmlFor="swimming" className="ms-2">
                  Swimming
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input type="checkbox" id="yoga" className="form-check-input" />
                <label htmlFor="yoga" className="ms-2">
                  Yoga
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="hiking"
                  className="form-check-input"
                />
                <label htmlFor="hiking" className="ms-2">
                  Hiking
                </label>
              </li>
            </ul>

            {/* Sports Tracking */}
            <h6 className="fw-bold mt-3">Sports Tracking</h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="triathlon"
                  className="form-check-input"
                />
                <label htmlFor="triathlon" className="ms-2">
                  Triathlon
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="swimming-sports"
                  className="form-check-input"
                />
                <label htmlFor="swimming-sports" className="ms-2">
                  Swimming Sports
                </label>
              </li>
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="weightlifting"
                  className="form-check-input"
                />
                <label htmlFor="weightlifting" className="ms-2">
                  Weightlifting
                </label>
              </li>
            </ul>
          </div>

          {/* Availability Filter Section */}
          <div className="availability-filter mt-4">
            <h5 className="mb-3 fw-bold">Availability</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="in-stock"
                  className="form-check-input"
                />
                <label htmlFor="in-stock" className="ms-2">
                  In Stock
                </label>
              </li>

              <li className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  id="out-of-stock"
                  className="form-check-input"
                />
                <label htmlFor="out-of-stock" className="ms-2">
                  Out of Stock
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilterCard;
