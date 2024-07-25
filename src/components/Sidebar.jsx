import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside>
      <div className={styles.topButtons}>
        <Link to="/restaurant-plan">
          <button className={styles.sidebarBtn}>Restaurant</button>
        </Link>
        <Link to="/reservations">
          <button className={styles.sidebarBtn}>Reservation</button>
        </Link>
      </div>
      <div className={styles.bottomButtons}>
        <Link to="/ponton-plan">
          <button className={styles.sidebarBtn}>Ponton</button>
        </Link>
        <Link to="/terrace-plan">
          <button className={styles.sidebarBtn}>Terrace</button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
