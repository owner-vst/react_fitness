import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ProtoSidebar({ isSidebarOpen }) {
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
        link: `/dashboard/${role}`,
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
        label: "Manage Catalogue",
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
      // {
      //   label: "Wishlist",
      //   link: "/dashboard/admin/wishlist",
      //   icon: "fas fa-heart",
      // },
      // {
      //   label: "Cart",
      //   link: "/dashboard/admin/cart",
      //   icon: "fas fa-cart-plus",
      // },

      // {
      //   label: "Manage Orders",
      //   link: "/dashboard/admin/manageorders",
      //   icon: "fas fa-box",
      // },
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
        label: "Chat",
        link: "/dashboard/admin/chat",
        icon: "fas fa-comments",
      },
      {
        label: "Integration",
        link: "/dashboard/admin/integration",
        icon: "fas fa-plug",
      },
      {
        label: "Workout Stats",
        link: "/dashboard/admin/workoutstat",
        icon: "fas fa-chart-line",
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
    ],
    vendor: [
      {
        label: "Dashboard",
        link: `/dashboard/${role}`,
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
      // {
      //   label: "Cart",
      //   link: "/dashboard/vendor/cart",
      //   icon: "fas fa-cart-plus",
      // },
      // {
      //   label: "Wishlist",
      //   link: "/dashboard/vendor/wishlist",
      //   icon: "fas fa-heart",
      // },
      // {
      //   label: "Manage Orders",
      //   link: "/dashboard/vendor/manageorders",
      //   icon: "fas fa-box",
      // },
      {
        label: "Manage Products",
        link: "/dashboard/vendor/manageproducts",
        icon: "fas fa-cogs",
      },
      {
        label: "Workout Stats",
        link: "/dashboard/admin/workoutstat",
        icon: "fas fa-chart-line",
      },

      {
        label: "Personal Record",
        link: "/dashboard/vendor/personalrecord",
        icon: "fas fa-id-card",
      },
      {
        label: "Chat",
        link: "/dashboard/vendor/chat",
        icon: "fas fa-comments",
      },
      {
        label: "Settings",
        link: "/dashboard/vendor/settings",
        icon: "fas fa-cogs",
      },
    ],
    user: [
      {
        label: "Dashboard",
        link: `/dashboard/${role}`,
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
        label: "Workout Stats",
        link: "/dashboard/admin/workoutstat",
        icon: "fas fa-chart-line",
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
        label: "Chat",
        link: "/dashboard/user/chat",
        icon: "fas fa-comments",
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
    <div className={`deznav ${isSidebarOpen ? "fixed" : ""}`}>
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

        <div className="copyright">
          <p>Made by insightstracker.fit</p>
        </div>
      </div>
    </div>
  );
}

export default ProtoSidebar;
