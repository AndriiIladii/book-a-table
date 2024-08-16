//node modules
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReservation,
  updateReservationInfo,
} from "../store/ReservationSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//styles
import * as styles from "../styles/ReservationDetail.module.css";

const ReservationDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservation = useSelector((state) =>
    state.reservation.reservations.find((reservation) => reservation.id === +id)
  );

  const [reservationName, setReservationName] = useState("");
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (reservation) {
      setReservationName(reservation.name);
      setTime(reservation.time);
      setGuestCount(reservation.guests);
      setDate(reservation.date);
      setPhoneNumber(reservation.tel);
      setBirthday(reservation.holiday);
      setComment(reservation.comment);
    }
  }, [reservation]);

  const handleUpdate = (reservationId) => (e) => {
    e.preventDefault();
    const updateReservation = {
      id: reservationId,
      name: reservationName,
      time,
      guests: guestCount,
      date,
      tel: phoneNumber,
      holiday: birthday,
      comment,
    };

    axios({
      method: "PUT",
      url: `http://localhost:5000/reservations/${reservationId}`,
      data: updateReservation,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(updateReservationInfo(updateReservation));
        navigate("/reservations");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (reservationId) => (e) => {
    e.preventDefault();
    axios({
      method: "DELETE",
      url: `http://localhost:5000/reservations/${reservationId}`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(deleteReservation(reservationId));
        navigate("/reservations");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <ul>
        {reservation && (
          <div className={styles.detailBlock} key={reservation.id}>
            <form className={styles.detailForm}>
              <button className={styles.tableNumber}>
                Table number: {reservation.reservationNumber}
              </button>
              <div className={styles.detailContainer}>
                <div className={styles.leftBlock}>
                  <label>Guest Name: </label>
                  <input
                    type="text"
                    value={reservationName}
                    onChange={(e) => setReservationName(e.target.value)}
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
                    onChange={(e) => setGuestCount(+e.target.value)}
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
                  onClick={handleDelete(reservation.id)}
                >
                  Delete Reservation
                </button>
                <button
                  className={styles.detailBtn}
                  onClick={handleUpdate(reservation.id)}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ReservationDetail;
