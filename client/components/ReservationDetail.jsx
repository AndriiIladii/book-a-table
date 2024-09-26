//node modules
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteReservation,
  updateReservationInfo,
} from "../store/ReservationSlice";
import ReservationForm from "./ReservationForm";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
//styles
import * as styles from "../styles/ReservationDetail.module.css";
import TableModal from "./TableModal";

const ReservationDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservation = useSelector((state) =>
    state.reservation.reservations.find((reservation) => reservation.id === +id)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (data) => {
    const updateReservation = {
      id: reservation.id,
      ...data,
    };

    axios({
      method: "PUT",
      url: `http://localhost:5000/reservations/${reservation.id}`,
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

  const handleDelete = (e) => {
    e.preventDefault();
    axios({
      method: "DELETE",
      url: `http://localhost:5000/reservations/${reservation.id}`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(deleteReservation(reservation.id));
        navigate("/reservations");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      {reservation && (
        <div className={styles.detailBlock} key={reservation.id}>
          <button onClick={handleOpenModal} className={styles.tableNumber}>
            Номер столу: {reservation.tableNumber}
          </button>

          {isModalOpen && <TableModal setActive={setIsModalOpen} />}
          <ReservationForm
            onSubmit={handleUpdate}
            onDelete={handleDelete}
            submitLabel="Зберегти зміни"
            defaultValues={{
              name: reservation.name,
              guests: reservation.guests,
              date: reservation.date,
              time: reservation.time,
              room: reservation.room,
              holiday: reservation.holiday,
              comment: reservation.comment,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ReservationDetail;
