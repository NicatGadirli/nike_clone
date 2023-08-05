//Db
import explore from "../../db/explore";


// Router
import { Link } from "react-router-dom";

//Svg
import { ReactComponent as Eye } from "../../assets/Images/svg/Eye.svg";

const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <div className="exploreTitle">
          <h3>Daha Fazlasını Keşfet</h3>
        </div>
        <div className="row">
          {explore.map((item) => (
            <div className="card" key={item.id}>
              <div className="cardImg">
                <img src={item.img} alt="Explore" />
              </div>
              <div className="cardBtn">
                <button>
                  <Link className="modelBtn">{item.model}</Link>
                </button>
                <button>
                  <span className="rewievBtn">
                    <span className="eyeIconBox">
                      <Eye className="eye" />
                    </span>
                    Stili İncele
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
