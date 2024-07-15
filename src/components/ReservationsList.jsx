import React from "react";
import rest from "./rest.jpg";
import * as styles from "./Reservation.module.css";

const ReservationList = ({ reservations }) => {
  return (
    <div>
      {reservations.length > 0 ? (
        <ul className={styles.reservationBlock}>
          {reservations.map((reservation, index) => (
            <div className={styles.blockContent}>
              <li key={index}>
                <div className={styles.testImg}>
                  <img src={rest} alt="rest" />
                </div>
                <div className={styles.test}>
                  <p>Guest Name: {reservation.name}</p>
                  <p>Table number:{reservation.tableNumber}</p>
                  <p> Reservation Time:{reservation.time}</p>
                </div>
                <button className={styles.reservationBtn}>
                  View reservation
                </button>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p className={styles.noReserve}>No reservations available.</p>
      )}
    </div>
  );
};

export default ReservationList;
