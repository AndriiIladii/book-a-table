//node modules
import React from "react";
//styles
import * as styles from "../styles/TerracePlan.module.css";
// image import
import logo from "../images/logo.png";

const PontonPlan = () => {
  return (
    <div className={styles.info}>
      <p>Бронювання наразі недоступно</p>
      <img src={logo} alt="rest" />
    </div>
  );
};

export default PontonPlan;
