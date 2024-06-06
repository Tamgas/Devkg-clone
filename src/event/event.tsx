import "./event.css";

function Event() {
  return (
    <div className="event">
      <div className="container">
        <div className="event__content">
          <div className="event-logo-text">
            <h1>Последние мероприятия</h1>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Event;
