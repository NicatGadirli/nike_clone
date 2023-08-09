import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//NikePhoto
import Nike from "../assets/Images/login/Nike.png";

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const OtpConfirmation = () => {
    const [otp, setOtp] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post(process.env.REACT_APP_VERIFY_OTP_CODE, { otp }).then((res) => {
            if (res.status === 200) {
                navigate("/reset-password")
            }
        }).catch((err) => {
            console.log(err);
            navigate("/error")
        })
    }


    return (
        <section className="forgotPassword">
            <div className="container">
                <div className="row">
                    <div className="top">
                        <div className="forgotPasswordEnter">
                            <div className="logo">
                                <img src={Nike} alt="Logo" />
                            </div>
                            <div className="title">OTP-CONFIRMATION</div>
                            <div className="forgotPasswordInfo">
                                E-posta adresine gelen otp kodu gir,şifreni yenile.
                            </div>
                        </div>
                        <form>
                            <div className="userBox">
                                <input type="email"
                                    name="email"
                                    placeholder="OTP Kodunu girin."
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <div className="info">
                                <div className="operation">
                                    <button type="submit" onClick={handleSubmit}>DEVAM ET</button>
                                </div>
                                <div className="membership">
                                    <p>
                                        Alternatif olarak geri dön:<Link to="/login">Oturum Aç.</Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    )
}

export default OtpConfirmation