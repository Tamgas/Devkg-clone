import "./Events.css";
function Eventspage() {
  return (
    <div className="event">
      <div className="container">
        <div className="event__content">
          <div className="add-btns">
            <button className="add-btn">Добавить мероприятие</button>
          </div>
          <div className="event__content-blocks">
            <div className="event__content-block1">
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

            <div className="event__content-block2">
              <div className="event__content-title">
                <div className="event__content-info">
                  <h4>8 июня 2024 09:00</h4>
                </div>
                <div className="event__content__text">
                  <h1>Что такое автоматизация тестирования и с чем её едят?</h1>
                  <div className="event__content-text">
                    <h3 className="event__content-text">
                      Организатор <br />
                      Software Testers from KG
                    </h3>
                    <h3 className="event__conetent-text">
                      Локация <br />
                      Codify Academy, 7-й микрорайон, 26/2
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="event__content-block3">
              <div className="event__content-title">
                <div className="event__content-info">
                  <h4>8 июня 2024 09:00</h4>
                </div>

                <div className="event__content__text">
                  <h1>БАТТЛ "СТАРТАП-НАЦИЯ"</h1>
                  <div className="event__content-text">
                    <h3 className="event__content-text">
                      Организатор <br />
                      CODIFYLAB
                    </h3>
                    <h3 className="event__content-text">
                      Локация <br />
                      Дасмия, АНКАРА 2, юрта "Хан Тенир"
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="next-btns">
            <button className="next-btn">Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventspage;
