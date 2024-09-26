//node modules
import React from "react";
//styles
import * as styles from "../styles/Header.module.css";

const Header = ({ setLoginActive, userName, setUserName }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginActive(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userName");
    setUserName(null);
  };

  return (
    <div className={styles.header}>
      {userName ? (
        <>
          <p>Привіт, {userName}</p>
          <button onClick={handleLogout} className={styles.headerBtn}>
            Вийти
          </button>
        </>
      ) : (
        <button onClick={handleLogin} className={styles.headerBtn}>
          Зайти
        </button>
      )}
    </div>
  );
};

export default Header;
