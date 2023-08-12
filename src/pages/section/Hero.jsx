// Router
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="aboutPart">
        <p className="subtitle">Bu Yaz Senin Yazın Olacak</p>
        <h1>MÜKEMMEL SEZONUN</h1>
        <p className="heroInfo">
          Müzik kadar orijinal festival ve dans stilleriyle ritme uy.
        </p>
        <div className="heroBtnBox">
            <Link to="/">İncele</Link>
            <Link to="/">Çocuk Ürünlerini İncele</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
