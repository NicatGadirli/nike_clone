//Img
import ExploreFirstImg from "../assets/Images/848342cf-4d8a-4d8e-8070-4634fc37726a.webp";
import ExploreSecondImg from "../assets/Images/4d82f0bd-fc7f-4fed-b259-d9967b98a88c.webp";
import ExploreThirdImg from "../assets/Images/ec4db1b0-e895-4c9e-a7ce-70828a2e6fae.webp";

// Router
import { Link } from "react-router-dom";

//Svg
import { ReactComponent as Eye } from "../assets/Images/svg/Eye.svg";

const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <div className="exploreTitle">
          <h3>Daha Fazlasını Keşfet</h3>
        </div>
        <div className="row">
          <div className="card">
            <div className="cardImg">
              <img src={ExploreFirstImg} alt="Explore" />
            </div>
            <div className="cardBtn">
              <button>
                <Link className="genderBtn">Kadın</Link>
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
          </div>{" "}
          <div className="card">
            <div className="cardImg">
              <img src={ExploreSecondImg} alt="Explore" />
            </div>
            <div className="cardBtn">
              <button>
                <Link className="genderBtn">Erkek</Link>
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
          </div>{" "}
          <div className="card">
            <div className="cardImg">
              <img src={ExploreThirdImg} alt="Explore" />
            </div>
            <div className="cardBtn">
              <button>
                <Link className="genderBtn">Çoçuk</Link>
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
        </div>
      </div>
    </section>
  );
};

export default Explore;
