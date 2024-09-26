//node modules
import React, { useState, useEffect } from "react";
import Select from "react-select";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { setReservation } from "../store/ReservationSlice";
//Api Library
import axios from "axios";
//Components
import tablesData from "./tablesData";
import terraceTables from "./terraceData";
//Styles
import * as styles from "../styles/TableModal.module.css";

const TableModal = ({ setActive, setTableChange }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
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

  const locationOptions = [
    { value: "", label: "Виберіть локацію" },
    { value: "restaurant", label: "Ресторан" },
    { value: "terrace", label: "Тераса" },
  ];

  const handleTable = (number) => {
    setTableChange(number);
    setActive(false);
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
    <div className={styles.overlay} onClick={() => setActive(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1 className={styles.title}>Оберіть локацію для зміни столу</h1>
        <Select
          className={styles.locationSelect}
          options={locationOptions}
          onChange={(option) => setSelectedLocation(option)}
          value={selectedLocation}
          isClearable
          placeholder="Виберіть локацію"
        />

        <div className={styles.svgContainer}>
          {selectedLocation?.value === "restaurant" && (
            <svg
              id="Layer_1"
              data-name="Layer 1"
              className={styles.svgContent}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 523.85 784.28"
            >
              {/* Static components */}

              <rect
                x="1.5"
                y="1.5"
                fill="#122223"
                stroke="#fff"
                strokeWidth="2"
                width="520.85"
                height="781.28"
              />

              <line
                className={styles.cls1}
                x1="1.5"
                y1="119.46"
                x2="214.18"
                y2="119.46"
              />
              <line
                className={styles.cls1}
                x1="1.5"
                y1="372.99"
                x2="27.29"
                y2="372.99"
              />
              <line
                className={styles.cls2}
                x1="1.5"
                y1="432.73"
                x2="27.29"
                y2="432.73"
              />

              <rect
                className={styles.cls2}
                x="395.33"
                y="115.82"
                width="15.19"
                height="14.3"
              />
              <rect
                className={styles.cls2}
                x="393.73"
                y="325.76"
                width="15.57"
                height="14.55"
              />
              <rect
                className={styles.cls2}
                x="394.44"
                y="540.22"
                width="15.45"
                height="14.49"
              />

              <g className={styles.bar}>
                <ellipse
                  className={styles.cls3}
                  cx="199.8"
                  cy="338.95"
                  rx="47.15"
                  ry="54.3"
                />
                <ellipse
                  className={styles.cls3}
                  cx="199.89"
                  cy="577.48"
                  rx="47.15"
                  ry="54.3"
                />
                <rect
                  className={styles.cls4}
                  x="152.65"
                  y="338.95"
                  width="94.3"
                  height="231.4"
                />
                <line
                  className={styles.cls3}
                  x1="152.74"
                  y1="335.54"
                  x2="152.98"
                  y2="572.03"
                />
                <line
                  className={styles.cls3}
                  x1="247.04"
                  y1="336.14"
                  x2="246.95"
                  y2="570.35"
                />

                <ellipse
                  className={styles.cls3}
                  cx="269.59"
                  cy="574.52"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="265.32"
                  cy="607.13"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="244.94"
                  cy="635.25"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="218.26"
                  cy="653.39"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="129.41"
                  cy="576.82"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="132.65"
                  cy="611.33"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="150.36"
                  cy="639.18"
                  rx="12.8"
                  ry="13.11"
                />
                <ellipse
                  className={styles.cls3}
                  cx="180.31"
                  cy="653.39"
                  rx="12.8"
                  ry="13.11"
                />
              </g>

              {/* Static components */}

              {tablesData.map(({ table, text }) => (
                <g
                  key={table.number}
                  className={`${styles.table} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                  onClick={() => handleTable(table.number)}
                >
                  {table.x !== undefined && table.y !== undefined ? (
                    <rect
                      className={`${styles.cls3} ${
                        tableStyle[getTableStatus(table.number)]
                      }`}
                      x={table.x}
                      y={table.y}
                      width={table.width}
                      height={table.height}
                    />
                  ) : (
                    <ellipse
                      className={`${styles.cls3} ${
                        tableStyle[getTableStatus(table.number)]
                      }`}
                      cx={table.cx}
                      cy={table.cy}
                      rx={table.rx}
                      ry={table.ry}
                    />
                  )}
                  <text className={styles.cls6} transform={text.transform}>
                    {table.number}
                  </text>
                </g>
              ))}
            </svg>
          )}
          {selectedLocation?.value === "terrace" && (
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
                    <text
                      className={styles.cls4Terrace}
                      transform={text.transform}
                    >
                      {table.number}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          )}
        </div>

        <button className={styles.closeBtn} onClick={() => setActive(false)}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default TableModal;
