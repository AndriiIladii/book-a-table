//node modules
import React from "react";
//styles
import * as styles from "../styles/Header.module.css";

const Header = ({ setLoginActive }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginActive(true);
  };

  return (
    <div className={styles.header}>
      <p>Hi, Username</p>
      <button onClick={handleLogin} className={styles.headerBtn}>
        Login
      </button>
    </div>
  );
};

export default Header;
