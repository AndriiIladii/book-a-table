//node modules
import React, { useState, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { setReservation } from "../store/ReservationSlice";
//Api Library
import axios from "axios";
//UI Library
import { DatePicker } from "antd";
//Date & Time parsing library
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import customParseFormat from "dayjs/plugin/customParseFormat";
//Componets
import Legend from "./Legend";
import TerracePlanSvg from "./TerracePlan.component";
//styles
import * as styles from "../styles/TerracePlan.module.css";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

const TerracePlan = ({ setActive, userName }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [bookedTables, setBookedTables] = useState([]);
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/reservations",
    })
      .then((response) => {
        dispatch(setReservation(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getFilteredReservations = () => {
    if (!selectedDate) {
      return reservations;
    }

    const formattedSelectedDate = dayjs(selectedDate).format("DD-MM-YYYY");

    return reservations.filter((reservation) => {
      const reservationDate = dayjs(reservation.date, "DD-MM-YYYY", true);
      return reservationDate.format("DD-MM-YYYY") === formattedSelectedDate;
    });
  };

  useEffect(() => {
    if (reservations) {
      const filteredReservations = getFilteredReservations();

      const tables = filteredReservations.reduce((acc, reservation) => {
        const status = reservation.holiday ? "hasBirthday" : "hasReservation";
        const existingTable = acc.find(
          (table) => table.tableNumber === reservation.tableNumber
        );

        if (existingTable) {
          existingTable.status = "hasDoubleReserve";
        } else {
          acc.push({
            tableNumber: reservation.tableNumber,
            status: status,
          });
        }

        return acc;
      }, []);

      setBookedTables(tables);
    }
  }, [reservations, selectedDate]);

  const handleTable = (number) => {
    setSelectedTable(number);
    setActive(number);
  };

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const getTableStatus = (number) => {
    const table = bookedTables.find((table) => table.tableNumber === number);
    return table ? table.status : null;
  };

  return (
    <>
      {userName && <Legend />}
      <div className={styles.datePicker}>
        <DatePicker
          className={styles.date}
          placeholder="Виберіть дату"
          onChange={handleDateChange}
          format="DD-MM-YYYY"
          defaultValue={dayjs()}
        />
      </div>
      <TerracePlanSvg
        setActive={setActive}
        selectedTable={selectedTable}
        bookedTables={bookedTables}
        getTableStatus={getTableStatus}
        handleTable={handleTable}
      />
    </>
  );
};

export default TerracePlan;
