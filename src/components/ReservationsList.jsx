import React from "react";
import * as styles from "./RestPlan.module.css";

const ReservationList = ({ reservations }) => {
  return (
    <div>
      {reservations.length > 0 ? (
        <div className={styles.reservationBlock}>
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index}>
                <p>Guest Name: {reservation.name}</p>
                <p>Reservation Time:{reservation.time}</p>
                <p> Reservation Date:{reservation.time}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.noReserveWrapper}>
          <p className={styles.noReserve}>No reservations available.</p>
        </div>
      )}
    </div>
  );
};

export default ReservationList;
