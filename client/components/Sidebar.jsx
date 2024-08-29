//node modules
import React from "react";
import { Link } from "react-router-dom";
//styles
import * as styles from "../styles/Sidebar.module.css";

const Sidebar = ({ userName }) => {
  return (
    <aside>
      {userName && (
        <>
          <div className={styles.topButtons}>
            <Link to="/restaurant-plan">
              <button className={styles.sidebarBtn}>Restaurant</button>
            </Link>
            <Link to="/reservations">
              <button className={styles.sidebarBtn}>Reservations</button>
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
        </>
      )}
    </aside>
  );
};

export default Sidebar;
