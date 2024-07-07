import React from "react";
import * as styles from "./Modal.module.css";

const Modal = ({ active, setActive }) => {
  return (
    <>
      {active && (
        <div className={styles.modal} onClick={() => setActive(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          ></div>
        </div>
      )}
    </>
  );
};

export default Modal;
