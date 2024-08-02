//node modules
import React, { useState } from "react";
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

  const [tableName, setTableName] = useState(reservationId.name);
  const [time, setTime] = useState(reservationId.time);
  const [guestCount, setGuestCount] = useState(reservationId.guests);
  const [date, setDate] = useState(reservationId.date);
  const [phoneNumber, setPhoneNumber] = useState(reservationId.tel);
  const [birthday, setBirthday] = useState(reservationId.holiday);
  const [comment, setComment] = useState(reservationId.comment);

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
                  <input
                    type="text"
                    value={tableName}
                    onChange={(e) => setTableName(e.target.value)}
                  />
                  <label>Time: </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <label>Guests count: </label>
                  <input
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                  />
                </div>
                <div className={styles.rightBlock}>
                  <label>Date: </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <label>Phone Number: </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <label>Has Birthday: </label>
                  <input
                    type="checkbox"
                    checked={birthday}
                    onChange={(e) => setBirthday(e.target.checked)}
                  />
                </div>
              </div>
              <h3>Comments:</h3>
              <input
                className={styles.comments}
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
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
