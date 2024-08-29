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
    e.preventDefault;
    setUserName(null);
  };

  return (
    <div className={styles.header}>
      {userName ? (
        <>
          <p>Hi, {userName}</p>
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
