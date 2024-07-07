import React from "react";
import * as styles from "./Modal.module.css";

const Modal = ({ active, setActive, tableNumber }) => {
  return (
    <>
      {active && (
        <div className={styles.modal} onClick={() => setActive(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Table number {tableNumber}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
