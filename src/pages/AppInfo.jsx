// Router
import { Link } from "react-router-dom";

//Photo
import AppInfoFirstImg from "../assets/Images/e423b40b-3a65-45ba-b1d3-342fdf41e0d4.webp";
import AppInfoSecondImg from "../assets/Images/a0b79318-bf01-40fa-b02f-dda7159aa5fe.webp";

const AppInfo = () => {
  return (
    <section className="appInfo">
      <div className="container">
        <div className="appInfoTitle">
          <h3>Uygulamalarımızı Keşfet</h3>
        </div>
        <div className="row">
          <Link>
            <div className="card">
              <div className="cardImg">
                <img src={AppInfoFirstImg} alt="" />
              </div>
              <div className="cardInfo">
                <p>Seni Neyin Harekete Geçirdiğini Keşfet</p>
                <button>
                  <p>Nike App</p>
                </button>
              </div>
            </div>
          </Link>
          <Link>
            <div className="card">
              <div className="cardImg">
                <img src={AppInfoSecondImg} alt="" />
              </div>
              <div className="cardInfo">
                <p>
                  Yüzlerce Antrenman, Nefes Çalışması
                  <br />
                  ve Daha Fazlası
                </p>
                <button>
                  <p>Nike Training Club</p>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
