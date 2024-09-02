//node modules
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { saveReservation } from "./store/ReservationSlice";
import { useMediaQuery } from "@uidotdev/usehooks";
//components
import RestPlan from "./components/RestPlan";
import PontonPlan from "./components/PontonPlan";
import TerracePlan from "./components/TerracePlan";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import ReservationList from "./components/ReservationsList";
import ReservationDetail from "./components/ReservationDetail";
//styles
import * as styles from "./styles/App.module.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [tableNumber, setTableNumber] = useState(null);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(null);

  const isSmallScreen = useMediaQuery("(max-width: 525px)");

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
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
            <Route path="/" element={<Navigate to="/restaurant-plan" />} />
            <Route
              path="/restaurant-plan"
              element={
                <RestPlan
                  setActive={handleSetActive}
                  view="Rest Plan"
                  userName={userName}
                />
              }
            />
            <Route path="/reservations" element={<ReservationList />} />
            <Route path="/reservation/:id" element={<ReservationDetail />} />
            <Route path="/ponton-plan" element={<PontonPlan />} />
            <Route path="/terrace-plan" element={<TerracePlan />} />
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
