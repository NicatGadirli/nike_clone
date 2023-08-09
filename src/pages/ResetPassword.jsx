//NikePhoto
import Nike from "../assets/Images/login/Nike.png";


import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Auth } from "../utils/Auth";


const ResetPasword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const {email}=useContext(Auth)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setPasswordsMatch(false);
      return;
    } else {
      await axios.post(process.env.REACT_APP_CHANGE_PASSWORD, {
        email,
        password,
      }).then(res => {
        console.log(res);
        navigate("/login")
      }).catch(err => {
        console.log(err);
      })
    }
  };

  return (
    <section className="resetPassword">
      <div className="container">
        <div className="row">
          <div className="resetPasswordEnter">
            <div className="logo">
              <img src={Nike} alt="Logo" />
            </div>
          </div>
          <form>
            <div className="userBox">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="userBox">
              <input
                type="password"
                name="repassword"
                placeholder="RePassword"
                onChange={(e) => setRePassword(e.target.value)}
              />
              {!passwordsMatch && <span>Şifreler Uyuşmuyor.</span>}
            </div>
            <div className="btnBox">
              <button type="submit" className="btn" onClick={handleSubmit}>
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasword;
