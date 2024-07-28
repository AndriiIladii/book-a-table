import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as styles from "../styles/ReservationDetail.module.css";

const ReservationDetail = () => {
  const { id } = useParams();
  const reservations = useSelector((state) => state.table.table);
  const reservationId = reservations.filter(
    (reservation) => reservation.id === +id
  );

  return (
    <div>
      <ul>
        {reservationId.map((reservation) => (
          <div className={styles.test} key={reservation.id}>
            <form className={styles.form}>
              <h2 className={styles.tableNumber}>
                Table number: {reservation.tableNumber}
              </h2>
              <div className={styles.container}>
                <div className={styles.leftBlock}>
                  <p>Name: {reservation.name}</p>
                  <p>Time: {reservation.time}</p>
                  <p>Guests count: {reservation.guests}</p>
                </div>
                <div className={styles.rightBlock}>
                  <p>Date: {reservation.date}</p>
                  <p>Phone: {reservation.tel}</p>
                  <p>Has Birthday: {reservation.holiday}</p>
                </div>
              </div>
              <p className={styles.comments}>Comments: {reservation.comment}</p>
            </form>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReservationDetail;
