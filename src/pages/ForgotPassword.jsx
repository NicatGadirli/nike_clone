// Router
import { Link, useNavigate } from "react-router-dom";

//NikePhoto
import Nike from "../assets/Images/login/Nike.png";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//React Hook Form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const ForgotPassword = () => {
    const navigate = useNavigate()

    // Schema
    const registerSchema = object({
        email: string().required("Lütfen geçerli bir e-posta adresi gir.").trim().email(),
    });

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(registerSchema) });

    const onSubmit = async (data) => {
        await axios
            .post(process.env.REACT_APP_SEND_RESET_LINK, { email: data.email })
            .then((res) => {
                if (res.status === 200) {
                    toast.info(res.data, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    navigate("/otp-confirmation")
                }
            })
            .catch((err) => {
                console.log(err)
                console.log("Error response:", err.response);
                console.log("Error message:", err.message);
                toast.warn(err.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    };
    return (
        <section className="forgotPassword">
            <div className="container">
                <div className="row">
                    <div className="top">
                        <div className="forgotPasswordEnter">
                            <div className="logo">
                                <img src={Nike} alt="Logo" />
                            </div>
                            <div className="title">ŞİFRENİ Mİ UNUTTUN?</div>
                            <div className="forgotPasswordInfo">
                                E-posta adresini gir; şifre sıfırlama talimatlarını sana e-posta ile gönderelim.
                            </div>
                        </div>
                        <form
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className="userBox">
                                <input type="email"
                                    name="email"
                                    placeholder="E-posta adresi"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <div className="error-message">{errors.email.message}</div>
                                )}
                            </div>
                            <div className="info">
                                <div className="operation">
                                    <button type="submit" onClick={handleSubmit}>SIFIRLA</button>
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

export default ForgotPassword