// Router
import { Link } from "react-router-dom";

const MerchMenu = () => {
  return (
    <section className="merchMenu">
      <div className="container">
        <div className="row">
          <ul className="merchMenuList">
            <h4>Ayakkabılar</h4>
            <li className="merchMenuItem">
              <Link>Golf Ayakkabıları</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Kışlık Spor Ayakkabı</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Gore Tex Spor Ayakkabı</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Yürüyüş Ayakkabısı</Link>
            </li>
          </ul>
          <ul className="merchMenuList">
            <h4>Giysiler</h4>
            <li className="merchMenuItem">
              <Link>Tüm Giysiler</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Yoga Eşofman Altları</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Tech Fleece Ayakkabı</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Tech Fleece Pantolon</Link>
            </li>
          </ul>
          <ul className="merchMenuList">
            <h4>Çocuk</h4>
            <li className="merchMenuItem">
              <Link>Çocuk Terlik</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Çocuk Eşofman İndirimi</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Çocuk Şişme Mont</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Üstler ve Tişörtler</Link>
            </li>
          </ul>
          <ul className="merchMenuList">
            <h4>Öne Çıkanlar</h4>
            <li className="merchMenuItem">
              <Link>Futbol Takımları</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Futbol</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Nike Run Club</Link>
            </li>
            <li className="merchMenuItem">
              <Link>Nike Training Club</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MerchMenu;
