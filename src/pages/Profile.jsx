import { Link } from "react-router-dom"

const Profile = () => {
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
                            <p>Şu Tarihten Beri Nike Üyesi: 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile