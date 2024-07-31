//node modules
import React from "react";
//styles
import * as styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <p>Hi, Username</p>
      <button className={styles.headerBtn}>Login</button>
    </div>
  );
};

export default Header;
