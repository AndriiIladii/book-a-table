//node modules
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/ReservationSlice";
//styles
import * as styles from "../styles/Header.module.css";

const Header = ({ setLoginActive }) => {
  const user = useSelector((state) => state.reservation.user);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginActive(true);
  };

  const handleLogout = (e) => {
    e.preventDefault;
    dispatch(addUser(null));
  };

  return (
    <div className={styles.header}>
      {user ? (
        <>
          <p>Hi, {user}</p>
          <button onClick={handleLogout} className={styles.headerBtn}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={handleLogin} className={styles.headerBtn}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
