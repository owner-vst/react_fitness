import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function NavHeader() {
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
      <div className="nav-header">
        <a className="brand-logo">
          <img className="logo-abbr" src="/assets/images/logo.png" alt />
          <img
            className="logo-compact"
            src="/assets/images/logo-text.png"
            alt="logo"
          />
          <img className="brand-title" src="/assets/images/logo-text.png" alt />
        </a>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
