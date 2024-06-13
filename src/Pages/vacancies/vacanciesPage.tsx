import { Link } from "react-router-dom";
import Vacancy from "../../components/Vacancy/Vacancy";
import "./vacancypage.scss";
function VacanciesPage() {
  return (
    <>
      <div className="container">
        <div className="box">
          <span></span>
          <Link to="/Addvacancy" className="btn__add__vacancy">
            Добовить вакансию
          </Link>
        </div>
        <Vacancy />
      </div>
    </>
  );
}

export default VacanciesPage;
