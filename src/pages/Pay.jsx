import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <section class="login-main-wrapper">
            <div class="main-container">
                <div class="login-process">
                    <div class="login-main-container">
                        <div class="thankyou-wrapper">
                            <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                            <p>Tekrar görüşmek dileğiyle kendine iyi bak.</p>
                            <Link to="/">Ana Sayfa</Link>
                            <div class="clr"></div>
                        </div>
                        <div class="clr"></div>
                    </div>
                </div>
                <div class="clr"></div>
            </div>
        </section>
    )
}

export default Pay;