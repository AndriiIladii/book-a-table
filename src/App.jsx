import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RestPlan from "./components/RestPlan";
import Modal from "./components/Modal";
import Login from "./components/Login";
import ReservationList from "./components/ReservationsList";
import * as styles from "./styles/App.module.css";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [tableNumber, setTableNumber] = useState(null);
  const [view, setView] = useState("Rest Plan");

  const handleSetActive = (table) => {
    setModalActive(true);
    setTableNumber(table);
  };

  return (
    <div>
      <div className={styles.Header}>
        <Sidebar view={view} setView={setView} />
        <Login />
      </div>
      <Routes>
        <Route
          path="/restaurant-plan"
          element={<RestPlan setActive={handleSetActive} view="Rest Plan" />}
        />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/ponton-plan" element={<div>Ponton plan</div>} />
        <Route path="/terrace-plan" element={<div>Terrace plan</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        tableNumber={tableNumber}
      />
    </div>
  );
};

export default App;
