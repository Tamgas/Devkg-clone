import "./header.css";
import img1 from "../../images/logo.458f2cd.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <header className="header">
          <Link to="/">
            <img className="header-title" src={img1} alt="" />
          </Link>
          <nav className="header-nav">
            <Link to="/vacancies">Вакансии</Link>
            <Link to="/events">Мероприятия</Link>
            <Link to="/videos">Видео</Link>
            <Link to="/organizations">Организации</Link>
            <Link to="/community">Сообщество</Link>
          </nav>
          <button className="header-btn">Войти</button>
        </header>
      </div>
    </>
  );
}

export default Header;
