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
                    <Link to="/">MAĞAZA BUL</Link>
                  </strong>
                </p>
                <li>
                  <strong>
                    <Link to="/">NIKE JOURNAL</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/register">ÜYE OL</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/">GERİ BİLDİRİM</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/">PROMOSYON KODLARI</Link>
                  </strong>
                </li>
              </ul>
              <ul className="aboutFooter">
                <p>
                  <Link className="footerLinkBtn" to="/">
                    YARDIM AL
                  </Link>
                </p>
                <li>
                  <Link to="/">Sipariş Durumu</Link>
                </li>
                <li>
                  <Link to="/">Kargo ve Teslimat</Link>
                </li>
                <li>
                  <Link to="/">İadeler</Link>
                </li>
                <li>
                  <Link to="/">Ödeme Seçenekleri</Link>
                </li>
                <li>
                  <Link to="/">Bize Ulaşın</Link>
                </li>
              </ul>
              <ul className="aboutFooter">
                <p>
                  <Link className="footerLinkBtn" to="/">
                    NIKE HAKKINDA
                  </Link>
                </p>
                <li>
                  <Link to="/">Haberler</Link>
                </li>
                <li>
                  <Link to="/">Kariyer</Link>
                </li>
                <li>
                  <Link to="/">Yatırımcılar</Link>
                </li>
                <li>
                  <Link to="/">Sürdürülebilirlik</Link>
                </li>
              </ul>
              <ul className="aboutFooter">
                <p>
                  <Link className="footerLinkBtn" to="/register">
                    BIZE KATIL
                  </Link>
                </p>
                <li>
                  <Link to="/">Nike App</Link>
                </li>
                <li>
                  <Link to="/">Nike Run Club</Link>
                </li>
                <li>
                  <Link to="/">Nike Training Club</Link>
                </li>
                <li>
                  <Link to="/">SNKRS</Link>
                </li>
              </ul>
            </div>
            <div className="rightFooter">
              <Link to="https://twitter.com/Nike">
                <Twitter className="icon" />
              </Link>
              <Link to="https://www.facebook.com/nike/">
                <Facebook className="icon" />
              </Link>
              <Link to="https://www.youtube.com/user/NIKE">
                <Youtube className="icon" />
              </Link>
              <Link to="https://www.instagram.com/nike/">
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
                {new Date().getFullYear()}
                <span> Nike, Inc. Tüm Hakları Saklıdır ©</span>
              </p>
            </div>
            <div className="bottomFooterRight">
              <ul className="bottomFooterList">
                <li className="bottomFooterItemFirst">
                  <Link to="/">Rehberler</Link>
                  <ul className="guideList">
                    <li className="guideListItem">
                      <Link to="/">Nike Adapt</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike FlyEase</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Free</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Vaporfly</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">NBA Taraftar Giysileri</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Air</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Flyknit</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Pegasus</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Zoom Fly</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Airtopia</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Air Max</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike Flyleather</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike React</Link>
                    </li>
                    <li className="guideListItem">
                      <Link to="/">Nike ZoomX</Link>
                    </li>
                  </ul>
                </li>
                <li className="bottomFooterItem">
                  <Link to="/">Kullanım Şartları</Link>
                </li>
                <li className="bottomFooterItem">
                  <Link to="/">Satış Şartları</Link>
                </li>
                <li className="bottomFooterItem">
                  <Link to="/">Şirket Ayrıntıları</Link>
                </li>
                <li className="bottomFooterItem">
                  <Link to="/">Gizlilik ve Tanımlama Bilgisi Politikası</Link>
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
