//node modules
import React from "react";
//components
import terraceTables from "./terraceData";
//styles
import * as styles from "../styles/TerracePlan.module.css";

const TerracePlanSvg = ({ getTableStatus, handleTable }) => {
  const tableStyle = {
    hasReservation: styles.booked,
    hasBirthday: styles.birthday,
    hasDoubleReserve: styles.doubleReserve,
  };

  return (
    <>
      <div className={styles.svgContainerTerrace}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1519.74 1063.83"
          className={styles.svgContent}
        >
          <rect
            className={styles.cls1Terrace}
            x="0.5"
            y="0.5"
            width="1518.74"
            height="1062.83"
          />
          <rect
            className={styles.cls2Terrace}
            x="657.74"
            y="419.23"
            width="120.69"
            height="121.42"
          />

          {terraceTables.map(({ table, text }) => (
            <g
              key={table.number}
              className={`${styles.tableTerrace} ${
                tableStyle[getTableStatus(table.number)]
              }`}
              onClick={() => handleTable(table.number)}
            >
              {table.x !== undefined && table.y !== undefined ? (
                <rect
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                  className={`${styles.cls3Terrace} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                />
              ) : (
                <ellipse
                  cx={table.cx}
                  cy={table.cy}
                  rx={table.rx}
                  ry={table.ry}
                  className={`${styles.cls3Terrace} ${
                    tableStyle[getTableStatus(table.number)]
                  }`}
                />
              )}
              <text className={styles.cls4Terrace} transform={text.transform}>
                {table.number}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
};

export default TerracePlanSvg;
