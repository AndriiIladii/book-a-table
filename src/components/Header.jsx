import React from "react";
import Sidebar from "./Sidebar";
import Login from "./Login";
import * as styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Sidebar />
      <Login />
    </div>
  );
};

export default Header;
