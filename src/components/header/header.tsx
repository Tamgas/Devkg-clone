import "./header.css";
import img1 from "../../images/logo.458f2cd.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [isOpen, setisOpen] = useState<boolean>(false);
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
          <nav
            className={
              isOpen ? "header__burger-nav" : "header__burger-nav-active"
            }
          >
            <div className="header__burger-close">
              <Link to="/">
                <img className="header-title" src={img1} alt="" />
              </Link>
              <IoMdClose size={25} onClick={() => setisOpen(false)} />
            </div>
            <div className="header__burger__info">
              <Link to="/vacancies">Вакансии</Link>
              <Link to="/events">Мероприятия</Link>
              <Link to="/videos">Видео</Link>
              <Link to="/organizations">Организации</Link>
              <Link to="/community">Сообщество</Link>
            </div>
          </nav>
          <div className="header__box">
            <GiHamburgerMenu
              onClick={() => setisOpen(true)}
              className="header__burgermenu"
              size={25}
            />
            <button className="header-btn">Войти</button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
