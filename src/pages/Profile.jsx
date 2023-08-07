import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../utils/Context"

const Profile = () => {
    const { user, setUser, logOut } = useContext(Context)
    //   const [currentUser, setCurrentUser] = useState(null);

    //   useEffect(() => {
    //     setCurrentUser(user);
    //   }, [user]);
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
                            <h2 className="profileName">{user.name} {user.surname}</h2>
                            <h3 className="profileEmail">{user.email}</h3>
                            <button onClick={() => logOut()}>Çıkış</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile