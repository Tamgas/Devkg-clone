import { Link } from "react-router-dom";
import "./video.css";
function Video() {
  return (
    <div className="video">
      <div className="container">
        <div className="video__info">
          <Link to="/videos" className="video-logo">
            Последние видео
          </Link>
          <div className="video__content">
            <div className="video__content__blocks">
              <div className="video__content-block">
                <div className="video__content-block-text">
                  <h2 className="video__logo-text">
                    ChatGPT - революция или мода? Как нейросети могут помочь в
                    работе
                  </h2>
                  <div className="video-text">
                    <p className="text">
                      Организатор <br /> Kolesa Group
                    </p>
                    <p className="text">
                      Когда
                      <br />
                      12 сентября 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="video__content-block2">
                <div className="video__content-block-text">
                  <h2 className="video__logo-text">
                    Кибирд(Keybeard)#43 - Синдром самозванца в IT 2023 (feat.
                    Даниил Вартанов)
                  </h2>
                  <div className="video-text">
                    <p className="text">
                      Организатор <br /> Mad Devs
                    </p>
                    <p className="text">
                      Когда
                      <br />
                      30 август 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
