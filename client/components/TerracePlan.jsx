//node modules
import React from "react";
//styles
import * as styles from "../styles/TerracePlan.module.css";
//image import
import logo from "../images/logo.png";

const TerracePlan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <p>Бронювання наразі недоступно</p>
        <img className={styles.logo} src={logo} alt="rest" />
      </div>
    </div>
  );
};

export default TerracePlan;
