import { useNavigate, useLocation } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get the current route

  // Function to determine if the link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Company logo */}
        <img
          src="/logo.png"
          alt="Company Logo"
          className="navbar-logo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="navbar-center">
        {/* Navigation links with conditional active class */}
        <p
          className={`navbar-link ${isActive("/") ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p
          className={`navbar-link ${
            isActive("/product_services") ? "active" : ""
          }`}
          onClick={() => navigate("/product_services")}
        >
          Product Services
        </p>
        <p
          className={`navbar-link ${isActive("/about_us") ? "active" : ""}`}
          onClick={() => navigate("/about_us")}
        >
          About Us
        </p>
        <p
          className={`navbar-link ${isActive("/community") ? "active" : ""}`}
          onClick={() => navigate("/community")}
        >
          Community
        </p>
      </div>

      <div className="navbar-right">
        {/* Register or login button */}
        <button className="navbar-button">Register / Login</button>
      </div>
    </div>
  );
};

export default NavBar;
