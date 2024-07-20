import React from "react";
import * as styles from "./Sidebar.module.css";

const Sidebar = ({ setView }) => {
  function showRestuarantPlan() {
    setView("Rest Plan");
  }

  function showPontonPlan() {
    setView("Ponton Plan");
  }

  function showTerracePlan() {
    setView("Terrace Plan");
  }

  function showReservation() {
    setView("Reservations");
  }

  return (
    <aside>
      <div className={styles.topButtons}>
        <button onClick={showRestuarantPlan} className={styles.headerBtn}>
          Restaurant
        </button>
        <button onClick={showReservation} className={styles.headerBtn}>
          Reservation
        </button>
      </div>
      <div className={styles.bottomButtons}>
        <button onClick={showPontonPlan} className={styles.headerBtn}>
          Ponton
        </button>
        <button onClick={showTerracePlan} className={styles.headerBtn}>
          Terrace
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
