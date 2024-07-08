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
            <h2 className={styles.tableNumber}>Table number: {tableNumber}</h2>

            <form>
              <div className={styles.first}>
                <div>
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Guest count</label>
                  <input type="number" />
                </div>
                <div>
                  <label>Booking date</label>
                  <input type="date" />
                </div>
              </div>
              <div className={styles.second}>
                <div>
                  <label>Booking Time</label>
                  <input type="time" />
                </div>
                <div>
                  <label>Phone number</label>
                  <input type="tel" />
                </div>
                <div>
                  <label>Has birthday</label>
                  <input type="checkbox" />
                </div>
              </div>
            </form>
            <div className={styles.commentary}>
              <label>Notes</label>
              <input type="text" />
            </div>
            <div>
              <button type="submit">Add Reservation</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
