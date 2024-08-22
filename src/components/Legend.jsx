import React from "react";
import { CrownFilled } from "@ant-design/icons";
import * as styles from "../styles/Legend.module.css";

const Legend = () => {
  return (
    <>
      <div>
        <div className={styles.legendContainer}>
          <h3>Legend</h3>
          <div className={styles.legendWrapper}>
            <div className={styles.reserved}></div>
            <p>Table Reserved</p>
          </div>
          <div className={styles.legendWrapper}>
            <CrownFilled className={styles.birthday} />
            <p>Has birthday</p>
          </div>
          {/* <div className={styles.legendWrapper}>
            <div className={styles.doubleReserve}></div>
            <p>Double Reserve</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Legend;
