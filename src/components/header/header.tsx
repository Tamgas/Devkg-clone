import "./header.css";
import img1 from "../../image/logo.458f2cd.svg";

function Header() {
  return (
    <div className="container">
      <header className="header">
        <img className="header-title" src={img1} alt="Logo" />
        <nav className="header-nav">
          <a href="#vacancies">Вакансии</a>
          <a href="/events">Мероприятия</a>
          <a href="#videos">Видео</a>
          <a href="#organizations">Организации</a>
          <a href="#community">Сообщество</a>
        </nav>
        <button className="header-btn">Войти</button>
      </header>
    </div>
  );
}

export default Header;
