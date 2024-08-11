//node modules
import React, { useState } from "react";
import tablesData from "./tablesData";
// UI library
import { DatePicker } from "antd";
import Legend from "./Legend";
//styles
import "../styles/App.module.css";
import * as styles from "../styles/RestPlan.module.css";

const RestPlan = ({ setActive, view }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTable = (number) => {
    setSelectedTable(number);
    setActive(number);
  };

  return (
    <div className={styles.svgContainer}>
      <Legend />
      <div className={styles.datePicker}>
        <DatePicker showTime />
      </div>
      {view === "Rest Plan" && (
        <svg
          id="Layer_1"
          data-name="Layer 1"
          className={styles.svgContent}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 523.85 784.28"
        >
          {/* Static components */}

          <rect x="1.5" y="1.5" fill="#ffffff" width="520.85" height="781.28" />

          <line
            className={styles.cls1}
            x1="1.5"
            y1="119.46"
            x2="214.18"
            y2="119.46"
          />
          <line
            className={styles.cls1}
            x1="1.5"
            y1="372.99"
            x2="27.29"
            y2="372.99"
          />
          <line
            className={styles.cls2}
            x1="1.5"
            y1="432.73"
            x2="27.29"
            y2="432.73"
          />

          <rect
            className={styles.cls2}
            x="395.33"
            y="115.82"
            width="15.19"
            height="14.3"
          />
          <rect
            className={styles.cls2}
            x="393.73"
            y="325.76"
            width="15.57"
            height="14.55"
          />
          <rect
            className={styles.cls2}
            x="394.44"
            y="540.22"
            width="15.45"
            height="14.49"
          />

          <g className={styles.bar}>
            <ellipse
              className={styles.cls3}
              cx="199.8"
              cy="338.95"
              rx="47.15"
              ry="54.3"
            />
            <ellipse
              className={styles.cls3}
              cx="199.89"
              cy="577.48"
              rx="47.15"
              ry="54.3"
            />
            <rect
              className={styles.cls4}
              x="152.65"
              y="338.95"
              width="94.3"
              height="231.4"
            />
            <line
              className={styles.cls3}
              x1="152.74"
              y1="335.54"
              x2="152.98"
              y2="572.03"
            />
            <line
              className={styles.cls3}
              x1="247.04"
              y1="336.14"
              x2="246.95"
              y2="570.35"
            />

            <ellipse
              className={styles.cls3}
              cx="269.59"
              cy="574.52"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="265.32"
              cy="607.13"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="244.94"
              cy="635.25"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="218.26"
              cy="653.39"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="129.41"
              cy="576.82"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="132.65"
              cy="611.33"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="150.36"
              cy="639.18"
              rx="12.8"
              ry="13.11"
            />
            <ellipse
              className={styles.cls3}
              cx="180.31"
              cy="653.39"
              rx="12.8"
              ry="13.11"
            />
          </g>

          {/* Static components */}

          {tablesData.map(({ table, text }) => (
            <g
              key={table.number}
              className={styles.table}
              onClick={() => handleTable(table.number)}
            >
              {table.x !== undefined && table.y !== undefined ? (
                <rect
                  className={styles.cls3}
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                />
              ) : (
                <ellipse
                  className={styles.cls3}
                  cx={table.cx}
                  cy={table.cy}
                  rx={table.rx}
                  ry={table.ry}
                />
              )}
              <text className={styles.cls6} transform={text.transform}>
                {table.number}
              </text>
            </g>
          ))}
        </svg>
      )}

      {view === "Reservations"}
      {view === "Ponton Plan"}
      {view === "Terrace Plan"}
    </div>
  );
};

export default RestPlan;
