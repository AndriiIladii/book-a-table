import React from "react";
import * as styles from "../styles/Login.module.css";

const Header = () => {
  return (
    <div className={styles.login}>
      <p>Hi, Username</p>
      <button className={styles.loginBtn}>Login</button>
    </div>
  );
};

export default Header;
