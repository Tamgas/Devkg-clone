import { Link } from "react-router-dom";
import "./vacancy.scss";
import vacancyicon from "../../assets/c0814e899a66d41ede3aad818e921946.webp";

function Vacancy() {
  // axios
  //   .get("https://my-json-server.typicode.com/typicode/demo/posts")
  //   .then((res) => console.log(res.data));
  return (
    <>
      <div className="vacancy">
        <div className="container">
          <div className="vacancy__content">
            <Link to="" className="vacancy__content-title">
              Последние вакансии
            </Link>
            <ul className="vacancy__content__links">
              <li className="vacancy__content__links-link">
                <img
                  className="vacancy__content__links-link__icon"
                  src={vacancyicon}
                  alt=""
                />
                <div className="vacancy__content__links-link__box">
                  <div className="vacancy__content__links-link__companyname">
                    <h2 className="vacancy__content__links-link__companyname-title">
                      Компания
                    </h2>
                    <h2 className="vacancy__content__links-link__companyname-pretitle">
                      Mad Devs
                    </h2>
                  </div>
                  <div className="vacancy__content__links-link__companyname">
                    <h2 className="vacancy__content__links-link__companyname-title">
                      Должность
                    </h2>
                    <h2 className="vacancy__content__links-link__companyname-pretitle">
                      DevOps Engineer
                    </h2>
                  </div>
                  <div className="vacancy__content__links-link__companyname">
                    <h2 className="vacancy__content__links-link__companyname-title">
                      Оклад
                    </h2>
                    <h2 className="vacancy__content__links-link__companyname-pretitle">
                      1000 - 3000 USD в месяц
                    </h2>
                  </div>
                  <div className="vacancy__content__links-link__companyname">
                    <h2 className="vacancy__content__links-link__companyname-title">
                      Тип
                    </h2>
                    <h2 className="vacancy__content__links-link__companyname-pretitle">
                      Удаленная работа
                    </h2>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vacancy;
