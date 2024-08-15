//node modules
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReservation,
  updateReservationInfo,
} from "../store/ReservationSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import ReservationForm from "./ReservationForm";
//styles
import * as styles from "../styles/ReservationDetail.module.css";

const ReservationDetail = ({ tableNumber }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservation = useSelector((state) =>
    state.reservation.reservations.find((reservation) => reservation.id === +id)
  );

  const [reservationData, setReservationData] = useState(reservation);

  useEffect(() => {
    if (reservation) {
      setReservationData(reservation);
    }
  }, [reservation]);

  const handleUpdate = (data) => {
    const updateReservation = {
      id: reservationData.id,
      ...data,
    };

    axios({
      method: "PUT",
      url: `http://localhost:5000/reservations/${reservationData.id}`,
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

  const handleDelete = () => {
    axios({
      method: "DELETE",
      url: `http://localhost:5000/reservations/${reservationData.id}`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(deleteReservation(reservationData.id));
        navigate("/reservations");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.detailBlock}>
      <div className={styles.detailForm}>
        <button className={styles.tableNumber}>
          Table number: {tableNumber}
        </button>
        <div>
          <ReservationForm onSubmit={handleUpdate} submitLabel="Save changes" />
          <div className={styles.buttonWrapper}>
            <button className={styles.detailBtn} onClick={handleDelete}>
              Delete Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetail;
