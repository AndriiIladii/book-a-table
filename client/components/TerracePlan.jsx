import React, { useState, useEffect } from "react";
import axios from "axios";
import Legend from "./Legend";
import terraceTables from "./terraceData";
import * as styles from "../styles/TerracePlan.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setReservation } from "../store/ReservationSlice";

const TerracePlan = ({ setActive, userName }) => {
  const [selectedTable, setSelectedTable] = useState(null);
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

  useEffect(() => {
    if (reservations) {
      const tables = reservations.reduce((acc, reservation) => {
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
  }, [reservations]);

  const handleTable = (number) => {
    setSelectedTable(number);
    setActive(number);
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
      {userName && <Legend />}

      <div className={styles.svgContainer}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1519.74 1063.83"
          className={styles.svgContent}
        >
          <rect
            className={styles.cls1}
            x="0.5"
            y="0.5"
            width="1518.74"
            height="1062.83"
          />
          <rect
            className={styles.cls2}
            x="657.74"
            y="419.23"
            width="120.69"
            height="121.42"
          />

          {terraceTables.map(({ table, text }) => (
            <g
              key={table.number}
              className={`${styles.table} ${
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
                  className={`${styles.cls3} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                />
              ) : (
                <ellipse
                  cx={table.cx}
                  cy={table.cy}
                  rx={table.rx}
                  ry={table.ry}
                  className={`${styles.cls3} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                />
              )}
              <text className={styles.cls4} transform={text.transform}>
                {table.number}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
};

export default TerracePlan;
