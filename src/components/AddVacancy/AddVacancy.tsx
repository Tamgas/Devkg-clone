import { Modal } from "antd";
import Footer from "../Footer/Footer";
import SideBarAddVacancy from "../SidebarAddVacancy/SideBarAddVacancy";
import "./Addvacancy.scss";
import { useState } from "react";
function AddVacancy() {
  const [modal, contextHolder] = Modal.useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                <h4 className="addVacancy__content__info__organization">
                  Организация
                </h4>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Добавить организацию
                </button>
                <Modal open={isModalOpen}>{contextHolder}</Modal>
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
