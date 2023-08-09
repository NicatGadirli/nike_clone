// Router
import { Link } from "react-router-dom";

//NikePhoto
import Nike from "../assets/Images/login/Nike.png";

//
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

//Navigate
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Auth } from "../utils/Auth";

const Login = () => {
  // Navigate
  const navigate = useNavigate();

  const { setToken } = useContext(Auth)

  //UseState
  const [userData, setUserData] = useState({})

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name

    setUserData({ ...userData, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(process.env.REACT_APP_LOGIN, userData)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token))
          setToken(res.data.token)
          navigate("/")
        }
      }).catch((err) => {
        console.log(err);
      })
  }


  //Router
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <div className="top">
            <div className="loginEnter">
              <div className="logo">
                <img src={Nike} alt="Logo" />
              </div>
              <div className="title">NIKE'A DAİR HER ŞEY İÇİN HESABIN</div>
            </div>
            <form>
              <div className="userBox">
                <input type="email"
                  name="email"
                  placeholder="E-posta adresi"
                  onChange={handleChange}
                />
              </div>
              <div className="userBox">
                <input
                  type="password"
                  name="password"
                  placeholder="Şifre"
                  onChange={handleChange}
                />
              </div>
              <div className="info">
                <div className="middle">
                  <div className="checkBox">
                    <input type="checkbox" />
                    Oturumum açık kalsın
                  </div>
                  <div className="forgotPassword">
                    <Link to="/forgot-password">Şifreni mi unuttun?</Link>
                  </div>
                </div>
                <div className="bottom">
                  <p>
                    Oturum açarak Nike'ın <span>Gizlilik Politikası</span> 'nı ve
                    <br />
                    <span>Kullanım Şartları</span> 'nı kabul etmiş olursun.
                  </p>
                </div>
                <div className="operation">
                  <button type="submit" onClick={handleSubmit}>OTURUM AÇ</button>
                </div>
                <div className="membership">
                  <p>
                    Üye değil misin?<Link to="/Register">Bize Katıl.</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
