import { Link, useLocation } from "react-router-dom";
import PriceFilterCard from "./PriceFilterCard";
import { useEffect, useState } from "react";

const products = [
  {
    name: "Bowflex",
    price: "$761.00",
    imgUrl: "/assets/images/product/1.jpg",
  },
  {
    name: "Rogue",
    price: "$159.00",
    imgUrl: "/assets/images/product/2.jpg",
  },
  {
    name: "Amazon Neoprene",
    price: "$357.00",
    imgUrl: "/assets/images/product/3.jpg",
  },
  {
    name: "REP Fitness",
    price: "$654.00",
    imgUrl: "/assets/images/product/4.jpg",
  },
  {
    name: "Eleiko",
    price: "$369.00",
    imgUrl: "/assets/images/product/5.jpg",
  },
  {
    name: "Yes4All",
    price: "$245.00",
    imgUrl: "/assets/images/product/6.jpg",
  },
  {
    name: "CAP",
    price: "$364.00",
    imgUrl: "/assets/images/product/7.jpg",
  },
  {
    name: "YBell",
    price: "$548.00",
    imgUrl: "/assets/images/product/1.jpg",
  },
  {
    name: "Amazon Rubber",
    price: "$364.00",
    imgUrl: "/assets/images/product/7.jpg",
  },
  {
    name: "Amazon Rubber V2",
    price: "$464.00",
    imgUrl: "/assets/images/product/7.jpg",
  },
  {
    name: "Eleiko V2",
    price: "$269.00",
    imgUrl: "/assets/images/product/5.jpg",
  },
  {
    name: "Eleiko V3 pro",
    price: "$369.00",
    imgUrl: "/assets/images/product/5.jpg",
  },
];

function ProductGrid() {
  const [role, setRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const currentRole = location.pathname.split("/")[2];
      setRole(currentRole);
    }
  }, [location.pathname]);
  return (
    <div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xxl-12 col-md-12 col-sm-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <br />
            </div>
            <div className="col-xl-9 col-xxl-10 col-md-12 col-sm-12">
              <div className="row">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-xxl-3 col-md-4 col-sm-6"
                  >
                    <div className="card">
                      <div className="card-body product-grid-card">
                        <div className="new-arrival-product">
                          <div className="new-arrivals-img-contnent">
                            <img
                              className="img-fluid rounded"
                              src={product.imgUrl}
                              alt={product.name}
                            />
                          </div>
                          <div className="new-arrival-content text-center mt-3">
                            <h4>{product.name}</h4>
                            <span className="price">{product.price}</span>
                            <div className="icons mt-3">
                              <button className="btn ">
                                <Link to={`/dashboard/${role}/cart`}>
                                  {" "}
                                  <i className="fas fa-shopping-cart"></i>
                                </Link>
                              </button>

                              {/* Wishlist icon */}
                              <button className="btn ">
                                <Link to={`/dashboard/${role}/wishlist`}>
                                  <i className="fas fa-heart" />
                                </Link>
                              </button>

                              {/* Cart icon */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-3 col-xxl-2 col-md-12 col-sm-12">
              <PriceFilterCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
