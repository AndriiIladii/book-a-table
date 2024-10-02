//node modules
import React, { useState } from "react";
import Select from "react-select";
//Components
import RestPlanSvg from "./RestPlan.component";
import TerracePlanSvg from "./TerracePlan.component";
//Styles
import * as styles from "../styles/TableModal.module.css";

const TableModal = ({ setActive, setTableChange }) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  const locationOptions = [
    { value: "", label: "Виберіть локацію" },
    { value: "restaurant", label: "Ресторан" },
    { value: "terrace", label: "Тераса" },
  ];

  const handleTable = (number) => {
    setTableChange(number);
    setActive(false);
  };

  return (
    <div className={styles.overlay} onClick={() => setActive(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>Оберіть локацію для зміни столу</h1>
        <Select
          className={styles.locationSelect}
          options={locationOptions}
          onChange={(option) => setSelectedLocation(option)}
          value={selectedLocation}
          isClearable
          placeholder="Виберіть локацію"
        />

        <div className={styles.svgContainer}>
          {selectedLocation?.value === "restaurant" && <RestPlanSvg />}
          {selectedLocation?.value === "terrace" && (
            <div className={styles.svgContainerTerrace}>
              <TerracePlanSvg />
            </div>
          )}
        </div>

        <button className={styles.closeBtn} onClick={() => setActive(false)}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default TableModal;
