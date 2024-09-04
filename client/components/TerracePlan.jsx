//node modules
import React from "react";
import terraceTables from "./terraceData";
//styles
import * as styles from "../styles/TerracePlan.module.css";

const TerracePlan = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.svgContainer}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
        >
          <rect
            x="564"
            y="263"
            className={styles.st0}
            width="792"
            height="554.25"
          />
          <rect
            x="906.74"
            y="481.36"
            className={styles.st2}
            width="62.94"
            height="63.32"
          />

          {terraceTables.map(({ table, text }) => (
            <g key={table.number}>
              {table.x !== undefined && table.y !== undefined && (
                <rect
                  x={table.x}
                  y={table.y}
                  width={table.width}
                  height={table.height}
                  className={styles.st1}
                />
              )}
              <text className={styles.st3} transform={text.transform}>
                {table.number}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default TerracePlan;
