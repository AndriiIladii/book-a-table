//node modules
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { setReservation, deleteReservation } from "../store/ReservationSlice";
// UI library
import { DeleteOutlined } from "@ant-design/icons";
// images import
import rest from "../images/rest.jpg";
import logo from "../images/logo.png";
//styles
import * as styles from "../styles/Reservation.module.css";

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/reservations",
    })
      .then((response) => {
        console.log(response.data);
        dispatch(setReservation(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const handleDelete = (reservationId) => {
    axios({
      method: "DELETE",
      url: `http://localhost:5000/reservations/${reservationId}`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(deleteReservation(reservationId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.reservationContainer}>
      {reservations && reservations.length > 0 ? (
        <ul className={styles.reservationCards}>
          {reservations.map((reservation) => (
            <div key={reservation.id} className={styles.cardContent}>
              <li>
                <div className={styles.cardImg}>
                  <img src={rest} alt="rest" />
                </div>
                <div className={styles.cardInfo}>
                  <p>Guest Name: {reservation.name}</p>
                  <p>Table number: {reservation.tableNumber}</p>
                  <p>Reservation Time: {reservation.time}</p>
                </div>
                <div className={styles.btnWrapper}>
                  <Link
                    className={styles.cardBtn}
                    to={`/reservation/${reservation.id}`}
                  >
                    <button>View Reservation</button>
                  </Link>
                  <button
                    className={styles.deleteBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(reservation.id);
                    }}
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <div className={styles.noReserveWrapper}>
          <p className={styles.noReserve}>No reservations available.</p>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default ReservationList;
