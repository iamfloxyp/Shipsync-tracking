import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <header className="header">
      <div className="logo">
        <a href="#">ShipSync</a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "×" : "☰"} 
        </button>
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Track</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="auth-buttons">
        <a href="#" className="login">Login</a>
      </div>
      </nav>
     
    </header>
  );
};

export default Header;