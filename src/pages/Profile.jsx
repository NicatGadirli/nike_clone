import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../utils/Context"

const Profile = () => {
    const { user, setUser } = useContext(Context);

    return (
        <section className="profile">
            <div className="container">
                <div className="row">
                    <div className="profileListArea">
                        <ul className="profileList">
                            <li className="profileListItem">
                                <Link to="/profile">Profil</Link>
                            </li>
                            <li className="profileListItem">
                                <Link to="/profile">Gelen Kutusu</Link>
                            </li>
                            <li className="profileListItem">
                                <Link to="/cart">Sepet</Link>
                            </li>
                            <li className="profileListItem">
                                <Link to="/favorite">Favoriler</Link>
                            </li>
                            <li className="profileListItem">
                                <Link to="/profile">Ayarlar</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="profileBox">
                        <div className="profileImg">
                            <img src="" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="profileName">Nicat Gadirli</h2>
                            <h3 className="profileEmail">nicatqedir64@gmail.com</h3>
                            <p>Şu Tarihten Beri Nike Üyesi: 2023</p>
                        </div>{user.email}{user.name} {user.surname}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile