//node modules
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  deleteReservation,
  updateReservationInfo,
} from "../../redux/ReservationSlice";
//Api Libary
import axios from "axios";
//Components
import TableModal from "../Reservation Details/components/TableModal.component";
import ReservationForm from "../Reservation Details/components/ReservationForm.component";
//styles
import * as styles from "../../../styles/ReservationDetail.module.css";

const ReservationDetail = ({ setTable }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservation = useSelector((state) =>
    state.reservation.reservations.find((reservation) => reservation._id === id)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (data) => {
    const updateReservation = {
      id: reservation._id,
      ...data,
    };

    axios({
      method: "PUT",
      url: `http://localhost:5000/reservations/${reservation._id}`,
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
      url: `http://localhost:5000/reservations/${reservation._id}`,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(deleteReservation(reservation._id));
        navigate("/reservations");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleTableChange = (tableNumber) => {
    const updatedReservation = {
      ...reservation,
      tableNumber,
    };

    axios({
      method: "PUT",
      url: `http://localhost:5000/reservations/${reservation._id}`,
      data: updatedReservation,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(updateReservationInfo(updatedReservation));
        setTable(tableNumber);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      {reservation && (
        <div className={styles.detailBlock} key={reservation._id}>
          <button onClick={handleOpenModal} className={styles.tableNumber}>
            Номер столу: {reservation.tableNumber}
          </button>

          {isModalOpen && (
            <TableModal
              setTableChange={handleTableChange}
              setActive={setIsModalOpen}
            />
          )}
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
