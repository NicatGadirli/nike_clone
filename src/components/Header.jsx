// Router
import { Link, useLocation } from "react-router-dom";

//HamburgerMenu
import MobileMenu from "../pages/mobileMenu/MobileMenu";

// Icons
import { FiUser } from "react-icons/fi";

//React Hook
import { useState } from "react";

//Context
import React, { useContext, useEffect } from "react";
import { Context } from "../utils/Context";

// Svg
import { ReactComponent as Man } from "../assets/Images/svg/Man.svg";
import { ReactComponent as Nike } from "../assets/Images/svg/Nike.svg";
import { ReactComponent as Heart } from "../assets/Images/svg/Heart.svg";
import { ReactComponent as Cart } from "../assets/Images/svg/Cart.svg";
import { ReactComponent as Search } from "../assets/Images/svg/Search.svg";
import { ReactComponent as Checked } from "../assets/Images/svg/Checked.svg";

const Header = () => {
  //Global States
  const { cart, cartSum, user } = useContext(Context);


  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showCartBox, setShowCartBox] = useState(true);
  const location = useLocation();

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  
  const handleCancelSearch = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    if (cart.length > 0) {
      setShowCartBox(true);
      const timer = setTimeout(() => {
        setShowCartBox(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [cart]);



  return (
    <>
      <header className={`topHeaderArea ${isSearchOpen ? "hidden" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="topHeaderLeft">
              <Link to="">
                <Man className="airJordan" />
              </Link>
            </div>
            <div className="topHeaderRight">
              <div className="profileInfo">
                <ul className="profileInfoList">
                  <li className="profileInfoItem"><Link to="/">Mağaza Bul</Link></li>
                  <span></span>
                  <li className="profileInfoItem"><Link to="/">Yardım</Link></li>
                  <span></span>
                  {!user && <li className="profileInfoItem"><Link to="/Register">Bize Katıl</Link></li>}
                  {!user && <span></span>}
                  {(user) ? (
                    <li className="profileInfoItemForIcon"><Link to="/profile"><p>Merhaba,{user.name}</p><FiUser className="icon" /></Link></li>
                  ) : (
                    <li className="profileInfoItem"><Link to="/Login">Oturum Aç</Link></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
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
                  <li className="navItem">
                    <Link to="/shop" className="shopLink">Yeni ve Öne Çıkanlar</Link>
                    <div className="submenu_container">
                      <div className="submenu">
                        <ul>
                          <li>
                            <Link>Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>Yeni Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Yeni giysiler</Link>
                          </li>
                          <li>
                            <Link>SNKRS lansman takvimi</Link>
                          </li>
                          <li>
                            <Link>Üye mağazası</Link>
                          </li>
                          <li>
                            <Link>Okula dönüş</Link>
                          </li>
                          <li>
                            <Link>En çok satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>İkonik modelleri incele</Link>
                          </li>
                          <li>
                            <Link>Air Force1</Link>
                          </li>
                          <li>
                            <Link>Air Jordan1</Link>
                          </li>
                          <li>
                            <Link>Air max</Link>
                          </li>
                          <li>
                            <Link>Dunk</Link>
                          </li>
                          <li>
                            <Link>Blazer</Link>
                          </li>
                          <li>
                            <Link>Pegasus</Link>
                          </li>
                          <li>
                            <Link>Mercurial</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>En iyi makaleler</Link>
                          </li>
                          <li>
                            <Link>.Swoosh</Link>
                          </li>
                          <li>
                            <Link>Jordan kolleksiyonu</Link>
                          </li>
                          <li>
                            <Link>Nike SB- Vault</Link>
                          </li>
                          <li>
                            <Link>Sürdürebilirlik</Link>
                          </li>
                          <li>
                            <Link>Nike makaleleri</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="navItem" to="/shop">
                    <Link to="/shop" className="shopLink">Erkek</Link>
                    <div className="submenu_container">
                      <div className="submenu">
                        <ul>
                          <li>
                            <Link>Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>Yeni Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>SNKRS Lansman Takvimi</Link>
                          </li>
                          <li>
                            <Link>Milli Takım Formaları</Link>
                          </li>
                          <li>
                            <Link>Okula Dönüş</Link>
                          </li>
                          <li>
                            <Link>En Çok Satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Tüm Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Günlük Giyim</Link>
                          </li>
                          <li>
                            <Link>Jordan</Link>
                          </li>
                          <li>
                            <Link>Koşu</Link>
                          </li>
                          <li>
                            <Link>Futbol</Link>
                          </li>
                          <li>
                            <Link>Basketbol</Link>
                          </li>
                          <li>
                            <Link>Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link>Kaykay</Link>
                          </li>
                          <li>
                            <Link>Nike By You</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Giysiler</Link>
                          </li>
                          <li>
                            <Link>Tüm Giyim</Link>
                          </li>
                          <li>
                            <Link>Üstler ve Tişörtler</Link>
                          </li>
                          <li>
                            <Link>Kapüşonlu Üstler ve Sweatshirt'ler</Link>
                          </li>
                          <li>
                            <Link>Şortlar</Link>
                          </li>
                          <li>
                            <Link>Eşofman Altları ve Taytlar</Link>
                          </li>
                          <li>
                            <Link>Eşofmanlar </Link>
                          </li>
                          <li>
                            <Link>Eşofman Üstleri</Link>
                          </li>
                          <li>
                            <Link>Takımlar ve Formalar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Spora Göre İncele</Link>
                          </li>
                          <li>
                            <Link>Tüm Sporlar</Link>
                          </li>
                          <li>
                            <Link>Koşu</Link>
                          </li>
                          <li>
                            <Link>Futbol</Link>
                          </li>
                          <li>
                            <Link>Basketbol</Link>
                          </li>
                          <li>
                            <Link>Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link>Tenis</Link>
                          </li>
                          <li>
                            <Link>Golf</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link>Tüm Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link>Çantalar ve Sırt Çantaları</Link>
                          </li>
                          <li>
                            <Link>Çoraplar </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="navItem" to="/shop">
                    <Link to="/shop" className="shopLink">Kadın</Link>
                    <div className="submenu_container">
                      <div className="submenu">
                        <ul>
                          <li>
                            <Link>Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>Yeni Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>SNKRS Lansman Takvimi</Link>
                          </li>
                          <li>
                            <Link>Milli Takım Formaları</Link>
                          </li>
                          <li>
                            <Link>Okula Dönüş</Link>
                          </li>
                          <li>
                            <Link>En Çok Satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Tüm Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Günlük Giyim</Link>
                          </li>
                          <li>
                            <Link>Jordan</Link>
                          </li>
                          <li>
                            <Link>Koşu</Link>
                          </li>
                          <li>
                            <Link>Futbol</Link>
                          </li>
                          <li>
                            <Link>Basketbol</Link>
                          </li>
                          <li>
                            <Link>Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link>Kaykay</Link>
                          </li>
                          <li>
                            <Link>Nike By You</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Giysiler</Link>
                          </li>
                          <li>
                            <Link>Tüm Giyim</Link>
                          </li>
                          <li>
                            <Link>Üstler ve Tişörtler</Link>
                          </li>
                          <li>
                            <Link>Kapüşonlu Üstler ve Sweatshirt'ler</Link>
                          </li>
                          <li>
                            <Link>Şortlar</Link>
                          </li>
                          <li>
                            <Link>Eşofman Altları ve Taytlar</Link>
                          </li>
                          <li>
                            <Link>Eşofmanlar </Link>
                          </li>
                          <li>
                            <Link>Eşofman Üstleri</Link>
                          </li>
                          <li>
                            <Link>Takımlar ve Formalar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Spora Göre İncele</Link>
                          </li>
                          <li>
                            <Link>Tüm Sporlar</Link>
                          </li>
                          <li>
                            <Link>Koşu</Link>
                          </li>
                          <li>
                            <Link>Futbol</Link>
                          </li>
                          <li>
                            <Link>Basketbol</Link>
                          </li>
                          <li>
                            <Link>Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link>Tenis</Link>
                          </li>
                          <li>
                            <Link>Golf</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link>Tüm Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link>Çantalar ve Sırt Çantaları</Link>
                          </li>
                          <li>
                            <Link>Çoraplar </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="navItem" to="/shop">
                    <Link to="/shop" className="shopLink">Çocuk</Link>
                    <div className="submenu_container">
                      <div className="submenu">
                        <ul>
                          <li>
                            <Link>Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>Yeni Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>SNKRS Lansman Takvimi</Link>
                          </li>
                          <li>
                            <Link>Milli Takım Formaları</Link>
                          </li>
                          <li>
                            <Link>Okula Dönüş</Link>
                          </li>
                          <li>
                            <Link>En Çok Satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Tüm Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Günlük Giyim</Link>
                          </li>
                          <li>
                            <Link>Jordan</Link>
                          </li>
                          <li>
                            <Link>Koşu</Link>
                          </li>
                          <li>
                            <Link>Futbol</Link>
                          </li>
                          <li>
                            <Link>Basketbol</Link>
                          </li>
                          <li>
                            <Link>Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link>Kaykay</Link>
                          </li>
                          <li>
                            <Link>Nike By You</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Giysiler</Link>
                          </li>
                          <li>
                            <Link>Tüm Giyim</Link>
                          </li>
                          <li>
                            <Link>Üstler ve Tişörtler</Link>
                          </li>
                          <li>
                            <Link>Kapüşonlu Üstler ve Sweatshirt'ler</Link>
                          </li>
                          <li>
                            <Link>Şortlar</Link>
                          </li>
                          <li>
                            <Link>Eşofman Altları ve Taytlar</Link>
                          </li>
                          <li>
                            <Link>Eşofmanlar </Link>
                          </li>
                          <li>
                            <Link>Eşofman Üstleri</Link>
                          </li>
                          <li>
                            <Link>Takımlar ve Formalar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Yaşa göre çocuk</Link>
                          </li>
                          <li>
                            <Link>Genç Çocuk (7 - 15 yaş)</Link>
                          </li>
                          <li>
                            <Link>Küçük Çocuk (3 - 7 yaş)</Link>
                          </li>
                          <li>
                            <Link>Bebek (0-3 yaş)</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link>Tüm Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link>Çantalar ve Sırt Çantaları</Link>
                          </li>
                          <li>
                            <Link>Çoraplar </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="navItem" to="/shop">
                    <Link to="/shop" className="shopLink">İndirim</Link>
                    <div className="submenu_container">
                      <div className="submenu">
                        <ul>
                          <li>
                            <Link>Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link>Tüm İndirimli Ürünleri İncele </Link>
                          </li>
                          <li>
                            <Link>En Çok Satanlar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Erkekler İçin İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link>Tüm İndirimli Erkek Ürünlerini İncele</Link>
                          </li>
                          <li>
                            <Link>Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Giysiler</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Kadınlar İçin İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link>Tüm İndirimli Kadın Ürünlerini İncele</Link>
                          </li>
                          <li>
                            <Link>Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Giysiler</Link>
                          </li>
                          <li>
                            <Link>Sürdürebilirlik</Link>
                          </li>
                          <li>
                            <Link>Nike makaleleri</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Çocuklar İçin İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link>Tüm İndirimli Çocuk Ürünlerini İncele </Link>
                          </li>
                          <li>
                            <Link>Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link>Giysiler</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link>Spora Göre İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link>Koşu</Link>
                          </li>
                          <li>
                            <Link>Futbol</Link>
                          </li>
                          <li>
                            <Link>Spor Salonu ve Antrenman</Link>
                          </li>
                          <li>
                            <Link>Basketbol</Link>
                          </li>
                          <li>
                            <Link>Tenis</Link>
                          </li>
                          <li>
                            <Link>Golf</Link>
                          </li>
                          <li>
                            <Link>Yoga</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mobileMenu">
              <button>
                <MobileMenu className="hamburgerMenu" />
              </button>
            </div>
            <div
              className={`operation ${isSearchOpen ? "visible_operation_box" : ""
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
                  className={`searchResultsBox ${isSearchOpen ? "visible" : "hidden"
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
                  <p className="count">{cartSum}</p>
                </Link>
                {showCartBox && cart.length > 0 && (
                  location.pathname !== "/cart" && (
                    <div id="cart_box" >
                      <h6><Checked className="checkedİcon" />Sepete Eklendi</h6>
                      {
                        <div className="cardArea" key={cart[cart.length - 1].id}>
                          <div className="card">
                            <div className="cardImg">
                              <img src={`http://localhost:5000/${cart[cart.length - 1].productImage}`} alt={cart[cart.length - 1].name} />
                            </div>
                            <div className="cardInfo">
                              <h5>{cart[cart.length - 1].name}</h5>
                              <p className="productType">{cart[cart.length - 1].type}</p>
                              <p className="productPrice">₺ {cart[cart.length - 1].price}</p>
                              <span className="productQuantity">Adet: {cart[cart.length - 1].quantity}</span>
                            </div>
                          </div>
                        </div>
                      }
                      <div className="cartBtn">
                        <Link to="/cart">Sepeti Görüntüle({cartSum})</Link>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
