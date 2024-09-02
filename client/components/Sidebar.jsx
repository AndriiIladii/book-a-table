//node modules
import React from "react";
import { Link } from "react-router-dom";
//styles
import * as styles from "../styles/Sidebar.module.css";

const Sidebar = ({ userName, closeMenu }) => {
  return (
    <aside>
      {userName && (
        <>
          <div className={styles.topButtons}>
            <Link to="/restaurant-plan">
              <button onClick={closeMenu} className={styles.sidebarBtn}>
                Ресторан
              </button>
            </Link>
            <Link to="/reservations">
              <button onClick={closeMenu} className={styles.sidebarBtn}>
                Бронювання
              </button>
            </Link>
          </div>
          <div className={styles.bottomButtons}>
            <Link to="/ponton-plan">
              <button onClick={closeMenu} className={styles.sidebarBtn}>
                Понтон
              </button>
            </Link>
            <Link to="/terrace-plan">
              <button onClick={closeMenu} className={styles.sidebarBtn}>
                Тераса
              </button>
            </Link>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
