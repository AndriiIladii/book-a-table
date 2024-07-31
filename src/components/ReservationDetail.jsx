//node modules
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTable } from "../store/TableSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
//styles
import * as styles from "../styles/ReservationDetail.module.css";

const ReservationDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector((state) => state.table.table);
  const reservationId = reservations.filter(
    (reservation) => reservation.id === +id
  );

  function handleDelete(reservationId) {
    dispatch(deleteTable(reservationId));
    navigate("/reservations");
  }

  return (
    <div>
      <ul>
        {reservationId.map((reservation) => (
          <div className={styles.detailBlock} key={reservation.id}>
            <form className={styles.detailForm}>
              <h2 className={styles.tableNumber}>
                Table number: {reservation.tableNumber}
              </h2>
              <div className={styles.detailContainer}>
                <div className={styles.leftBlock}>
                  <p>Guest Name: {reservation.name}</p>
                  <p>Time: {reservation.time}</p>
                  <p>Guests count: {reservation.guests}</p>
                </div>
                <div className={styles.rightBlock}>
                  <p>Date: {reservation.date}</p>
                  <p>Phone Number: {reservation.tel}</p>
                  <p>Has Birthday: {reservation.holiday ? "Yes" : "No"}</p>
                </div>
              </div>
              <h3>Comments:</h3>
              <p className={styles.comments}>{reservation.comment}</p>
              <div className={styles.detailsBtn}>
                <button
                  className={styles.detailBtn}
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete Reservation
                </button>
                <Link to="/restaurant-plan">
                  <button className={styles.detailBtn}>Change Table</button>
                </Link>
              </div>
            </form>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReservationDetail;
