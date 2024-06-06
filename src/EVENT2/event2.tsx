import Header from "../components/header/header";
import "./event2.css";
function Event2() {
  return (
    <div className="event">
      <Header />
      <div className="container">
        <div className="event__content">
          <div className="event-block">
            <div className="event__title">
              <div className="event-text">
                <h4>10 июня 2024 18:30</h4>
              </div>
              <div className="event-text2">
                <h1>Что такое SQL и почему он нужен везде?</h1>
              </div>
              <div className="event-text3">
                <h3 className="event-text4">
                  Организатор <br /> Mega Lab
                </h3>
                <h3 className="event-text5">
                  Локация <br />
                  Суюмбаева 123 (головной офис Mega)
                </h3>
              </div>
            </div>
          </div>
          <div className="event-block2">
            <div className="event__title">
              <div className="event-text">
                <h4>8 июня 2024 09:00</h4>
              </div>
              <div className="event-text2">
                <h1>Что такое автоматизация тестирования и с чем её едят?</h1>
              </div>
              <div className="event-text3">
                <h3 className="event-text4">
                  Организатор <br />
                  Software Testers from KG
                </h3>
                <h3 className="event-text5">
                  Локация <br />
                  Codify Academy, 7-й микрорайон, 26/2
                </h3>
              </div>
            </div>
          </div>
          <div className="event-block3">
            <div className="event__title">
              <div className="event-text">
                <h4>8 июня 2024 09:00</h4>
              </div>
              <div className="event-text2">
                <h1>БАТТЛ "СТАРТАП-НАЦИЯ"</h1>
              </div>
              <div className="event-text3">
                <h3 className="event-text4">
                  Организатор <br />
                  CODIFYLAB
                </h3>
                <h3 className="event-text5">
                  Локация <br />
                  Дасмия, АНКАРА 2, юрта "Хан Тенир"
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event2;
