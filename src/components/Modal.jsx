import React, { Children } from "react";
import * as styles from "./Modal.module.css";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.modalContent.active}`
            : styles.modal
        }
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Modal;
