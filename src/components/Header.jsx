// Router
import { Link, useLocation } from "react-router-dom";

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
import { ReactComponent as HamburgerMenu } from "../assets/Images/svg/HamburgerMenu.svg";
import { ReactComponent as Close } from "../assets/Images/svg/Close.svg";
import { ReactComponent as ChevronRight } from "../assets/Images/svg/ChevronRight.svg";
import { ReactComponent as Help } from "../assets/Images/svg/Help.svg";
import { ReactComponent as Store } from "../assets/Images/svg/Store.svg";
import { ReactComponent as Box } from "../assets/Images/svg/Box.svg";

//Auth
import { Auth } from "../utils/Auth";

const Header = () => {
  //?Global States
  const { cart, cartSum } = useContext(Context);
  const { user, token } = useContext(Auth)

  //?Local States
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [showCartBox, setShowCartBox] = useState(true);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const location = useLocation();


  //?SearchBox
  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };


  const handleCancelSearch = () => {
    setSearchOpen(false);
  };
  //?SearchBox



  //? CartBox Visiblity
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
  //? CartBox Visiblity


  //?scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //?scroll


  //? Menu Open
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //? Menu Open


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
                  {!token && <li className="profileInfoItem"><Link to="/Register">Bize Katıl</Link></li>}
                  {!token && <span></span>}
                  {token ? (
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
      <header className={`header ${isHeaderFixed ? "fixed" : ""}`}>
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
                            <Link to="/">Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Yeni Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Yeni giysiler</Link>
                          </li>
                          <li>
                            <Link to="/">SNKRS lansman takvimi</Link>
                          </li>
                          <li>
                            <Link to="/">Üye mağazası</Link>
                          </li>
                          <li>
                            <Link to="/">Okula dönüş</Link>
                          </li>
                          <li>
                            <Link to="/">En çok satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">İkonik modelleri incele</Link>
                          </li>
                          <li>
                            <Link to="/">Air Force1</Link>
                          </li>
                          <li>
                            <Link to="/">Air Jordan1</Link>
                          </li>
                          <li>
                            <Link to="/">Air max</Link>
                          </li>
                          <li>
                            <Link to="/">Dunk</Link>
                          </li>
                          <li>
                            <Link to="/">Blazer</Link>
                          </li>
                          <li>
                            <Link to="/">Pegasus</Link>
                          </li>
                          <li>
                            <Link to="/">Mercurial</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">En iyi makaleler</Link>
                          </li>
                          <li>
                            <Link to="/">.Swoosh</Link>
                          </li>
                          <li>
                            <Link to="/">Jordan kolleksiyonu</Link>
                          </li>
                          <li>
                            <Link to="/">Nike SB- Vault</Link>
                          </li>
                          <li>
                            <Link to="/">Sürdürebilirlik</Link>
                          </li>
                          <li>
                            <Link to="/">Nike makaleleri</Link>
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
                            <Link to="/">Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Yeni Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">SNKRS Lansman Takvimi</Link>
                          </li>
                          <li>
                            <Link to="/">Milli Takım Formaları</Link>
                          </li>
                          <li>
                            <Link to="/">Okula Dönüş</Link>
                          </li>
                          <li>
                            <Link to="/">En Çok Satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Günlük Giyim</Link>
                          </li>
                          <li>
                            <Link to="/">Jordan</Link>
                          </li>
                          <li>
                            <Link to="/">Koşu</Link>
                          </li>
                          <li>
                            <Link to="/">Futbol</Link>
                          </li>
                          <li>
                            <Link to="/">Basketbol</Link>
                          </li>
                          <li>
                            <Link to="/">Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link to="/">Kaykay</Link>
                          </li>
                          <li>
                            <Link to="/">Nike By You</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Giysiler</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Giyim</Link>
                          </li>
                          <li>
                            <Link to="/">Üstler ve Tişörtler</Link>
                          </li>
                          <li>
                            <Link to="/">Kapüşonlu Üstler ve Sweatshirt'ler</Link>
                          </li>
                          <li>
                            <Link to="/">Şortlar</Link>
                          </li>
                          <li>
                            <Link to="/">Eşofman Altları ve Taytlar</Link>
                          </li>
                          <li>
                            <Link to="/">Eşofmanlar </Link>
                          </li>
                          <li>
                            <Link to="/">Eşofman Üstleri</Link>
                          </li>
                          <li>
                            <Link to="/">Takımlar ve Formalar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Spora Göre İncele</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Sporlar</Link>
                          </li>
                          <li>
                            <Link to="/">Koşu</Link>
                          </li>
                          <li>
                            <Link to="/">Futbol</Link>
                          </li>
                          <li>
                            <Link to="/">Basketbol</Link>
                          </li>
                          <li>
                            <Link to="/">Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link to="/">Tenis</Link>
                          </li>
                          <li>
                            <Link to="/">Golf</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Çantalar ve Sırt Çantaları</Link>
                          </li>
                          <li>
                            <Link to="/">Çoraplar </Link>
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
                            <Link to="/">Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Yeni Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">SNKRS Lansman Takvimi</Link>
                          </li>
                          <li>
                            <Link to="/">Milli Takım Formaları</Link>
                          </li>
                          <li>
                            <Link to="/">Okula Dönüş</Link>
                          </li>
                          <li>
                            <Link to="/">En Çok Satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Günlük Giyim</Link>
                          </li>
                          <li>
                            <Link to="/">Jordan</Link>
                          </li>
                          <li>
                            <Link to="/">Koşu</Link>
                          </li>
                          <li>
                            <Link to="/">Futbol</Link>
                          </li>
                          <li>
                            <Link to="/">Basketbol</Link>
                          </li>
                          <li>
                            <Link to="/">Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link to="/">Kaykay</Link>
                          </li>
                          <li>
                            <Link to="/">Nike By You</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Giysiler</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Giyim</Link>
                          </li>
                          <li>
                            <Link to="/">Üstler ve Tişörtler</Link>
                          </li>
                          <li>
                            <Link to="/">Kapüşonlu Üstler ve Sweatshirt'ler</Link>
                          </li>
                          <li>
                            <Link to="/">Şortlar</Link>
                          </li>
                          <li>
                            <Link to="/">Eşofman Altları ve Taytlar</Link>
                          </li>
                          <li>
                            <Link to="/">Eşofmanlar </Link>
                          </li>
                          <li>
                            <Link to="/">Eşofman Üstleri</Link>
                          </li>
                          <li>
                            <Link to="/">Takımlar ve Formalar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Spora Göre İncele</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Sporlar</Link>
                          </li>
                          <li>
                            <Link to="/">Koşu</Link>
                          </li>
                          <li>
                            <Link to="/">Futbol</Link>
                          </li>
                          <li>
                            <Link to="/">Basketbol</Link>
                          </li>
                          <li>
                            <Link to="/">Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link to="/">Tenis</Link>
                          </li>
                          <li>
                            <Link to="/">Golf</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Çantalar ve Sırt Çantaları</Link>
                          </li>
                          <li>
                            <Link to="/">Çoraplar </Link>
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
                            <Link to="/">Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Yeni Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">SNKRS Lansman Takvimi</Link>
                          </li>
                          <li>
                            <Link to="/">Milli Takım Formaları</Link>
                          </li>
                          <li>
                            <Link to="/">Okula Dönüş</Link>
                          </li>
                          <li>
                            <Link to="/">En Çok Satanlar</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Günlük Giyim</Link>
                          </li>
                          <li>
                            <Link to="/">Jordan</Link>
                          </li>
                          <li>
                            <Link to="/">Koşu</Link>
                          </li>
                          <li>
                            <Link to="/">Futbol</Link>
                          </li>
                          <li>
                            <Link to="/">Basketbol</Link>
                          </li>
                          <li>
                            <Link to="/">Antrenman ve Spor Salonu</Link>
                          </li>
                          <li>
                            <Link to="/">Kaykay</Link>
                          </li>
                          <li>
                            <Link to="/">Nike By You</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Giysiler</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Giyim</Link>
                          </li>
                          <li>
                            <Link to="/">Üstler ve Tişörtler</Link>
                          </li>
                          <li>
                            <Link to="/">Kapüşonlu Üstler ve Sweatshirt'ler</Link>
                          </li>
                          <li>
                            <Link to="/">Şortlar</Link>
                          </li>
                          <li>
                            <Link to="/">Eşofman Altları ve Taytlar</Link>
                          </li>
                          <li>
                            <Link to="/">Eşofmanlar </Link>
                          </li>
                          <li>
                            <Link to="/">Eşofman Üstleri</Link>
                          </li>
                          <li>
                            <Link to="/">Takımlar ve Formalar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Yaşa göre çocuk</Link>
                          </li>
                          <li>
                            <Link to="/">Genç Çocuk (7 - 15 yaş)</Link>
                          </li>
                          <li>
                            <Link to="/">Küçük Çocuk (3 - 7 yaş)</Link>
                          </li>
                          <li>
                            <Link to="/">Bebek (0-3 yaş)</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm Aksesuarlar ve Ekipmanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Çantalar ve Sırt Çantaları</Link>
                          </li>
                          <li>
                            <Link to="/">Çoraplar </Link>
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
                            <Link to="/">Öne Çıkanlar</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm İndirimli Ürünleri İncele </Link>
                          </li>
                          <li>
                            <Link to="/">En Çok Satanlar </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Erkekler İçin İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm İndirimli Erkek Ürünlerini İncele</Link>
                          </li>
                          <li>
                            <Link to="/">Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Giysiler</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Kadınlar İçin İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm İndirimli Kadın Ürünlerini İncele</Link>
                          </li>
                          <li>
                            <Link to="/">Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Giysiler</Link>
                          </li>
                          <li>
                            <Link to="/">Sürdürebilirlik</Link>
                          </li>
                          <li>
                            <Link to="/">Nike makaleleri</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Çocuklar İçin İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link to="/">Tüm İndirimli Çocuk Ürünlerini İncele </Link>
                          </li>
                          <li>
                            <Link to="/">Ayakkabılar</Link>
                          </li>
                          <li>
                            <Link to="/">Giysiler</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link to="/">Spora Göre İndirimli Ürünler</Link>
                          </li>
                          <li>
                            <Link to="/">Koşu</Link>
                          </li>
                          <li>
                            <Link to="/">Futbol</Link>
                          </li>
                          <li>
                            <Link to="/">Spor Salonu ve Antrenman</Link>
                          </li>
                          <li>
                            <Link to="/">Basketbol</Link>
                          </li>
                          <li>
                            <Link to="/">Tenis</Link>
                          </li>
                          <li>
                            <Link to="/">Golf</Link>
                          </li>
                          <li>
                            <Link to="/">Yoga</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
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
              <div className="mobileMenu">
                <div className="hamburgerIcon">
                  <button id="openMenuButton" onClick={toggleMenu}>
                    <HamburgerMenu className="hamburgerMenuItem" />
                  </button>
                </div>
                <div className={`menu ${menuOpen ? '' : 'hidden'}`} id="menu">
                  <div className="closeBtn">
                    <button id="closeMenuButton" onClick={toggleMenu}>
                      <Close className="hamburgerMenuItem" />
                    </button>
                  </div>
                  <div className="top">
                    <ul className="menuList">
                      <li className="menuItem"><Link to="/shop">Yeni ve Öne Çıkanlar<ChevronRight /></Link></li>
                      <li className="menuItem"><Link to="/shop">Erkek<ChevronRight /></Link></li>
                      <li className="menuItem"><Link to="/shop">Kadın<ChevronRight /></Link></li>
                      <li className="menuItem"><Link to="/shop">Çocuk<ChevronRight /></Link></li>
                      <li className="menuItem"><Link to="/shop">İndirim<ChevronRight /></Link></li>
                    </ul>
                    <div className="jordan"><Man />Jordan</div>
                  </div>
                  <div className="middle">
                    <div className="middleInfo">
                      <p>Nike'ın en iyi ürünlerine, ilham verici içeriklere ve spor hakkında hikayelere erişmek için Nike Üyesi ol. </p>
                      <Link to="/">Daha fazla bilgi edin</Link>
                    </div>
                    <div className="middleBtn">
                      <button><Link to="/register">Bize Katıl</Link></button>
                      <button className="loginBtn"><Link to="/login">Oturum Aç</Link></button>
                    </div>
                  </div>
                  <div className="bottom">
                    <ul className="bottomList">
                      <li className="bottomListItem"><Link to="/cart"><Cart /> Sepet</Link></li>
                      <li className="bottomListItem"><Link to="/"><Box />Siparişler</Link></li>
                      <li className="bottomListItem"><Link to="/"><Store />Mağaza</Link></li>
                      <li className="bottomListItem"><Link to="/"><Help />Yardım</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
