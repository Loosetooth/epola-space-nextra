import React from "react";
import { useTheme } from 'next-themes'
import styled from "@emotion/styled";

const LatticeHolder = styled.div`
  width: ${props => props.width ? props.width : "100%"};
  display: flex;
  justify-content: center;
`

function LatticeImage(props) {
  const { resolvedTheme } = useTheme();

  const strokeColor = resolvedTheme === "dark" ? "floralwhite" : "black"

  return (
    <LatticeHolder {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ? props.width : "274.794"}
        height={props.width ? props.width : "249.441"}
        viewBox="0 0 72.706 65.998"
        fill={strokeColor}
      >
        <g strokeLinecap="round" strokeLinejoin="round">
          <g
            strokeWidth="0.566"
            transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.88358 0 0 -.88356 141.81 381.39)"
          >
            <circle
              cx="113.63"
              cy="133.05"
              r="3.393"
              fill="none"
              stroke={strokeColor}
            ></circle>
            <path
              d="M113.99 133.41v2.119h-.728v-2.119h-2.099v-.723h2.1v-2.118h.727v2.118h2.099v.723z"
              aria-label="+"
            ></path>
          </g>
          <g
            strokeWidth="0.5"
            transform="translate(-71.323 -100.21) translate(61.959 -116.59) translate(-83.416 112.92)"
          >
            <circle
              cx="113.63"
              cy="133.05"
              r="3.393"
              fill="none"
              stroke={strokeColor}
            ></circle>
            <path
              d="M113.99 133.41v2.119h-.728v-2.119h-2.099v-.723h2.1v-2.118h.727v2.118h2.099v.723z"
              aria-label="+"
            ></path>
            <circle
              cx="147.27"
              cy="133.05"
              r="3.393"
              fill="none"
              stroke={strokeColor}
            ></circle>
            <path d="M145 133.45v-.792h4.545v.792z" aria-label="-" fill={strokeColor}></path>
            <circle
              cx="-147.27"
              cy="-166.23"
              r="3.393"
              fill="none"
              stroke={strokeColor}
              transform="scale(-1)"
            ></circle>
            <path
              d="M146.91 165.87v-2.119h.728v2.119h2.099v.723h-2.1v2.118h-.727v-2.118h-2.099v-.723z"
              aria-label="+"
              fill={strokeColor}
            ></path>
            <circle
              cx="-113.63"
              cy="-166.23"
              r="3.393"
              fill="none"
              stroke={strokeColor}
              transform="scale(-1)"
            ></circle>
            <path d="M115.9 165.84v.792h-4.545v-.792z" aria-label="-" fill={strokeColor}></path>
          </g>
          <g strokeWidth="0.566">
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.88358 0 0 -.88356 200.46 381.97)">
              <circle
                cx="-147.27"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path
                d="M146.91 165.87v-2.119h.728v2.119h2.099v.723h-2.1v2.118h-.727v-2.118h-2.099v-.723z"
                aria-label="+"
                fill={strokeColor}
              ></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.88358 0 0 -.88356 141.43 381.97)">
              <circle
                cx="-113.63"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path d="M115.9 165.84v.792h-4.545v-.792z" aria-label="-" fill={strokeColor}></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.88358 0 0 -.88356 142.74 381.97)">
              <circle
                cx="-147.27"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path
                d="M146.91 165.87v-2.119h.728v2.119h2.099v.723h-2.1v2.118h-.727v-2.118h-2.099v-.723z"
                aria-label="+"
                fill={strokeColor}
              ></path>
            </g>
          </g>
          <g strokeWidth="0.662">
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.75543 0 0 -.7554 161.33 351.77)">
              <circle
                cx="147.27"
                cy="133.05"
                r="3.393"
                fill="none"
                stroke={strokeColor}
              ></circle>
              <path d="M145 133.45v-.792h4.545v.792z" aria-label="-" fill={strokeColor}></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.75543 0 0 -.7554 161.08 352.33)">
              <circle
                cx="-147.27"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path
                d="M146.91 165.87v-2.119h.728v2.119h2.099v.723h-2.1v2.118h-.727v-2.118h-2.099v-.723z"
                aria-label="+"
              ></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.75543 0 0 -.7554 110.78 352.33)">
              <circle
                cx="-113.63"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path d="M115.9 165.84v.792h-4.545v-.792z" aria-label="-" fill={strokeColor}></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.75543 0 0 -.7554 160.9 351.77)">
              <circle
                cx="113.63"
                cy="133.05"
                r="3.393"
                fill="none"
                stroke={strokeColor}
              ></circle>
              <path
                d="M113.99 133.41v2.119h-.728v-2.119h-2.099v-.723h2.1v-2.118h.727v2.118h2.099v.723z"
                aria-label="+"
                fill={strokeColor}
              ></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.75543 0 0 -.7554 161.08 352.33)">
              <circle
                cx="-113.63"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path d="M115.9 165.84v.792h-4.545v-.792z" aria-label="-" fill={strokeColor}></path>
            </g>
          </g>
          <g stroke={strokeColor} strokeWidth="0.5">
            <path
              d="M34.963 279.15H58.49M34.963 245.97H58.49M30.213 250.8v23.527M63.856 250.8v23.527"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
          </g>
          <g
            strokeWidth="0.566"
            transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.88358 0 0 -.88356 200.46 381.39)"
          >
            <circle
              cx="147.27"
              cy="133.05"
              r="3.393"
              fill="none"
              stroke={strokeColor}
            ></circle>
            <path d="M145 133.45v-.792h4.545v.792z" aria-label="-" fill={strokeColor}></path>
          </g>
          <g strokeWidth="0.747">
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(.66718 0 0 .67151 3.746 129.98)">
              <circle
                cx="113.63"
                cy="133.05"
                r="3.393"
                fill="none"
                stroke={strokeColor}
              ></circle>
              <path
                d="M113.99 133.41v2.119h-.728v-2.119h-2.099v-.723h2.1v-2.118h.727v2.118h2.099v.723z"
                aria-label="+"
                fill={strokeColor}
              ></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(.66718 0 0 .67151 3.592 129.48)">
              <circle
                cx="-113.63"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path d="M115.9 165.84v.792h-4.545v-.792z" aria-label="-" fill={strokeColor}></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.66718 0 0 -.67151 133.45 330.45)">
              <circle
                cx="113.63"
                cy="133.05"
                r="3.393"
                fill="none"
                stroke={strokeColor}
              ></circle>
              <path
                d="M113.99 133.41v2.119h-.728v-2.119h-2.099v-.723h2.1v-2.118h.727v2.118h2.099v.723z"
                aria-label="+"
                fill={strokeColor}
              ></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.66718 0 0 -.67151 133.6 330.95)">
              <circle
                cx="-113.63"
                cy="-166.23"
                r="3.393"
                fill="none"
                stroke={strokeColor}
                transform="scale(-1)"
              ></circle>
              <path d="M115.9 165.84v.792h-4.545v-.792z" aria-label="-" fill={strokeColor}></path>
            </g>
            <g transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(.66718 0 0 .67151 -39.943 129.98)">
              <circle
                cx="113.63"
                cy="133.05"
                r="3.393"
                fill="none"
                stroke={strokeColor}
              ></circle>
              <path
                d="M113.99 133.41v2.119h-.728v-2.119h-2.099v-.723h2.1v-2.118h.727v2.118h2.099v.723z"
                aria-label="+"
                fill={strokeColor}
              ></path>
            </g>
          </g>
          <g stroke={strokeColor} strokeWidth="0.5">
            <path
              d="M45.755 235.1h19.859M53.941 226.76H71.12M61.281 219.39h14.784M70.336 239.52v20.394M75.057 230.5v17.024M79.557 222.71v15.017M16.933 235.1h19.386M28.816 226.76h16.896M39.244 219.39h15.049M12.612 239.34v20.25"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
          </g>
          <g
            strokeWidth="0.566"
            transform="translate(-71.323 -100.21) translate(61.959 -116.59) matrix(-.88358 0 0 -.88356 142.74 381.39)"
          >
            <circle
              cx="147.27"
              cy="133.05"
              r="3.393"
              fill="none"
              stroke={strokeColor}
            ></circle>
            <path d="M145 133.45v-.792h4.545v.792z" aria-label="-" fill={strokeColor}></path>
          </g>
          <g stroke={strokeColor} strokeWidth="0.5">
            <path
              d="M65.514 275.06l2.98-7.35M71.656 259.92l2.147-5.293M76.518 247.93l1.569-3.869M66.018 242.26l2.203-3.776M72.059 231.91l1.41-2.418M76.732 223.9l1.266-2.17M33.426 242.84l4.768-4.638M44.117 232.45l3.24-3.151M52.448 224.34l3.004-2.921M16.025 232.78l5.944-4.036M27.793 224.79l5.442-3.696"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
            <g strokeDasharray="2, 2">
              <path
                d="M32.943 275.33l5.962-8.342M43.686 260.3l4.342-6.075M52.122 248.5l3.524-4.931"
                transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
              ></path>
            </g>
            <path
              strokeDasharray="1.5, 1.6"
              d="M45.948 263.83h20.181"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
            <path
              strokeDasharray="1.75, 1.75"
              d="M53.984 251.26h17.175"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
            <g strokeDasharray="2, 2">
              <path
                d="M41.412 239.77v19.391M50.033 230.72v17.103M57.635 222.64v15.937"
                transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
              ></path>
            </g>
            <path
              d="M17.024 263.83H28.8"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
            <path
              strokeDasharray="1.5, 1.6"
              d="M32.029 263.83h5.329"
              transform="translate(-71.323 -100.21) translate(61.959 -116.59)"
            ></path>
          </g>
        </g>
      </svg>
    </LatticeHolder>
  );
}

export default LatticeImage;