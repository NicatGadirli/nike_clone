// Router
import { Link } from "react-router-dom";

// Icons
import { FiUser } from "react-icons/fi";

import { useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Svg
import { ReactComponent as Man } from "../assets/Images/svg/Man.svg";
import { ReactComponent as Nike } from "../assets/Images/svg/Nike.svg";
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Cart } from "../assets/Images/svg/Cart.svg";
import { ReactComponent as Search } from "../assets/Images/svg/Search.svg";

const Header = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleCancelSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <section className={`topHeaderArea ${isSearchOpen ? "hidden" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="topHeaderLeft">
              <Link to="">
                <Man className="airJordan" />
              </Link>
            </div>
            <div className="topHeaderRight">
              <div className="profileInfo">
                <Link to="">Mağaza Bul</Link>
                <span></span>
                <Link to="">Yardım</Link>
                <span></span>
                <Link to="/Register">Bize Katıl</Link>
                <span></span>
                <Link to="/Login">Oturum Aç</Link>
              </div>
              <div className="userIcon">
                <div className="userArea">
                  <div className="accountMenu">
                    <nav className="dropDown">
                      <ul className="dropDownList">
                        <Link to="">Hesap</Link>
                        <li className="dropDownItem">
                          <Link>Profil</Link>
                        </li>
                        <li className="dropDownItem">
                          <Link>Siparişler</Link>
                        </li>
                        <li className="dropDownItem">
                          <Link>Favoriler</Link>
                        </li>
                        <li className="dropDownItem">
                          <Link>Gelen Kutusu</Link>
                        </li>
                        <li className="dropDownItem">
                          <Link>Deneyimler</Link>
                        </li>
                        <li className="dropDownItem">
                          <Link>Hesap Ayarları</Link>
                        </li>
                        <li className="dropDownItem">
                          <Link>Oturumu Kapat</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <Link to="">
                    <FiUser className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <div
              className={`operation ${
                isSearchOpen ? "visible_operation_box" : ""
              }`}
            >
              <div className="searchBox">
                <div className="inputBox">
                  <button className="searchBtn" onClick={handleSearchToggle}>
                    <Search className="search" />
                  </button>
                  <input type="text" placeholder="Ara" />
                </div>
                <button
                  className={`cancelBtn ${isSearchOpen ? "visible" : ""}`}
                  onClick={handleCancelSearch}
                >
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
                <Link className="operationBtn" to="/favorite">
                  <Heart className="operationIcons" />
                </Link>
                <Link to="/Cart" className="operationBtn ">
                  <Cart className="operationIcons" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
