//node modules
import React, { useState, useEffect } from "react";
//components
import terraceTables from "./terraceData";
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
//styles
import * as styles from "../styles/TerracePlan.module.css";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(customParseFormat);

const TerracePlanSvg = ({ setActive }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
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

  const tableStyle = {
    hasReservation: styles.booked,
    hasBirthday: styles.birthday,
    hasDoubleReserve: styles.doubleReserve,
  };

  const getTableStatus = (number) => {
    const table = bookedTables.find((table) => table.tableNumber === number);
    return table ? table.status : null;
  };
  return (
    <>
      <div className={styles.datePicker}>
        <DatePicker
          className={styles.date}
          placeholder="Виберіть дату"
          onChange={handleDateChange}
          format="DD-MM-YYYY"
        />
      </div>
      <div className={styles.svgContainerTerrace}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1519.74 1063.83"
          className={styles.svgContent}
        >
          <rect
            className={styles.cls1Terrace}
            x="0.5"
            y="0.5"
            width="1518.74"
            height="1062.83"
          />
          <rect
            className={styles.cls2Terrace}
            x="657.74"
            y="419.23"
            width="120.69"
            height="121.42"
          />

          {terraceTables.map(({ table, text }) => (
            <g
              key={table.number}
              className={`${styles.tableTerrace} ${
                tableStyle[getTableStatus(table.number)]
              }`}
              onClick={() => handleTable(table.number)}
            >
              {table.x !== undefined && table.y !== undefined ? (
                <rect
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                  className={`${styles.cls3Terrace} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                />
              ) : (
                <ellipse
                  cx={table.cx}
                  cy={table.cy}
                  rx={table.rx}
                  ry={table.ry}
                  className={`${styles.cls3Terrace} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                />
              )}
              <text className={styles.cls4Terrace} transform={text.transform}>
                {table.number}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
};

export default TerracePlanSvg;
