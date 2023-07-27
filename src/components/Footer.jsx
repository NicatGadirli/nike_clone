// Router
import { Link } from "react-router-dom";

//Svg Files
import { ReactComponent as Twitter } from "../assets/Images/svg/Twitter.svg";
import { ReactComponent as Facebook } from "../assets/Images/svg/Facebook.svg";
import { ReactComponent as Youtube } from "../assets/Images/svg/Youtube.svg";
import { ReactComponent as Instagram } from "../assets/Images/svg/Instagram.svg";
import { ReactComponent as Location } from "../assets/Images/svg/Location.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="topFooter">
            <div className="leftFooter">
              <ul className="findStore">
                <p>
                  <strong>
                    <Link>MAĞAZA BUL</Link>
                  </strong>
                </p>
                <li>
                  <strong>
                    <Link>NIKE JOURNAL</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link>ÜYE OL</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link>GERİ BİLDİRİM</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link>PROMOSYON KODLARI</Link>
                  </strong>
                </li>
              </ul>
              <ul className="aboutFooter">
                <p>
                  <Link className="footerLinkBtn">YARDIM AL</Link>
                </p>
                <li>
                  <Link>Sipariş Durumu</Link>
                </li>
                <li>
                  <Link>Kargo ve Teslimat</Link>
                </li>
                <li>
                  <Link>İadeler</Link>
                </li>
                <li>
                  <Link>Ödeme Seçenekleri</Link>
                </li>
                <li>
                  <Link>Bize Ulaşın</Link>
                </li>
              </ul>
              <ul className="aboutFooter">
                <p>
                  <Link className="footerLinkBtn">NIKE HAKKINDA</Link>
                </p>
                <li>
                  <Link>Haberler</Link>
                </li>
                <li>
                  <Link>Kariyer</Link>
                </li>
                <li>
                  <Link>Yatırımcılar</Link>
                </li>
                <li>
                  <Link>Sürdürülebilirlik</Link>
                </li>
              </ul>
              <ul className="aboutFooter">
                <p>
                  <Link className="footerLinkBtn">BIZE KATIL</Link>
                </p>
                <li>
                  <Link>Nike App</Link>
                </li>
                <li>
                  <Link>Nike Run Club</Link>
                </li>
                <li>
                  <Link>Nike Training Club</Link>
                </li>
                <li>
                  <Link>SNKRS</Link>
                </li>
              </ul>
            </div>
            <div className="rightFooter">
              <Link>
                <Twitter className="icon" />
              </Link>
              <Link>
                <Facebook className="icon" />
              </Link>
              <Link>
                <Youtube className="icon" />
              </Link>
              <Link>
                <Instagram className="icon" />
              </Link>
            </div>
          </div>
          <div className="bottomFooter">
            <div className="bottomFooterLeft">
              <Link to="/Location">
                <Location className="location" />
                Türkiye
              </Link>
              <p>
                © <span>2023</span> Nike, Inc. Tüm Hakları Saklıdır
              </p>
            </div>
            <div className="bottomFooterRight">
              <ul className="bottomFooterList">
                <li className="bottomFooterItemFirst">
                  <Link>Rehberler</Link>
                  <ul className="guideList">
                    <li className="guideListItem">
                      <Link>Nike Adapt</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike FlyEase</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Free</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Vaporfly</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>NBA Taraftar Giysileri</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Air</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Flyknit</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Pegasus</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Zoom Fly</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Airtopia</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Air Max</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike Flyleather</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike React</Link>
                    </li>
                    <li className="guideListItem">
                      <Link>Nike ZoomX</Link>
                    </li>
                  </ul>
                </li>
                <li className="bottomFooterItem">
                  <Link>Kullanım Şartları</Link>
                </li>
                <li className="bottomFooterItem">
                  <Link>Satış Şartları</Link>
                </li>
                <li className="bottomFooterItem">
                  <Link>Şirket Ayrıntıları</Link>
                </li>
                <li className="bottomFooterItem">
                  <Link>Gizlilik ve Tanımlama Bilgisi Politikası</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
