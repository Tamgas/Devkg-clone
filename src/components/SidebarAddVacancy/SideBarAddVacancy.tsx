import "./SideBarAddVacancy.scss";
import logosidebar from "../../assets/sidebarlogo.svg";
import { Link } from "react-router-dom";
function SideBarAddVacancy() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__content">
          <div className="sidebar__content-logo__wrap">
            <img src={logosidebar} alt="" />
          </div>
          <div className="sidebar__content__links">
            <Link to="" className="sidebar__content__links__link">
              Вакансии
            </Link>
            <Link to="" className="sidebar__content__links__link">
              Мероприятия
            </Link>
            <Link to="" className="sidebar__content__links__link">
              Видео
            </Link>
          </div>
          <Link className="sidebar__content__back" to="/">
            Выйти
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBarAddVacancy;
