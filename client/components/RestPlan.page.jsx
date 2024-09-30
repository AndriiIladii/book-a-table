//node modules
import React from "react";
//Components
import Legend from "./Legend";
import RestPlanSvg from "./RestPlan.component";
//styles
import "../styles/App.module.css";
import * as styles from "../styles/RestPlan.module.css";

const RestPlan = ({ setActive, userName }) => {
  return (
    <div className={styles.svgContainer}>
      {userName && (
        <>
          <Legend />
          <RestPlanSvg setActive={setActive} />
        </>
      )}
    </div>
  );
};

export default RestPlan;
