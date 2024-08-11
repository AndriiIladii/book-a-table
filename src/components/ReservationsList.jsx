//node modules
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { setTable, deleteTable } from "../store/TableSlice";
import { DeleteOutlined } from "@ant-design/icons";
// image
import rest from "../images/rest.jpg";
import logo from "../images/logo.png";
//styles
import * as styles from "../styles/Reservation.module.css";

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.table.table);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/reservations",
      data: reservations,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(setTable(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (reservationId) => {
    axios({
      method: "DELETE",
      url: `http://localhost:5000/reservations/${reservationId}`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(deleteTable(reservationId));
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
                <Link
                  className={styles.btnWrapper}
                  to={`/reservation/${reservation.id}`}
                >
                  <button className={styles.cardBtn}>View Reservation</button>
                  <button className={styles.deleteBtn}>
                    <DeleteOutlined
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(reservation.id);
                      }}
                    />
                  </button>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <div className={styles.noReserveWrapper}>
          <p className={styles.noReserve}>No reservations available.</p>
          <img src={logo} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default ReservationList;
