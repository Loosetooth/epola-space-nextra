import React from "react";
import { useTheme } from 'next-themes'
import styled from "@emotion/styled";

const Holder = styled.div`
  width: ${props => props.width ? props.width : "100%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`

function LatticeGate(props) {
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "floralwhite" : "black"

  return (
    <Holder {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ? props.width : "80%"}
        height={props.width ? props.width : "80%"}
        viewBox="0 0 39.757 42.834"
        color={strokeColor}
        fill={strokeColor}
      >
        <g transform="translate(-72.231 -94.456)">
          <g >
            <path
              strokeLinecap="round"
              d="M126.53 127.5l-5.822 5.824a.15.15 0 000 .213.15.15 0 00.21 0l5.825-5.824a.15.15 0 000-.213.15.15 0 00-.213 0z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
            <path
              fillRule="evenodd"
              d="M126.64 127.6v1.06l1.326-2.386-2.387 1.326z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
          </g>
          <g strokeLinecap="round">
            <circle
              cx="74.489"
              cy="99.777"
              r="1.131"
              
              strokeWidth="0.2"
            ></circle>
            <circle
              cx="109.52"
              cy="99.777"
              r="1.131"
              
              strokeWidth="0.2"
            ></circle>
            <path
              strokeDasharray="1.2, 1.2"
              d="M82.59 97.536a.15.15 0 00-.11.182l.067.27.057.265.048.267.04.27.01.086a.15.15 0 00.166.133.15.15 0 00.132-.166l-.01-.092-.04-.278-.051-.277-.059-.277-.068-.274a.15.15 0 00-.182-.109zm.32 2.371a.15.15 0 00-.152.147l-.002.078-.014.265-.023.268-.03.264-.04.263-.004.031a.15.15 0 00.119.174.15.15 0 00.175-.12l.006-.036.041-.273.032-.274.023-.275.014-.278.002-.082a.15.15 0 00-.147-.152zm-.36 2.363a.15.15 0 00-.187.098l-.037.113-.09.25-.097.248-.106.245-.111.238a.15.15 0 00.072.2.15.15 0 00.2-.071l.113-.244.11-.254.1-.256.094-.26.038-.117a.15.15 0 00-.098-.19zm-1.01 2.168a.15.15 0 00-.21.04l-.097.138-.16.217-.169.213-.175.209-.133.144a.15.15 0 00.012.213.15.15 0 00.21-.011l.137-.149.182-.215.174-.22.168-.227.097-.143a.15.15 0 00-.037-.209zm-1.796 1.768l-.21.166-.217.16-.223.154-.225.145-.09.053a.15.15 0 00-.052.207.15.15 0 00.205.05l.094-.054.236-.15.228-.16.227-.167.213-.168a.15.15 0 00.025-.21.15.15 0 00-.21-.026zm-1.902 1.21a.15.15 0 00-.115.003l-.047.02-.248.097-.25.09-.254.082-.256.072-.059.014a.15.15 0 00-.107.183.15.15 0 00.182.108l.062-.016.266-.074.261-.086.26-.092.258-.101.05-.022a.15.15 0 00.079-.197.15.15 0 00-.082-.08zm-5.424.364a.15.15 0 00-.181.108.15.15 0 00.109.183l.273.069.278.058.158.03a.15.15 0 00.174-.122.15.15 0 00-.121-.173l-.155-.03-.265-.056zm3.037.229l-.09.01-.265.023-.268.014-.267.004-.268-.004h-.016a.15.15 0 00-.158.142.15.15 0 00.143.157l.021.002.278.004.277-.006.277-.014.276-.023.093-.01a.15.15 0 00.133-.168.15.15 0 00-.166-.131z"
              
              style={{ InkscapeStroke: "none" }}
            ></path>
          </g>
          <g  strokeLinecap="round" strokeWidth="0.2">
            <circle cx="73.168" cy="102.6" r="0.15"></circle>
            <circle cx="73.265" cy="101.75" r="0.15"></circle>
            <circle cx="73.677" cy="102.12" r="0.15"></circle>
            <circle cx="73.92" cy="101.53" r="0.15"></circle>
            <circle cx="74.841" cy="101.68" r="0.15"></circle>
            <circle cx="74.477" cy="102.21" r="0.15"></circle>
            <circle cx="73.92" cy="103.21" r="0.15"></circle>
            <circle cx="73.217" cy="103.96" r="0.15"></circle>
            <circle cx="73.168" cy="104.37" r="0.15"></circle>
            <circle cx="72.95" cy="106.12" r="0.15"></circle>
            <circle cx="73.459" cy="105.32" r="0.15"></circle>
            <circle cx="73.726" cy="105.75" r="0.15"></circle>
            <circle cx="73.798" cy="106.38" r="0.15"></circle>
            <circle cx="73.288" cy="106.88" r="0.15"></circle>
            <circle cx="73.537" cy="107.12" r="0.15"></circle>
            <circle cx="73.983" cy="106.93" r="0.15"></circle>
            <circle cx="74.253" cy="107.34" r="0.15"></circle>
            <circle cx="75.002" cy="107.28" r="0.15"></circle>
            <circle cx="75.212" cy="106.28" r="0.15"></circle>
            <circle cx="76.009" cy="106.93" r="0.15"></circle>
            <circle cx="76.864" cy="106.71" r="0.15"></circle>
            <circle cx="77.318" cy="106.45" r="0.15"></circle>
            <circle cx="78.5" cy="105.03" r="0.15"></circle>
            <circle cx="78.457" cy="106.23" r="0.15"></circle>
            <circle cx="78.863" cy="104.62" r="0.15"></circle>
            <circle cx="78.076" cy="104.14" r="0.15"></circle>
            <circle cx="77.682" cy="103.45" r="0.15"></circle>
            <circle cx="78.045" cy="102.94" r="0.15"></circle>
            <circle cx="78.803" cy="103.46" r="0.15"></circle>
            <circle cx="78.33" cy="103.76" r="0.15"></circle>
            <circle cx="79.069" cy="102.76" r="0.15"></circle>
            <circle cx="79.566" cy="103.05" r="0.15"></circle>
            <circle cx="79.069" cy="103.14" r="0.15"></circle>
            <circle cx="79.621" cy="103.76" r="0.15"></circle>
            <circle cx="80.169" cy="102.99" r="0.15"></circle>
            <circle cx="80.581" cy="103.56" r="0.15"></circle>
            <circle cx="80.726" cy="102.84" r="0.15"></circle>
            <circle cx="81.223" cy="103.36" r="0.15"></circle>
            <circle cx="81.103" cy="101.21" r="0.15"></circle>
            <circle cx="80.581" cy="102.08" r="0.15"></circle>
            <circle cx="81.129" cy="101.92" r="0.15"></circle>
            <circle cx="80.555" cy="100.68" r="0.15"></circle>
            <circle cx="80.041" cy="99.725" r="0.15"></circle>
            <circle cx="79.715" cy="99.819" r="0.15"></circle>
            <circle cx="78.935" cy="101.03" r="0.15"></circle>
            <circle cx="81.395" cy="99.716" r="0.15"></circle>
            <circle cx="81.575" cy="99.339" r="0.15"></circle>
            <circle cx="80.906" cy="100.03" r="0.15"></circle>
            <circle cx="81.772" cy="100.11" r="0.15"></circle>
            <circle cx="82.08" cy="99.022" r="0.15"></circle>
            <circle cx="81.763" cy="98.422" r="0.15"></circle>
            <circle cx="81.258" cy="98.688" r="0.15"></circle>
            <circle cx="80.118" cy="98.962" r="0.15"></circle>
            <circle cx="79.518" cy="98.825" r="0.15"></circle>
            <circle cx="78.687" cy="99.365" r="0.15"></circle>
            <circle cx="78.19" cy="99.228" r="0.15"></circle>
            <circle cx="78.155" cy="99.862" r="0.15"></circle>
            <circle cx="77.941" cy="99.991" r="0.15"></circle>
            <circle cx="78.858" cy="99.751" r="0.15"></circle>
            <circle cx="77.41" cy="99.776" r="0.15"></circle>
            <circle cx="77.453" cy="99.545" r="0.15"></circle>
            <circle cx="77.718" cy="99.416" r="0.15"></circle>
            <circle cx="76.801" cy="99.159" r="0.15"></circle>
            <circle cx="76.339" cy="99.091" r="0.15"></circle>
            <circle cx="76.056" cy="99.434" r="0.15"></circle>
            <circle cx="76.63" cy="99.948" r="0.15"></circle>
            <circle cx="76.347" cy="101.28" r="0.15"></circle>
            <circle cx="76.707" cy="101.32" r="0.15"></circle>
            <circle cx="77.127" cy="101.74" r="0.15"></circle>
            <circle
              cx="-109.5"
              cy="99.777"
              r="1.131"
              transform="scale(-1 1)"
            ></circle>
          </g>
          <path
            strokeDasharray="1.2, 1.2"
            strokeLinecap="round"
            d="M101.4 97.536a.15.15 0 01.11.182l-.069.27-.057.265-.048.267-.04.27-.01.086a.15.15 0 01-.166.133.15.15 0 01-.132-.166l.01-.092.04-.278.051-.277.061-.277.068-.274a.15.15 0 01.182-.109zm-.322 2.371a.15.15 0 01.154.147v.078l.014.265.023.268.031.264.04.263.005.031a.15.15 0 01-.12.174.15.15 0 01-.174-.12l-.008-.036-.041-.273-.032-.274-.023-.275-.014-.278-.002-.082a.15.15 0 01.147-.152zm.36 2.363a.15.15 0 01.189.098l.035.113.09.25.097.248.106.245.111.238a.15.15 0 01-.07.2.15.15 0 01-.201-.071l-.114-.244-.11-.254-.1-.256-.092-.26-.04-.117a.15.15 0 01.098-.19zm1.124 2.145a.15.15 0 01.096.062l.097.14.16.216.169.213.175.209.133.144a.15.15 0 01-.011.213.15.15 0 01-.211-.012l-.135-.148-.184-.215-.174-.22-.166-.227-.1-.143a.15.15 0 01.04-.209.15.15 0 01.111-.023zm1.572 1.76a.15.15 0 01.112.03l.209.167.217.16.222.154.227.145.09.053a.15.15 0 01.05.207.15.15 0 01-.205.05l-.093-.054-.235-.15-.23-.16-.227-.167-.213-.168a.15.15 0 01-.023-.21.15.15 0 01.1-.057zm2.012 1.242a.15.15 0 01.115.002l.047.02.248.097.25.09.254.082.256.072.059.014a.15.15 0 01.109.183.15.15 0 01-.184.108l-.062-.016-.264-.074-.263-.086-.26-.092-.256-.101-.053-.022a.15.15 0 01-.078-.197.15.15 0 01.082-.08zm5.424.363a.15.15 0 01.182.108.15.15 0 01-.11.183l-.273.069-.276.058-.16.03a.15.15 0 01-.174-.122.15.15 0 01.121-.173l.155-.03.267-.056zm-3.035.229l.09.01.265.023.266.014.267.004.27-.004h.015a.15.15 0 01.157.142.15.15 0 01-.143.157l-.021.002-.278.004-.277-.006-.277-.014-.276-.023-.093-.01a.15.15 0 01-.131-.168.15.15 0 01.166-.131z"
            
            style={{ InkscapeStroke: "none" }}
          ></path>
          <g  strokeLinecap="round" strokeWidth="0.2">
            <circle
              cx="-110.82"
              cy="102.6"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.72"
              cy="101.75"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.31"
              cy="102.12"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.07"
              cy="101.53"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-109.15"
              cy="101.68"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-109.51"
              cy="102.21"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.07"
              cy="103.21"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.82"
              cy="104.37"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-111.04"
              cy="106.12"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.53"
              cy="105.32"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.26"
              cy="105.75"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.19"
              cy="106.38"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.7"
              cy="106.88"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110.45"
              cy="107.12"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-110"
              cy="106.93"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-109.73"
              cy="107.34"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-108.98"
              cy="107.28"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-108.77"
              cy="106.28"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.98"
              cy="106.93"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.12"
              cy="106.71"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.67"
              cy="106.45"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.49"
              cy="105.03"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.53"
              cy="106.23"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.12"
              cy="104.62"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.91"
              cy="104.14"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.3"
              cy="103.45"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.94"
              cy="102.94"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.18"
              cy="103.46"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.66"
              cy="103.76"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-104.92"
              cy="102.76"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-104.42"
              cy="103.05"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-104.92"
              cy="103.14"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-104.37"
              cy="103.76"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.82"
              cy="102.99"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.41"
              cy="103.56"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.26"
              cy="102.84"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.76"
              cy="103.36"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.88"
              cy="101.21"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.41"
              cy="102.08"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.86"
              cy="101.92"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.43"
              cy="100.68"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.95"
              cy="99.725"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-104.27"
              cy="99.819"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.05"
              cy="101.03"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.59"
              cy="99.716"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.41"
              cy="99.339"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.08"
              cy="100.03"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.21"
              cy="100.11"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-101.91"
              cy="99.022"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.22"
              cy="98.422"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-102.73"
              cy="98.688"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-103.87"
              cy="98.962"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-104.47"
              cy="98.825"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.3"
              cy="99.365"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.8"
              cy="99.228"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.83"
              cy="99.862"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.05"
              cy="99.991"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-105.13"
              cy="99.751"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.58"
              cy="99.776"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.53"
              cy="99.545"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.27"
              cy="99.416"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.18"
              cy="99.159"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.65"
              cy="99.091"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.93"
              cy="99.434"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.36"
              cy="99.948"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.64"
              cy="101.28"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-107.28"
              cy="101.32"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="-106.86"
              cy="101.74"
              r="0.15"
              transform="scale(-1 1)"
            ></circle>
            <circle
              cx="109.52"
              cy="-135.04"
              r="1.131"
              transform="scale(1 -1)"
            ></circle>
            <circle
              cx="-109.5"
              cy="-135.04"
              r="1.131"
              transform="scale(-1)"
            ></circle>
          </g>
          <path
            strokeDasharray="1.2, 1.2"
            strokeLinecap="round"
            d="M101.4 137.29a.15.15 0 00.11-.182l-.069-.27-.057-.265-.048-.27-.04-.267-.01-.086a.15.15 0 00-.166-.133.15.15 0 00-.132.166l.01.092.04.278.051.277.061.277.068.274a.15.15 0 00.182.109zm-.322-2.371a.15.15 0 00.154-.147v-.078l.014-.267.023-.266.031-.264.04-.263.005-.031a.15.15 0 00-.12-.174.15.15 0 00-.174.12l-.008.036-.041.273-.032.274-.023.275-.014.278-.002.082a.15.15 0 00.147.152zm.36-2.363a.15.15 0 00.189-.098l.035-.113.09-.25.097-.248.106-.245.111-.238a.15.15 0 00-.07-.2.15.15 0 00-.201.071l-.114.244-.11.252-.1.258-.092.26-.04.117a.15.15 0 00.098.19zm1.124-2.145a.15.15 0 00.096-.062l.097-.14.16-.216.169-.213.175-.209.133-.144a.15.15 0 00-.011-.213.15.15 0 00-.211.01l-.135.15-.184.215-.174.22-.166.227-.1.143a.15.15 0 00.04.209.15.15 0 00.111.023zm1.572-1.76a.15.15 0 00.112-.03l.209-.167.217-.16.222-.154.227-.145.09-.055a.15.15 0 00.05-.205.15.15 0 00-.205-.05l-.093.054-.235.15-.23.159-.227.168-.213.168a.15.15 0 00-.023.21.15.15 0 00.1.057zm2.127-1.244l.047-.02.248-.097.25-.09.254-.082.256-.072.059-.014a.15.15 0 00.11-.183.15.15 0 00-.185-.108l-.062.016-.264.074-.263.086-.26.092-.256.101-.053.022a.15.15 0 00-.078.197.15.15 0 00.197.078zm5.309-.361a.15.15 0 00.182-.108.15.15 0 00-.11-.183l-.273-.069-.276-.058-.16-.03a.15.15 0 00-.174.122.15.15 0 00.122.173l.154.03.267.056zm-3.035-.229l.09-.01.265-.023.266-.014.267-.004.27.004h.016a.15.15 0 00.156-.142.15.15 0 00-.143-.157l-.021-.002-.278-.004-.277.006-.277.014-.276.024-.093.01a.15.15 0 00-.131.168.15.15 0 00.166.13z"
            
            style={{ InkscapeStroke: "none" }}
          ></path>
          <g  strokeLinecap="round">
            <g strokeWidth="0.2">
              <circle
                cx="-110.82"
                cy="-132.22"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.72"
                cy="-133.07"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.31"
                cy="-132.71"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.07"
                cy="-133.29"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-109.15"
                cy="-133.14"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-109.51"
                cy="-132.61"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.07"
                cy="-131.61"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.77"
                cy="-130.86"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.82"
                cy="-130.45"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-111.04"
                cy="-128.71"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.53"
                cy="-129.51"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.26"
                cy="-129.07"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.19"
                cy="-128.44"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.7"
                cy="-127.94"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110.45"
                cy="-127.7"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-110"
                cy="-127.89"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-109.73"
                cy="-127.48"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-108.98"
                cy="-127.54"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-108.77"
                cy="-128.54"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.98"
                cy="-127.89"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.12"
                cy="-128.11"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.67"
                cy="-128.38"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.49"
                cy="-129.79"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.53"
                cy="-128.59"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.12"
                cy="-130.2"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.91"
                cy="-130.68"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.3"
                cy="-131.38"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.94"
                cy="-131.88"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.18"
                cy="-131.36"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.66"
                cy="-131.06"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-104.92"
                cy="-132.07"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-104.42"
                cy="-131.77"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-104.92"
                cy="-131.68"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-104.37"
                cy="-131.06"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.82"
                cy="-131.83"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.41"
                cy="-131.27"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.26"
                cy="-131.99"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.76"
                cy="-131.46"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.88"
                cy="-133.61"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.41"
                cy="-132.74"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.86"
                cy="-132.9"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.43"
                cy="-134.14"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.95"
                cy="-135.1"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-104.27"
                cy="-135"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.05"
                cy="-133.79"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.59"
                cy="-135.1"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.41"
                cy="-135.48"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.08"
                cy="-134.79"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.21"
                cy="-134.71"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-101.91"
                cy="-135.8"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.22"
                cy="-136.4"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-102.73"
                cy="-136.13"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-103.87"
                cy="-135.86"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-104.47"
                cy="-136"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.3"
                cy="-135.46"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.8"
                cy="-135.59"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.83"
                cy="-134.96"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.05"
                cy="-134.83"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-105.13"
                cy="-135.07"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.58"
                cy="-135.04"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.53"
                cy="-135.28"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.27"
                cy="-135.4"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.18"
                cy="-135.66"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.65"
                cy="-135.73"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.93"
                cy="-135.39"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.36"
                cy="-134.87"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.64"
                cy="-133.54"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-107.28"
                cy="-133.5"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-106.86"
                cy="-133.08"
                r="0.15"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="-74.513"
                cy="-135.04"
                r="1.131"
                transform="scale(-1)"
              ></circle>
              <circle
                cx="74.538"
                cy="-135.04"
                r="1.131"
                transform="scale(1 -1)"
              ></circle>
            </g>
            <path
              strokeDasharray="1.2, 1.2"
              strokeWidth="0.3"
              d="M79.61 129.05h-1.053v-1.053H78.2v1.053h-1.054v.356h1.054v1.053h.356v-1.053h1.053z"
              ariaLabel="+"
            ></path>
          </g>
          <path
            strokeDasharray="1.2, 1.2"
            strokeLinecap="round"
            d="M82.637 137.29a.15.15 0 01-.11-.182l.069-.27.057-.265.048-.27.04-.267.01-.086a.15.15 0 01.166-.133.15.15 0 01.132.166l-.01.092-.04.278-.051.277-.059.277-.07.274a.15.15 0 01-.182.109zm.322-2.371a.15.15 0 01-.154-.147v-.078l-.014-.267-.023-.266-.031-.264-.04-.263-.005-.031a.15.15 0 01.12-.174.15.15 0 01.174.12l.008.036.041.273.032.274.023.275.014.278.002.082a.15.15 0 01-.147.152zm-.36-2.363a.15.15 0 01-.189-.098l-.035-.113-.09-.25-.097-.248-.106-.245-.111-.238a.15.15 0 01.07-.2.15.15 0 01.201.071l.114.244.11.252.1.258.092.26.04.117a.15.15 0 01-.098.19zm-1.013-2.168a.15.15 0 01-.207-.04l-.098-.138-.16-.217-.168-.213-.175-.209-.133-.144a.15.15 0 01.011-.213.15.15 0 01.211.01l.137.15.182.215.174.22.166.227.1.143a.15.15 0 01-.04.209zm-1.795-1.768l-.209-.166-.216-.16-.223-.154-.227-.145-.09-.055a.15.15 0 01-.05-.205.15.15 0 01.205-.05l.093.054.235.15.23.159.227.168.213.168a.15.15 0 01.023.21.15.15 0 01-.21.026zm-1.9-1.21a.15.15 0 01-.115-.003l-.047-.02-.248-.097-.25-.09-.254-.082-.256-.072-.059-.014a.15.15 0 01-.109-.183.15.15 0 01.184-.108l.062.016.266.074.261.086.26.092.256.101.053.022a.15.15 0 01.078.197.15.15 0 01-.082.08zm-5.424-.364a.15.15 0 01-.182-.108.15.15 0 01.11-.183l.273-.069.276-.058.16-.03a.15.15 0 01.174.122.15.15 0 01-.121.173l-.155.03-.267.056zm3.035-.229l-.088-.01-.267-.023-.266-.014-.267-.004-.27.004h-.016a.15.15 0 01-.156-.142.15.15 0 01.143-.157l.021-.002.278-.004.277.006.277.014.276.023.093.01a.15.15 0 01.133.168.15.15 0 01-.168.131z"
            
            style={{ InkscapeStroke: "none" }}
          ></path>
          <g
            
            strokeLinecap="round"
            strokeWidth="0.2"
            transform="scale(1 -1)"
          >
            <circle cx="73.217" cy="-132.22" r="0.15"></circle>
            <circle cx="73.314" cy="-133.07" r="0.15"></circle>
            <circle cx="73.726" cy="-132.71" r="0.15"></circle>
            <circle cx="73.968" cy="-133.29" r="0.15"></circle>
            <circle cx="74.889" cy="-133.14" r="0.15"></circle>
            <circle cx="74.525" cy="-132.61" r="0.15"></circle>
            <circle cx="73.968" cy="-131.61" r="0.15"></circle>
            <circle cx="73.265" cy="-130.86" r="0.15"></circle>
            <circle cx="73.217" cy="-130.45" r="0.15"></circle>
            <circle cx="72.998" cy="-128.71" r="0.15"></circle>
            <circle cx="73.507" cy="-129.51" r="0.15"></circle>
            <circle cx="73.774" cy="-129.07" r="0.15"></circle>
            <circle cx="73.847" cy="-128.44" r="0.15"></circle>
            <circle cx="73.337" cy="-127.94" r="0.15"></circle>
            <circle cx="73.585" cy="-127.7" r="0.15"></circle>
            <circle cx="74.031" cy="-127.89" r="0.15"></circle>
            <circle cx="74.301" cy="-127.48" r="0.15"></circle>
            <circle cx="75.051" cy="-127.54" r="0.15"></circle>
            <circle cx="75.261" cy="-128.54" r="0.15"></circle>
            <circle cx="76.058" cy="-127.89" r="0.15"></circle>
            <circle cx="76.912" cy="-128.11" r="0.15"></circle>
            <circle cx="77.367" cy="-128.38" r="0.15"></circle>
            <circle cx="78.124" cy="-130.68" r="0.15"></circle>
            <circle cx="77.73" cy="-131.38" r="0.15"></circle>
            <circle cx="78.094" cy="-131.88" r="0.15"></circle>
            <circle cx="78.851" cy="-131.36" r="0.15"></circle>
            <circle cx="78.379" cy="-131.06" r="0.15"></circle>
            <circle cx="79.118" cy="-132.07" r="0.15"></circle>
            <circle cx="79.615" cy="-131.77" r="0.15"></circle>
            <circle cx="79.118" cy="-131.68" r="0.15"></circle>
            <circle cx="79.669" cy="-131.06" r="0.15"></circle>
            <circle cx="80.218" cy="-131.83" r="0.15"></circle>
            <circle cx="80.629" cy="-131.27" r="0.15"></circle>
            <circle cx="80.775" cy="-131.99" r="0.15"></circle>
            <circle cx="81.272" cy="-131.46" r="0.15"></circle>
            <circle cx="81.152" cy="-133.61" r="0.15"></circle>
            <circle cx="80.629" cy="-132.74" r="0.15"></circle>
            <circle cx="81.177" cy="-132.9" r="0.15"></circle>
            <circle cx="80.603" cy="-134.14" r="0.15"></circle>
            <circle cx="80.089" cy="-135.1" r="0.15"></circle>
            <circle cx="79.763" cy="-135" r="0.15"></circle>
            <circle cx="78.984" cy="-133.79" r="0.15"></circle>
            <circle cx="81.443" cy="-135.1" r="0.15"></circle>
            <circle cx="81.623" cy="-135.48" r="0.15"></circle>
            <circle cx="80.955" cy="-134.79" r="0.15"></circle>
            <circle cx="81.82" cy="-134.71" r="0.15"></circle>
            <circle cx="82.129" cy="-135.8" r="0.15"></circle>
            <circle cx="81.812" cy="-136.4" r="0.15"></circle>
            <circle cx="81.306" cy="-136.13" r="0.15"></circle>
            <circle cx="80.166" cy="-135.86" r="0.15"></circle>
            <circle cx="79.566" cy="-136" r="0.15"></circle>
            <circle cx="78.735" cy="-135.46" r="0.15"></circle>
            <circle cx="78.238" cy="-135.59" r="0.15"></circle>
            <circle cx="78.204" cy="-134.96" r="0.15"></circle>
            <circle cx="77.99" cy="-134.83" r="0.15"></circle>
            <circle cx="78.907" cy="-135.07" r="0.15"></circle>
            <circle cx="77.458" cy="-135.04" r="0.15"></circle>
            <circle cx="77.501" cy="-135.28" r="0.15"></circle>
            <circle cx="77.767" cy="-135.4" r="0.15"></circle>
            <circle cx="76.85" cy="-135.66" r="0.15"></circle>
            <circle cx="76.387" cy="-135.73" r="0.15"></circle>
            <circle cx="76.104" cy="-135.39" r="0.15"></circle>
            <circle cx="76.678" cy="-134.87" r="0.15"></circle>
            <circle cx="76.396" cy="-133.54" r="0.15"></circle>
            <circle cx="76.756" cy="-133.5" r="0.15"></circle>
            <circle cx="77.175" cy="-133.08" r="0.15"></circle>
          </g>
          <path
            strokeDasharray="1.2, 1.2"
            strokeLinecap="round"
            d="M91.918 107.79l-.262.002-.26.01-.257.016-.186.015a.15.15 0 00-.137.164.15.15 0 00.163.137l.181-.018.252-.013.252-.01.254-.004.244.004a.15.15 0 00.152-.149.15.15 0 00-.148-.152zm1.463.102a.15.15 0 00-.17.128.15.15 0 00.129.168l.078.012.244.04.242.044.239.05.238.058.117.03a.15.15 0 00.182-.107.15.15 0 00-.106-.183l-.12-.031-.245-.06-.246-.05-.25-.047-.25-.04zm-3.631.125l-.123.025-.244.059-.242.064-.239.068-.238.077-.088.03a.15.15 0 00-.094.19.15.15 0 00.192.094l.086-.03.228-.073.233-.067.236-.062.236-.057.12-.025a.15.15 0 00.115-.178.15.15 0 00-.178-.115zm5.98.496a.15.15 0 00-.195.084.15.15 0 00.084.195l.133.053.22.093.217.098.213.106.211.107.077.043a.15.15 0 00.203-.06.15.15 0 00-.059-.204l-.08-.045-.217-.11-.22-.108-.223-.102-.227-.096zm-8.167.28a.15.15 0 00-.114.007l-.148.072-.219.112-.213.117-.21.123-.208.125-.066.043a.15.15 0 00-.045.207.15.15 0 00.207.045l.062-.04.202-.122.205-.12.207-.113.21-.107.147-.07a.15.15 0 00.069-.202.15.15 0 00-.086-.076zm10.305.878a.15.15 0 00-.21.035.15.15 0 00.036.209l.117.084.187.14.186.145.18.149.177.154.075.066a.15.15 0 00.21-.01.15.15 0 00-.01-.213l-.076-.068-.183-.158-.186-.155-.19-.148-.193-.145zm-12.36.4a.15.15 0 00-.109.033l-.119.1-.182.158-.18.162-.173.166-.17.17-.068.073a.15.15 0 00.004.21.15.15 0 00.212-.003l.067-.07.166-.165.168-.162.174-.156.175-.154.118-.096a.15.15 0 00.02-.211.15.15 0 00-.102-.055zm13.948 1.215a.15.15 0 00-.014.211l.076.09.148.18.145.183.139.186.134.191.075.11a.15.15 0 00.209.04.15.15 0 00.039-.209l-.075-.113-.14-.195-.143-.194-.148-.187-.154-.186-.079-.091a.15.15 0 00-.212-.016zm-15.527.545a.15.15 0 00-.21.03l-.074.099-.138.195-.135.2-.129.203-.125.207-.066.113a.15.15 0 00.054.205.15.15 0 00.205-.055l.065-.111.12-.201.126-.196.13-.193.136-.191.072-.096a.15.15 0 00-.031-.209zm16.893 1.422a.15.15 0 00-.065.201l.04.078.1.213.096.213.09.217.086.22.053.145a.15.15 0 00.191.09.15.15 0 00.09-.192l-.053-.148-.088-.227-.093-.224-.1-.221-.103-.219-.041-.08a.15.15 0 00-.203-.066zm-18.225.637a.15.15 0 00-.082.082l-.038.091-.09.227-.081.228-.077.23-.072.235-.039.14a.15.15 0 00.105.185.15.15 0 00.184-.104l.04-.137.068-.226.074-.225.08-.22.086-.221.037-.088a.15.15 0 00-.08-.195.15.15 0 00-.115-.002zm19.064 1.605a.15.15 0 00-.114.18l.018.086.047.236.04.236.034.24.03.243.01.125a.15.15 0 00.163.135.15.15 0 00.137-.163l-.012-.129-.03-.25-.034-.246-.043-.246-.047-.242-.022-.092a.15.15 0 00-.178-.113zm-19.621.693a.15.15 0 00-.17.127l-.016.12-.03.25-.023.25-.015.251-.01.254-.002.09a.15.15 0 00.148.153.15.15 0 00.152-.149v-.086l.01-.246.016-.244.023-.242.028-.242.015-.116a.15.15 0 00-.127-.17zm19.879 1.36a.15.15 0 00-.153.146l-.004.25-.01.248-.015.245-.022.242-.023.197a.15.15 0 00.13.166.15.15 0 00.168-.13l.024-.202.021-.25.018-.254.01-.254.002-.254a.15.15 0 00-.146-.15zm-19.96 1.033a.15.15 0 00-.13.168l.025.21.035.247.041.246.049.242.053.24.004.014a.15.15 0 00.181.11.15.15 0 00.11-.182l-.002-.01-.053-.232-.047-.237-.039-.238-.035-.238-.024-.207a.15.15 0 00-.168-.133zm19.694 1.346a.15.15 0 00-.182.11l-.016.06-.062.23-.07.227-.075.224-.08.221-.062.158a.15.15 0 00.086.196.15.15 0 00.195-.086l.062-.162.082-.229.078-.232.07-.233.067-.236.016-.067a.15.15 0 00-.11-.181zm-19.176.992a.15.15 0 00-.086.195l.086.217.091.225.1.22.105.217.11.217.008.016a.15.15 0 00.203.06.15.15 0 00.06-.205l-.006-.012-.107-.209-.1-.21-.097-.213-.09-.217-.084-.215a.15.15 0 00-.194-.086zm18.33 1.246a.15.15 0 00-.204.06l-.025.05-.117.202-.121.2-.125.197-.131.193-.111.158a.15.15 0 00.035.21.15.15 0 00.209-.038l.115-.16.133-.199.13-.201.126-.207.119-.21.027-.05a.15.15 0 00-.06-.205zm-17.135.865a.15.15 0 00-.114.026.15.15 0 00-.035.209l.121.17.145.191.148.19.152.185.157.182.033.035a.15.15 0 00.213.011.15.15 0 00.01-.212l-.031-.034-.153-.175-.148-.18-.143-.184-.14-.187-.12-.166a.15.15 0 00-.095-.06zm15.764 1.098a.15.15 0 00-.211.01l-.016.018-.162.17-.164.164-.17.162-.172.156-.17.146a.15.15 0 00-.016.213.15.15 0 00.211.016l.174-.15.178-.163.174-.166.17-.17.166-.173.02-.02a.15.15 0 00-.012-.213zm-14.094.719a.15.15 0 00-.211.015.15.15 0 00.013.213l.135.115.186.153.189.15.193.145.198.14.062.041a.15.15 0 00.21-.039.15.15 0 00-.042-.209l-.058-.039-.192-.137-.187-.14-.184-.145-.182-.148zm12.084.816l-.2.127-.2.123-.206.12-.207.113-.21.107a.15.15 0 00-.065.203.15.15 0 00.2.065l.216-.112.214-.115.21-.123.208-.127.204-.13.004-.003a.15.15 0 00.039-.207.15.15 0 00-.207-.04zm-10.137.516a.15.15 0 00-.204.064.15.15 0 00.067.201l.148.078.219.106.225.101.226.098.229.092.064.023a.15.15 0 00.191-.09.15.15 0 00-.087-.19l-.061-.024-.223-.088-.218-.094-.217-.1-.215-.103zm8.025.539l-.01.004-.227.078-.23.072-.233.069-.234.062-.2.047a.15.15 0 00-.11.18.15.15 0 00.181.111l.201-.047.243-.064.24-.07.236-.075.234-.08.014-.006a.15.15 0 00.088-.193.15.15 0 00-.193-.088zm-5.82.293a.15.15 0 00-.18.111.15.15 0 00.111.182l.201.047.248.052.249.047.25.041.246.033a.15.15 0 00.168-.128.15.15 0 00-.127-.168l-.243-.034-.244-.039-.24-.045-.24-.05zm3.523.234l-.092.01-.25.022-.25.015-.254.01-.254.004-.08-.002a.15.15 0 00-.152.149.15.15 0 00.148.152h.084l.262-.002.26-.01.26-.016.255-.023.096-.01a.15.15 0 00.133-.166.15.15 0 00-.166-.133z"
            
            style={{ InkscapeStroke: "none" }}
          ></path>
          <g
            
            strokeDasharray="1.2, 1.2"
            strokeLinecap="round"
            strokeWidth="0.3"
          >
            <path
              d="M77.559 104.35c0-1.238-.463-1.988-1.518-1.988-.952 0-1.564.73-1.564 1.851 0 1.12.593 1.812 1.55 1.812.783 0 1.323-.444 1.46-1.186h-.547c-.15.45-.456.684-.893.684-.632 0-.99-.476-1.003-1.173zm-2.502-.443c.045-.632.43-1.043.977-1.043.56 0 .945.456.945 1.043zM109.66 104.35c0-1.238-.463-1.988-1.518-1.988-.952 0-1.564.73-1.564 1.851 0 1.12.593 1.812 1.55 1.812.783 0 1.323-.444 1.46-1.186h-.547c-.15.45-.456.684-.893.684-.632 0-.99-.476-1.003-1.173zm-2.502-.443c.045-.632.43-1.043.977-1.043.56 0 .945.456.945 1.043zM109.66 131.08c0-1.238-.463-1.988-1.518-1.988-.952 0-1.564.73-1.564 1.851s.593 1.812 1.55 1.812c.783 0 1.323-.444 1.46-1.186h-.547c-.15.45-.456.684-.893.684-.632 0-.99-.476-1.003-1.173zm-2.502-.443c.045-.632.43-1.043.977-1.043.56 0 .945.456.945 1.043zM77.484 131.21c0-1.238-.463-1.988-1.518-1.988-.952 0-1.564.73-1.564 1.851 0 1.12.593 1.812 1.55 1.812.783 0 1.323-.444 1.46-1.186h-.547c-.15.45-.456.684-.893.684-.632 0-.99-.476-1.003-1.173zm-2.502-.443c.045-.632.43-1.043.977-1.043.56 0 .945.456.945 1.043z"
              ariaLabel="e"
            ></path>
            <path
              d="M79.575 102.03h-2.19v.492h2.19zM111.77 128.82h-2.19v.492h2.19z"
              ariaLabel="-"
            ></path>
            <path
              d="M111.99 102.5h-1.053v-1.053h-.356v1.053h-1.054v.356h1.054v1.053h.356v-1.053h1.053z"
              ariaLabel="+"
            ></path>
          </g>
          <path
            strokeLinecap="round"
            d="M74.49 94.725a.15.15 0 00-.15.15v3.155a.15.15 0 00.15.148.15.15 0 00.148-.148v-3.155a.15.15 0 00-.148-.15z"
            
            style={{ InkscapeStroke: "none" }}
          ></path>
          <path
            
            strokeLinecap="round"
            strokeWidth="0.3"
            d="M87.503 96.958v.757h.392v-.757h.467v-.352h-.467V94.56h-.29l-1.433 1.985v.414zm0-.352h-.988l.988-1.38zm1.838.646h-.463v.463h.463zm1.749-.294v.757h.391v-.757h.468v-.352h-.468V94.56h-.289l-1.433 1.985v.414zm0-.352h-.988l.988-1.38zm3.288-1.223h-.387v-.365c0-.156.09-.236.258-.236.031 0 .045 0 .13.004v-.307a.882.882 0 00-.21-.022c-.342 0-.547.195-.547.53v.395h-.312v.303h.312v2.029h.37v-2.03h.386zm.356 0v2.331h.374V96.25c0-.338.245-.61.548-.61.275 0 .431.17.431.468v1.606h.374V96.25c0-.338.245-.61.547-.61.272 0 .432.174.432.468v1.606h.374v-1.748c0-.419-.24-.65-.677-.65-.311 0-.498.093-.716.356-.138-.25-.325-.356-.627-.356-.312 0-.517.116-.717.396v-.33z"
            ariaLabel="4.4 fm"
          ></path>
          <g >
            <path
              strokeLinecap="round"
              d="M101.18 116.66a.15.15 0 00-.15.15.15.15 0 00.15.15h8.236a.15.15 0 00.149-.15.15.15 0 00-.149-.15z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
            <path
              fillRule="evenodd"
              d="M101.18 116.81l.75-.75-2.625.75 2.625.75z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
          </g>
          <path
            strokeLinecap="round"
            d="M109.52 94.725a.15.15 0 00-.15.15v3.155a.15.15 0 00.15.148.15.15 0 00.15-.148v-3.155a.15.15 0 00-.15-.15z"
            
            style={{ InkscapeStroke: "none" }}
          ></path>
          <g >
            <path
              strokeLinecap="round"
              d="M123.77 116.66a.15.15 0 00-.15.15.15.15 0 00.15.15h8.236a.15.15 0 00.15-.15.15.15 0 00-.15-.15z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
            <path
              fillRule="evenodd"
              d="M132 116.81l-.75.75 2.625-.75-2.625-.75z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
          </g>
          <circle
            cx="-34.706"
            cy="151.4"
            r="0.15"
            
            strokeLinecap="round"
            strokeWidth="0.2"
            transform="rotate(-45)"
          ></circle>
          <path
            
            strokeLinecap="round"
            strokeWidth="0.3"
            d="M88.676 121.61l.535.535.277-.277-.535-.535.33-.33-.248-.249-.33.33-1.448-1.447-.205.205.39 2.416.293.293zm-.249-.249l-.698.699-.277-1.674zm1.756-.843l-.327.327.327.328.328-.328zm-.604-2.719c.246-.245.538-.248.774-.012.29.29.164.522-.198.897l.236.236.035-.035.113-.12c.305-.304.601-.323.869-.056.28.28.273.62-.016.91-.302.302-.601.298-.944-.006l-.277.276c.52.45.991.45 1.457-.015.46-.46.481-1.03.06-1.45-.283-.284-.551-.331-.91-.155.126-.29.073-.55-.15-.774-.385-.384-.87-.359-1.294.066-.45.45-.444.935.022 1.42l.277-.278c-.236-.248-.406-.55-.054-.903zm2.845-2.165l-.274.274-.258-.258c-.11-.11-.104-.23.016-.35l.094-.087-.217-.218a.881.881 0 00-.164.133c-.242.242-.249.525-.013.761l.28.28-.22.22.214.214.22-.22 1.435 1.435.262-.261-1.435-1.435.273-.274zm.251-.251l1.65 1.649.264-.265-1.036-1.035c-.239-.24-.258-.604-.044-.818.195-.195.425-.186.636.025l1.136 1.136.264-.264-1.035-1.036c-.24-.239-.258-.604-.044-.818.192-.192.428-.182.636.026l1.136 1.136.264-.265-1.237-1.236c-.296-.296-.63-.29-.938.019-.22.22-.286.418-.254.758-.274-.079-.482-.022-.696.192-.22.22-.283.447-.226.786l-.233-.232z"
            ariaLabel="4.3 fm"
          ></path>
          <g >
            <path
              strokeLinecap="round"
              d="M111.26 143.03a.15.15 0 00-.213.004l-4.555 4.717a.15.15 0 00.004.21.15.15 0 00.211-.001l4.557-4.717a.15.15 0 00-.004-.213z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
            <path
              fillRule="evenodd"
              d="M106.6 147.85l-.018-1.06-1.285 2.409 2.363-1.367z"
              style={{ InkscapeStroke: "none" }}
              transform="translate(-24.586 -20.418)"
            ></path>
          </g>
        </g>
      </svg>
      <div style={{width: "100%", textAlign: "center", margin: '1rem'}}>
        {...React.Children.toArray(props.children)}
      </div>
    </Holder>
  );
}

export default LatticeGate;