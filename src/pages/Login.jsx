// Router
import { Link } from "react-router-dom";

//Photo
import Nike from "../assets/Images/login/Nike.png";


const Login = () => {
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
                <input type="email" name="email" placeholder="E-posta adresi" />
                {/* <span>Lütfen geçerli bir e-posta adresi gir.</span> */}
              </div>
              <div className="userBox">
                <input type="password" name="password" placeholder="Şifre" />
                {/* <span>Lütfen bir şifre gir.</span> */}
              </div>
            </form>
          </div>
          <div className="info">
            <div className="middle">
              <div className="checkBox">
                <input type="checkbox" />
                Oturumum açık kalsın
              </div>
              <div className="forgotPassword">
                <Link to="/">Şifreni mi unuttun?</Link>
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
              <button type="submit">OTURUM AÇ</button>
            </div>
            <div className="membership">
              <p>
                Üye değil misin?<Link to="/Register">Bize Katıl.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
