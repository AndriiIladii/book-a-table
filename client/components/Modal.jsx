//node modules
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReservation } from "../store/ReservationSlice";
// UI library
import { CloseOutlined } from "@ant-design/icons";
import { message } from "antd";
import ReservationForm from "./ReservationForm";
//styles
import * as styles from "../styles/Modal.module.css";

const Modal = ({ active, setActive, tableNumber }) => {
  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  function closeModal() {
    setActive(false);
  }

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Резервація додана",
    });
  };

  const addNewTable = async (data) => {
    const newReservation = {
      id: Date.now(),
      ...data,
      tableNumber,
      location:
        tableNumber >= 401 && tableNumber <= 410 ? "terrace" : "restaurant",
    };

    axios({
      method: "POST",
      url: "http://localhost:5000/reservations",
      data: newReservation,
    })
      .then((response) => {
        console.log(response.data);
        success();
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
        setActive(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {contextHolder}
      {active && (
        <div className={styles.modal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.tableNumber}>Номер столу: {tableNumber}</h2>
            <button className={styles.closeBtn} onClick={closeModal}>
              <CloseOutlined />
            </button>
            <ReservationForm
              onSubmit={addNewTable}
              submitLabel="Забронювати столик"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
