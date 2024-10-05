//node modules
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { saveReservation } from "./redux/ReservationSlice";
import { useMediaQuery } from "@uidotdev/usehooks";
//components
import Plan from "./pages/Plan.page";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import ReservationList from "./pages/ReservationsList.page";
import ReservationDetail from "./pages/Reservation Details/ReservationDetail.page";
//styles
import * as styles from "../styles/App.module.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [tableNumber, setTableNumber] = useState(null);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);

  const isSmallScreen = useMediaQuery("(max-width: 525px)");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      dispatch(saveReservation());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleSetActive = (table) => {
    setModalActive(true);
    setTableNumber(table);
  };

  return (
    <div>
      <div className={`${styles.topBar} ${menuOpen ? styles.open : ""}`}>
        {isSmallScreen ? (
          <div
            className={`${styles.burgerIcon} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? styles.open : ""}></span>
            <span className={menuOpen ? styles.open : ""}></span>
            <span className={menuOpen ? styles.open : ""}></span>
          </div>
        ) : (
          <>
            <Header
              setLoginActive={setLoginActive}
              setUserName={setUserName}
              userName={userName}
              closeMenu={() => setMenuOpen(false)}
            />
            <Sidebar userName={userName} closeMenu={() => setMenuOpen(false)} />
          </>
        )}
        {menuOpen && isSmallScreen && (
          <>
            <Header
              setLoginActive={setLoginActive}
              setUserName={setUserName}
              userName={userName}
              closeMenu={() => setMenuOpen(false)}
            />
            <Sidebar userName={userName} closeMenu={() => setMenuOpen(false)} />
          </>
        )}
      </div>
      <main>
        {userName ? (
          <Routes>
            <Route path="/" element={<Navigate to="/plan/restaurant" />} />
            <Route
              path="/plan/:location"
              element={<Plan setActive={handleSetActive} userName={userName} />}
            />
            <Route path="/reservations" element={<ReservationList />} />
            <Route
              path="/reservation/:id"
              element={<ReservationDetail setTable={setTableNumber} />}
            />

            <Route path="*" element={<div>404</div>} />
          </Routes>
        ) : (
          <p className={styles.warning}>Авторизуйтесь для роботи</p>
        )}
      </main>

      <Modal
        active={modalActive}
        setActive={setModalActive}
        tableNumber={tableNumber}
      />
      <Login
        loginActive={loginActive}
        setLoginActive={setLoginActive}
        setUserName={setUserName}
      />
    </div>
  );
};

export default App;
