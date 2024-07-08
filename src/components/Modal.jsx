import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTable, saveTable, loadTable } from "../store/TableSlice";
import * as styles from "./Modal.module.css";

const Modal = ({ active, setActive, tableNumber }) => {
  const [tableName, setTableName] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [reservationDate, setReservationDate] = useState(new Date());
  const [reservationTime, setReservationTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [birthday, setBirthday] = useState(false);
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTable());

    const handleBeforeUnload = () => {
      dispatch(saveTable());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function addNewTable() {
    const newReservation = {
      name: tableName,
      tableNumber: tableNumber,
      guests: guestCount,
      date: reservationDate,
      time: reservationTime,
      tel: phoneNumber,
      holiday: birthday,
      comment: notes,
    };

    dispatch(addTable(newReservation));
    setActive(false);
  }

  return (
    <>
      {active && (
        <div className={styles.modal} onClick={() => setActive(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.tableNumber}>Table number: {tableNumber}</h2>

            <form>
              <div className={styles.first}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    onChange={(e) => setTableName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Guest count</label>
                  <input
                    type="number"
                    onChange={(e) => setGuestCount(e.target.value)}
                  />
                </div>
                <div>
                  <label>Booking date</label>
                  <input
                    type="date"
                    onChange={(e) => setReservationDate(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.second}>
                <div>
                  <label>Booking Time</label>
                  <input
                    type="time"
                    onChange={(e) => setReservationTime(e.target.value)}
                  />
                </div>
                <div>
                  <label>Phone number</label>
                  <input
                    type="tel"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label>Has birthday</label>
                  <input
                    type="checkbox"
                    onChange={(e) => setBirthday(e.target.checked)}
                  />
                </div>
              </div>
            </form>
            <div className={styles.commentary}>
              <label>Notes</label>
              <input type="text" onChange={(e) => setNotes(e.target.value)} />
            </div>
            <div>
              <button
                onClick={addNewTable}
                className={styles.formBtn}
                type="submit"
              >
                Add Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
