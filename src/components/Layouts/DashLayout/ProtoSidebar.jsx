import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtoSidebar() {
  const [role, setRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const currentRole = location.pathname.split("/")[2];
      setRole(currentRole);
    }
  }, [location.pathname]);

  const menuItems = {
    admin: [
      {
        label: "Dashboard",
        link: "/dashboard/admin",
        icon: "fas fa-home",
      },
      {
        label: "Workout Plan",
        link: "/dashboard/admin/workoutplan",
        icon: "fas fa-dumbbell",
      },
      {
        label: "Manage Workout Plan",
        link: "/dashboard/admin/manageworkoutplan",
        icon: "fas fa-pencil-alt",
      },
      {
        label: "Manage Workout Log",
        link: "/dashboard/admin/manageworkoutlog",
        icon: "fas fa-calendar-check",
      },
      {
        label: "Manage Activity",
        link: "/dashboard/admin/manageactivity",
        icon: "fas fa-running",
      },
      {
        label: "Diet Plan",
        link: "/dashboard/admin/dietplan",
        icon: "fas fa-apple-alt",
      },
      {
        label: "Manage Diet Plan",
        link: "/dashboard/admin/managedietplan",
        icon: "fas fa-pizza-slice",
      },
      {
        label: "Manage Food Catalogue",
        link: "/dashboard/admin/managefoodcatalogue",
        icon: "fas fa-th-list",
      },
      {
        label: "Manage Food Log",
        link: "/dashboard/admin/managefoodlog",
        icon: "fas fa-book",
      },
      {
        label: "Shop",
        link: "/dashboard/admin/shop",
        icon: "fas fa-store",
      },
      {
        label: "Orders",
        link: "/dashboard/admin/orders",
        icon: "fas fa-shopping-cart",
      },
      {
        label: "Wishlist",
        link: "/dashboard/admin/wishlist",
        icon: "fas fa-heart",
      },
      {
        label: "Cart",
        link: "/dashboard/admin/cart",
        icon: "fas fa-cart-plus",
      },
      {
        label: "Personal Record",
        link: "/dashboard/admin/personalrecord",
        icon: "fas fa-id-card",
      },
      {
        label: "Settings",
        link: "/dashboard/admin/settings",
        icon: "fas fa-cogs",
      },
      {
        label: "Manage Orders",
        link: "/dashboard/admin/manageorders",
        icon: "fas fa-box",
      },
      {
        label: "Manage Products",
        link: "/dashboard/admin/manageproducts",
        icon: "fas fa-cogs",
      },
      {
        label: "Manage Users",
        link: "/dashboard/admin/manageusers",
        icon: "fas fa-users",
      },
      {
        label: "Integration",
        link: "/dashboard/admin/integration",
        icon: "fas fa-plug",
      },
    ],
    vendor: [
      {
        label: "Dashboard",
        link: "/dashboard/admin",
        icon: "fas fa-home",
      },
      {
        label: "Workout Plan",
        link: "/dashboard/vendor/workoutplan",
        icon: "fas fa-network-wired",
      },
      {
        label: "Diet Plan",
        link: "/dashboard/vendor/dietplan",
        icon: "fas fa-apple-alt",
      },
      {
        label: "Shop",
        link: "/dashboard/vendor/shop",
        icon: "fas fa-store",
      },
      {
        label: "Orders",
        link: "/dashboard/vendor/orders",
        icon: "fas fa-shopping-cart",
      },
      {
        label: "Wishlist",
        link: "/dashboard/vendor/wishlist",
        icon: "fas fa-heart",
      },
      {
        label: "Cart",
        link: "/dashboard/vendor/cart",
        icon: "fas fa-cart-plus",
      },
      {
        label: "Personal Record",
        link: "/dashboard/vendor/personalrecord",
        icon: "fas fa-id-card",
      },
      {
        label: "Settings",
        link: "/dashboard/vendor/settings",
        icon: "fas fa-cogs",
      },
      {
        label: "Manage Orders",
        link: "/dashboard/vendor/manageorders",
        icon: "fas fa-box",
      },
      {
        label: "Manage Products",
        link: "/dashboard/vendor/manageproducts",
        icon: "fas fa-cogs",
      },
    ],
    user: [
      {
        label: "Dashboard",
        link: "/dashboard/admin",
        icon: "fas fa-home",
      },
      {
        label: "Workout Plan",
        link: "/dashboard/user/workoutplan",
        icon: "fas fa-network-wired",
      },
      {
        label: "Diet Plan",
        link: "/dashboard/user/dietplan",
        icon: "fas fa-apple-alt",
      },
      {
        label: "Shop",
        link: "/dashboard/user/shop",
        icon: "fas fa-store",
      },
      {
        label: "Orders",
        link: "/dashboard/user/orders",
        icon: "fas fa-shopping-cart",
      },
      {
        label: "Wishlist",
        link: "/dashboard/user/wishlist",
        icon: "fas fa-heart",
      },
      {
        label: "Cart",
        link: "/dashboard/user/cart",
        icon: "fas fa-cart-plus",
      },
      {
        label: "Personal Record",
        link: "/dashboard/user/personalrecord",
        icon: "fas fa-id-card",
      },
      {
        label: "Settings",
        link: "/dashboard/user/settings",
        icon: "fas fa-cogs",
      },
    ],
  };

  const currentMenuItems = menuItems[role] || [];

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {currentMenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <i className={item.icon} />
                <span className="nav-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="drum-box">
          <img src="images/card/drump.png" alt />
          <p className="fs-18 font-w500 mb-4">Start Plan Your Workout</p>
          <a className href="javascript:;">
            Check schedule
            <svg
              className="ms-3"
              width={6}
              height={12}
              viewBox="0 0 6 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 12L6 6L0 0" fill="#BCD7FF" />
            </svg>
          </a>
        </div>
        <div className="copyright">
          <p>
            <strong>Fito Fitness Admin Dashboard</strong> © 2023 All Rights
            Reserved
          </p>
          <p>
            Made with <span className="heart" /> by DexignZone
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProtoSidebar;
