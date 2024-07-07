import React, { useState } from "react";

import * as styles from "./RestPlan.module.css";

const RestPlan = ({ setActive }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTable = (number) => {
    setSelectedTable(number);
    setActive(number);
  };

  return (
    <div className={styles.svgContainer}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        className={styles.svgContent}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 523.85 784.28"
      >
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

        <g className={styles.table} onClick={() => handleTable(1)}>
          <rect
            className={styles.cls3}
            x="462.61"
            y="702.1"
            width="51.57"
            height="27.91"
          />
          <text className={styles.cls6} transform="translate(485.46 719.97)">
            1
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(2)}>
          <rect
            className={styles.cls3}
            x="462.48"
            y="617.71"
            width="51.19"
            height="26.81"
          />
          <text className={styles.cls6} transform="translate(484.87 636.22)">
            2
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(3)}>
          <rect
            className={styles.cls3}
            x="461.59"
            y="534.22"
            width="52.09"
            height="26.04"
          />
          <text className={styles.cls6} transform="translate(484.48 552.54)">
            3
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(4)}>
          <rect
            className={styles.cls3}
            x="461.59"
            y="452.73"
            width="50.72"
            height="26.72"
          />
          <text className={styles.cls6} transform="translate(483.58 471.27)">
            4
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(5)}>
          <rect
            className={styles.cls3}
            x="459.71"
            y="372.05"
            width="51.57"
            height="25.7"
          />
          <text className={styles.cls6} transform="translate(481.67 389.23)">
            5
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(6)}>
          <rect
            className={styles.cls3}
            x="459.71"
            y="291.88"
            width="50.72"
            height="26.38"
          />
          <text className={styles.cls6} transform="translate(481.84 308.97)">
            6
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(7)}>
          <rect
            className={styles.cls3}
            x="460.69"
            y="211.76"
            width="50.55"
            height="25.53"
          />
          <text className={styles.cls6} transform="translate(482.9 229.24)">
            7
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(8)}>
          <rect
            className={styles.cls3}
            x="461.46"
            y="132.35"
            width="50.55"
            height="25.15"
          />
          <text className={styles.cls6} transform="translate(483.22 150.74)">
            8
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(9)}>
          <rect
            className={styles.cls3}
            x="392.39"
            y="177.67"
            width="50.68"
            height="25.02"
          />
          <text className={styles.cls6} transform="translate(414.35 194.65)">
            9
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(10)}>
          <rect
            className={styles.cls3}
            x="391.29"
            y="255.12"
            width="51.06"
            height="25.02"
          />
          <text className={styles.cls6} transform="translate(410.52 271.63)">
            10
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(11)}>
          <rect
            className={styles.cls3}
            x="391.29"
            y="385.43"
            width="51.06"
            height="26.62"
          />
          <text className={styles.cls6} transform="translate(410.52 404.03)">
            11
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(12)}>
          <rect
            className={styles.cls3}
            x="392.39"
            y="466.01"
            width="50.81"
            height="25.53"
          />
          <text className={styles.cls6} transform="translate(410.63 483.78)">
            12
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(13)}>
          <rect
            className={styles.cls3}
            x="392.39"
            y="592.31"
            width="51.57"
            height="26.68"
          />
          <text className={styles.cls6} transform="translate(411.97 610.08)">
            13
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(14)}>
          <rect
            className={styles.cls3}
            x="313.76"
            y="583.88"
            width="51.32"
            height="27.45"
          />
          <text className={styles.cls6} transform="translate(332.62 601.99)">
            14
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(15)}>
          <rect
            className={styles.cls3}
            x="313.76"
            y="478.61"
            width="50.64"
            height="25.87"
          />
          <text className={styles.cls6} transform="translate(332.71 496.37)">
            15
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(16)}>
          <rect
            className={styles.cls3}
            x="313.76"
            y="374.1"
            width="50.64"
            height="26.89"
          />
          <text className={styles.cls6} transform="translate(333.41 392.61)">
            16
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(17)}>
          <rect
            className={styles.cls3}
            x="313.76"
            y="271.63"
            width="49.11"
            height="26.04"
          />
          <text className={styles.cls6} transform="translate(332.28 289.14)">
            17
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(18)}>
          <rect
            className={styles.cls3}
            x="314.27"
            y="169.88"
            width="50.04"
            height="24.77"
          />
          <text className={styles.cls6} transform="translate(332.59 186.73)">
            18
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(19)}>
          <ellipse
            className={styles.cls3}
            cx="471.96"
            cy="51.78"
            rx="21.19"
            ry="21.7"
          />
          <text className={styles.cls6} transform="translate(464.98 56.69)">
            19
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(20)}>
          <ellipse
            className={styles.cls3}
            cx="383.64"
            cy="54.09"
            rx="21.19"
            ry="21.7"
          />
          <text className={styles.cls6} transform="translate(377.06 59.14)">
            20
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(21)}>
          <ellipse
            className={styles.cls3}
            cx="294.41"
            cy="54.09"
            rx="21.19"
            ry="21.7"
          />
          <text className={styles.cls6} transform="translate(287.83 59.14)">
            21
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(22)}>
          <ellipse
            className={styles.cls3}
            cx="236.55"
            cy="211.46"
            rx="21.19"
            ry="21.7"
          />
          <text className={styles.cls6} transform="translate(229.63 215.2)">
            22
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(23)}>
          <ellipse
            className={styles.cls3}
            cx="148.48"
            cy="211.46"
            rx="21.19"
            ry="21.7"
          />
          <text className={styles.cls6} transform="translate(141.78 214.63)">
            23
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(24)}>
          <rect
            className={styles.cls3}
            x="38.61"
            y="198.78"
            width="24.34"
            height="52.6"
          />
          <text className={styles.cls6} transform="translate(43.3 226.05)">
            24
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(25)}>
          <rect
            className={styles.cls3}
            x="37.07"
            y="302.78"
            width="24.43"
            height="51.66"
          />
          <text className={styles.cls6} transform="translate(42.93 329.65)">
            25
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(26)}>
          <rect
            className={styles.cls3}
            x="70.61"
            y="458.52"
            width="29.87"
            height="29.87"
          />
          <text className={styles.cls6} transform="translate(78.6 477.67)">
            26
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(27)}>
          <rect
            className={styles.cls3}
            x="67.88"
            y="559.29"
            width="30.47"
            height="30.47"
          />
          <text className={styles.cls6} transform="translate(76.95 579.31)">
            27
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(28)}>
          <rect
            className={styles.cls3}
            x="62.1"
            y="707.54"
            width="51.74"
            height="27.06"
          />
          <text className={styles.cls6} transform="translate(81.71 725.23)">
            28
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(29)}>
          <rect
            className={styles.cls3}
            x="140.56"
            y="705.84"
            width="51.91"
            height="27.57"
          />
          <text className={styles.cls6} transform="translate(159.67 724.06)">
            29
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(30)}>
          <rect
            className={styles.cls3}
            x="1.5"
            y="605.84"
            width="42.89"
            height="170.55"
          />
          <text
            className={styles.cls6}
            transform="translate(28.42 702.84) rotate(-90)"
          >
            VIP 30
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(40)}>
          <rect
            className={styles.cls3}
            x="254.27"
            y="504.48"
            width="30.64"
            height="30.64"
          />
          <text className={styles.cls6} transform="translate(263.12 524.61)">
            40
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(41)}>
          <rect
            className={styles.cls3}
            x="254.9"
            y="430.82"
            width="30.32"
            height="30.32"
          />
          <text className={styles.cls6} transform="translate(263.97 450.33)">
            41
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(42)}>
          <rect
            className={styles.cls3}
            x="255.03"
            y="357.54"
            width="30"
            height="30"
          />
          <text className={styles.cls6} transform="translate(263.34 376.89)">
            42
          </text>
        </g>

        <g className={styles.table} onClick={() => handleTable(45)}>
          <rect
            className={styles.cls3}
            x="58.18"
            y="44.9"
            width="115.66"
            height="25.79"
          />
          <text className={styles.cls5} transform="translate(98.19 64.15)">
            VIP 45
          </text>
        </g>
      </svg>
    </div>
  );
};

export default RestPlan;
