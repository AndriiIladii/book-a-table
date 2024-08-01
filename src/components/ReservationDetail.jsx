//node modules
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTable } from "../store/TableSlice";
import { useParams, useNavigate } from "react-router-dom";
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
              <button className={styles.tableNumber}>
                Table number: {reservation.tableNumber}
              </button>
              <div className={styles.detailContainer}>
                <div className={styles.leftBlock}>
                  <label>Guest Name: </label>
                  <input type="text" placeholder={reservation.name} />
                  <label>Time: </label>
                  <input type="text" placeholder={reservation.time} />
                  <label>Guests count: </label>
                  <input type="text" placeholder={reservation.guests} />
                </div>
                <div className={styles.rightBlock}>
                  <label>Date: </label>
                  <input type="text" placeholder={reservation.date} />
                  <label>Phone Number: </label>
                  <input type="text" placeholder={reservation.tel} />
                  <label>Has Birthday: </label>
                  <input
                    type="text"
                    placeholder={reservation.holiday ? "Yes" : "No"}
                  />
                </div>
              </div>
              <h3>Comments:</h3>
              <input
                className={styles.comments}
                type="text"
                placeholder={reservation.comment}
              />
              <div className={styles.detailsBtn}>
                <button
                  className={styles.detailBtn}
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete Reservation
                </button>
                <button className={styles.detailBtn}>Save changes</button>
              </div>
            </form>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ReservationDetail;
