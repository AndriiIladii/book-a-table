import React from "react";
import * as styles from "../styles/TerracePlan.module.css";
import logo from "../images/logo.png";

const TerracePlan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p>Reservations temporary unavailable</p>
        <img src={logo} alt="rest" />
      </div>
    </div>
  );
};

export default TerracePlan;
