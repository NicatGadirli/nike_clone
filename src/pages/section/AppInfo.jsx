// Router
import { Link } from "react-router-dom";

//Db
import appInfo from "../../db/appInfo";

const AppInfo = () => {
  return (
    <section className="appInfo">
      <div className="container">
        <div className="appInfoTitle">
          <h3>Uygulamalarımızı Keşfet</h3>
        </div>
        <div className="row">
          {appInfo.map((item) => (
            <span key={item.id}>
              <div className="card" >
                <div className="cardImg">
                  <img src={item.img} alt="exerciseimg" />
                </div>
                <div className="cardInfo">
                  <p>{item.title}</p>
                  <button>
                    <Link>{item.btn}</Link>
                  </button>
                </div>
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
