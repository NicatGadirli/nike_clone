// Router
import { Link } from "react-router-dom";

// Icons
import { FiUser } from "react-icons/fi";

// Svg
import { ReactComponent as Man } from "../assets/Images/svg/Man.svg";

const TopHeader = () => {
  return (
    <header className="topHeader">
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
              <Link to="">Merhaba,Nicat</Link>
            </div>
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
    </header>
  );
};

export default TopHeader;
