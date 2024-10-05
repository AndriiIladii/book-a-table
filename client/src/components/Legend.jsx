//node modules
import React from "react";
// UI library
import { CrownFilled } from "@ant-design/icons";
//styles
import * as styles from "../../styles/Legend.module.css";

const Legend = () => {
  return (
    <>
      <div className={styles.legendContainer}>
        <h3>Легенда</h3>
        <div className={styles.legendWrapper}>
          <div className={styles.reserved}></div>
          <p>Стіл заброньований</p>
        </div>
        <div className={styles.legendWrapper}>
          <CrownFilled className={styles.birthday} />
          <p>Є день народження</p>
        </div>
        <div className={styles.legendWrapper}>
          <div className={styles.doubleReserve}></div>
          <p>Декілька броней</p>
        </div>
      </div>
    </>
  );
};

export default Legend;
