function NavHeader() {
  return (
    <div>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src="/assests/images/logo.png" alt />
          <img
            className="logo-compact"
            src="/assestsimages/logo-text.png"
            alt
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
