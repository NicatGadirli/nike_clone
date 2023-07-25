import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Nike } from "../assets/Images/svg/Nike.svg";
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Cart } from "../assets/Images/svg/Cart.svg";
import { ReactComponent as Search } from "../assets/Images/svg/Search.svg";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoArea">
            <Link to="/">
              <Nike className="logo" />
            </Link>
          </div>
          <div className={`navBarArea ${isSearchOpen ? "hidden" : ""}`}>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem">Yeni ve Öne Çıkanlar</li>
                <li className="navItem">Erkek</li>
                <li className="navItem">Kadın</li>
                <li className="navItem">Çocuk</li>
                <li className="navItem">İndirim</li>
              </ul>
            </nav>
          </div>
          <div className="operation">
            <div className="searchBox">
              <div className="inputBox">
                <button className="searchBtn" onClick={handleSearchToggle}>
                  <Search className="search" />
                </button>
                <input type="text" placeholder="Ara" />
              </div>
              <button className={`cancelBtn ${isSearchOpen ? "visible" : ""}`}>
                İptal
              </button>
              <div
                className={`searchResultsBox ${
                  isSearchOpen ? "visible" : "hidden"
                }`}
              >
                <div className="searchResults">
                  <p>Popüler Arama Terimleri</p>
                  <ul>
                    <li>
                      <Link to="/">Air Force 1</Link>
                    </li>
                    <li>
                      <Link to="/">Jordan</Link>
                    </li>
                    <li>
                      <Link to="/">Air Max</Link>
                    </li>
                    <li>
                      <Link to="/">Blazer</Link>
                    </li>
                  </ul>
                </div>
                <div className="overlay"></div>
              </div>
            </div>
            <div
              className={`operationIconsArea ${isSearchOpen ? "hidden" : ""}`}
            >
              <button className="operationBtn">
                <Heart className="operationIcons" />
              </button>
              <button className="operationBtn">
                <Cart className="operationIcons" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
