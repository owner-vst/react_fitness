import { Link } from "react-router-dom";

function DashFooter() {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <Link>insightstracker.fit</Link> 2025
        </p>
      </div>
    </div>
  );
}

export default DashFooter;
