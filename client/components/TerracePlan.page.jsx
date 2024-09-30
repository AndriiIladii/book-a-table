//node modules
import React from "react";
//Componets
import Legend from "./Legend";
import TerracePlanSvg from "./TerracePlan.component";

const TerracePlan = ({ setActive, userName }) => {
  return (
    <>
      {userName && <Legend />}
      <TerracePlanSvg setActive={setActive} />
    </>
  );
};

export default TerracePlan;
