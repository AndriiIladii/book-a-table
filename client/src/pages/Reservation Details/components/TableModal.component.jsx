//node modules
import React, { useState, useEffect } from "react";
import Select from "react-select";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { setReservation } from "../../../redux/ReservationSlice";
//Api Library
import axios from "axios";
//Components
import RestPlanSvg from "../../../components/RestPlan.component";
import TerracePlanSvg from "../../../components/TerracePlan.component";
//Styles
import * as styles from "../../../../styles/TableModal.module.css";

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
            <RestPlanSvg
              setActive={setActive}
              bookedTables={bookedTables}
              getTableStatus={getTableStatus}
              handleTable={handleTable}
            />
          )}
          {selectedLocation?.value === "terrace" && (
            <TerracePlanSvg
              setActive={setActive}
              bookedTables={bookedTables}
              getTableStatus={getTableStatus}
              handleTable={handleTable}
            />
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
