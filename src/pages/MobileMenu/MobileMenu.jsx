import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="menu-btn-burger"></div>
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="">Hakkımızda</Link>
          </li>
          <li>
            <Link to="">Hizmetler</Link>
          </li>
          <li>
            <Link to="">İletişim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
