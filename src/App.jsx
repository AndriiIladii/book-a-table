import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RestPlan from "./components/RestPlan";
import Modal from "./components/Modal";
import Header from "./components/Header";
import ReservationList from "./components/ReservationsList";
import ReservationDetail from "./components/ReservationDetail";
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
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/restaurant-plan" />} />
        <Route
          path="/restaurant-plan"
          element={<RestPlan setActive={handleSetActive} view="Rest Plan" />}
        />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/reservation/:id" element={<ReservationDetail />} />
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
