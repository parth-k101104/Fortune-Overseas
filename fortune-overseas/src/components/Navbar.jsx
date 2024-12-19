import React from "react";
import "../components/navbar.css";

const Navbar = ({ customerName }) => {
  return (
    <nav className="navbar">
      {/* Company Name */}
      <div className="navbar-brand">
        <h1>Fortune Overseas</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#our-vision">Our Vision</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>

      {/* Profile Section */}
      <div className="navbar-profile">
        <span>Welcome, {customerName}</span>
      </div>
    </nav>
  );
};

const App = () => {
  const loggedInCustomerName = "Rishabh"; // Replace with dynamic data as needed

  return (
    <div>
      <Navbar customerName={loggedInCustomerName} />
      {/* Other Components (Hero Section, etc.) */}
    </div>
  );
};

export default App;