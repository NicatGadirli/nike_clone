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
              <Link to="/">Golf Ayakkabıları</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Kışlık Spor Ayakkabı</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Gore Tex Spor Ayakkabı</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Yürüyüş Ayakkabısı</Link>
            </li>
          </ul>
          <ul className="merchMenuList">
            <h4>Giysiler</h4>
            <li className="merchMenuItem">
              <Link to="/">Tüm Giysiler</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Yoga Eşofman Altları</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Tech Fleece Ayakkabı</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Tech Fleece Pantolon</Link>
            </li>
          </ul>
          <ul className="merchMenuList">
            <h4>Çocuk</h4>
            <li className="merchMenuItem">
              <Link to="/">Çocuk Terlik</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Çocuk Eşofman İndirimi</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Çocuk Şişme Mont</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Üstler ve Tişörtler</Link>
            </li>
          </ul>
          <ul className="merchMenuList">
            <h4>Öne Çıkanlar</h4>
            <li className="merchMenuItem">
              <Link to="/">Futbol Takımları</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Futbol</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Nike Run Club</Link>
            </li>
            <li className="merchMenuItem">
              <Link to="/">Nike Training Club</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MerchMenu;
