import { Link } from "react-router-dom";
import "./event.css";
function Event() {
  return (
    <div className="event">
      <div className="container">
        <div className="event__content">
          <Link to="" className="event__content-logo">
            Последние мероприятия
          </Link>
          <div className="event__content-block">
            <div className="event__content-title">
              <div className="event__content-info">
                <h4>10 июня 2024 18:30</h4>
              </div>
              <div className="event__content__text">
                <h1>Что такое SQL и почему он нужен везде?</h1>
                <div className="event__content-text">
                  <h3 className="event__content-text">
                    Организатор <br /> Mega Lab
                  </h3>
                  <h3 className="event__content-text">
                    Локация <br />
                    Суюмбаева 123 (головной офис Mega)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
