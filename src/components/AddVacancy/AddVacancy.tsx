import { Modal } from "antd";
import Footer from "../Footer/Footer";
import SideBarAddVacancy from "../SidebarAddVacancy/SideBarAddVacancy";
import "./Addvacancy.scss";
import { useState } from "react";
function AddVacancy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SideBarAddVacancy />
      <div className="addVacancy">
        <div className="vacancycontainer">
          <div className="addVacancy__content">
            <h2 className="addVacancy__content-title">
              Добавить новую вакансию
            </h2>
            <p className="addVacancy__content-text">
              Вакансия должна относится к сфере информационных технологий и
              будет опубликована после <br /> проверки модератором
            </p>
            <div className="addVacancy__content__info">
              <div className="addVacancy__content__info__organization">
                <h4 className="addVacancy__content__info__organization-title">
                  Организация
                </h4>
                <button
                  className="addVacancy__content__info__organization-btn"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Содать или Добавить организацию
                </button>
                <Modal
                  onOk={handleOk}
                  onCancel={handleCancel}
                  open={isModalOpen}
                ></Modal>
              </div>
              <div className="addVacancy__content__info__organization">
                <h4 className="addVacancy__content__info__organization-title">
                  Организация
                </h4>
                <input
                  type="text"
                  className="addVacancy__content__info__jobtitle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AddVacancy;
