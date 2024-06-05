import { FaFacebookSquare, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import footerlogo from "../../assets/logo.458f2cd.svg";
import "./footer.scss";
import { TfiGithub } from "react-icons/tfi";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <img className="footer__content-logo" src={footerlogo} alt="" />
          <div className="footer__content__info">
            <p className="footer__content__info-text">
              Мы — сообщество разработчиков Кыргызстана. Данный проект
              поддерживается и администрируется членами нашего сообщества.
            </p>
            <div className="footer__content__info__icons">
              <FaTelegramPlane size={30} />
              <FaFacebookSquare size={30} />
              <TfiGithub size={30} />
              <FaYoutube size={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
