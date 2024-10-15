//node modules
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { setReservation } from "../redux/ReservationSlice";
//Components
import Legend from "../components/Legend";
import RestPlanSvg from "../components/RestPlan.component";
import TerracePlanSvg from "../components/TerracePlan.component";
//UI Library
import { DatePicker } from "antd";
//Api Library
import axios from "axios";
//Date & Time parsing library
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import customParseFormat from "dayjs/plugin/customParseFormat";
//styles
import "../../styles/App.module.css";
import * as styles from "../../styles/RestPlan.module.css";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

const Plan = ({ setActive, userName }) => {
  const { location } = useParams();
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
  }, [dispatch]);

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
    setSelectedDate(date);
  };

  const getTableStatus = (number) => {
    const table = bookedTables.find(
      (table) => table.tableNumber === String(number)
    );
    return table ? table.status : null;
  };

  return (
    <div className={styles.svgContainer}>
      {userName && (
        <>
          <div className={styles.datePicker}>
            <DatePicker
              className={styles.date}
              placeholder="Виберіть дату"
              onChange={handleDateChange}
              format="DD-MM-YYYY"
              defaultValue={dayjs()}
            />
          </div>
          <Legend />
          {location === "restaurant" ? (
            <RestPlanSvg
              getTableStatus={getTableStatus}
              handleTable={handleTable}
            />
          ) : location === "terrace" ? (
            <TerracePlanSvg
              getTableStatus={getTableStatus}
              handleTable={handleTable}
            />
          ) : null}
        </>
      )}
    </div>
  );
};

export default Plan;
