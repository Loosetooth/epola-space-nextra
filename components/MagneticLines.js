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

function MagneticLines(props) {
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "floralwhite" : "black"

  return (
    <Holder>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ? props.width : "100%"}
        height={props.width ? props.width : "100%"}
        viewBox="0 0 52.669 19.514"
        color={strokeColor}
        fill={strokeColor}
      >
        <path
          d="M58.293 128.5a.66.66 0 00-.658.658.657.657 0 10.658-.658zm0 .2c.254 0 .457.204.457.458s-.203.457-.457.457-.459-.203-.459-.457.205-.459.459-.459z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-38.1 -118.8)"
        ></path>
        <path
          d="M58.429 129.16a.137.137 0 01-.137.137.137.137 0 01-.137-.137.137.137 0 01.137-.137.137.137 0 01.137.137z"
          transform="translate(-38.1 -118.8)"
        ></path>
        <g >
          <path
            d="M102.65 168.19a20.275 20.275 0 00-2.57 9.781h.2a20.068 20.068 0 012.544-9.683z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M100.18 177.98l-.498-.502.493 1.752.507-1.748z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
        </g>
        <path
          d="M49.981 128.58a20.262 20.262 0 002.457 9.732l.176-.095a20.06 20.06 0 01-2.432-9.637z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-38.1 -118.8)"
        ></path>
        <g >
          <path
            d="M91.162 168.19a20.274 20.274 0 00-2.568 9.781h.199a20.07 20.07 0 012.545-9.683z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M88.693 177.98l-.498-.502.493 1.752.507-1.748z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
        </g>
        <path
          d="M38.498 128.58a20.261 20.261 0 002.457 9.732l.176-.095a20.063 20.063 0 01-2.434-9.637zM62.221 129.16c0 1.4-.745 2.693-1.955 3.397l.101.173a4.13 4.13 0 002.055-3.57z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-38.1 -118.8)"
        ></path>
        <g >
          <path
            d="M110.45 174.98l-.1.172a3.93 3.93 0 011.965 3.404h.201a4.13 4.13 0 00-2.066-3.576z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M110.4 175.06l.683-.183-1.766-.442 1.266 1.308z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            d="M108.39 174.43a4.13 4.13 0 00-4.129 4.129h.2a3.929 3.929 0 015.892-3.404l.1-.172a4.123 4.123 0 00-2.063-.553z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M104.36 178.55l-.5-.5.5 1.75.5-1.75z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            d="M104.26 178.55a4.13 4.13 0 006.203 3.57l-.101-.174a3.927 3.927 0 01-5.902-3.396z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M110.41 182.04l-.181.684 1.262-1.312-1.764.447z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            d="M108.95 178.35v.4h2.844v-.4z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M111.79 178.55l-1 1 3.5-1-3.5-1z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
        </g>
        <path
          d="M70.577 128.5a.66.66 0 01.658.658.657.657 0 11-.658-.658zm0 .2a.457.457 0 00-.457.458c0 .254.203.457.457.457a.455.455 0 00.457-.457.457.457 0 00-.457-.459z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-38.1 -118.8)"
        ></path>
        <path
          d="M70.44 129.16a.137.137 0 00.137.137.137.137 0 00.137-.137.137.137 0 00-.137-.137.137.137 0 00-.137.137z"
          transform="translate(-38.1 -118.8)"
        ></path>
        <g >
          <path
            d="M128.78 177.93a20.068 20.068 0 01-2.543 9.684l.174.097a20.275 20.275 0 002.57-9.78z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M128.88 177.93l.498.502-.493-1.752-.507 1.748z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
        </g>
        <path
          d="M76.432 118.8l-.178.096a20.063 20.063 0 012.434 9.636h.201a20.262 20.262 0 00-2.457-9.732z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-38.1 -118.8)"
        ></path>
        <g >
          <path
            d="M140.27 177.93a20.07 20.07 0 01-2.545 9.684l.176.097a20.274 20.274 0 002.568-9.78z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M140.37 177.93l.498.502-.493-1.752-.507 1.748z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
        </g>
        <path
          d="M87.914 118.8l-.176.096a20.063 20.063 0 012.434 9.636h.199a20.262 20.262 0 00-2.457-9.732zM68.502 125.5a4.13 4.13 0 00-2.055 3.57h.201c0-1.4.745-2.693 1.956-3.396z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-38.1 -118.8)"
        ></path>
        <g >
          <path
            d="M116.54 178.46a4.13 4.13 0 002.064 3.576l.102-.174a3.928 3.928 0 01-1.965-3.402z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M118.66 181.95l-.683.183 1.766.442-1.266-1.308z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            d="M124.6 178.46a3.929 3.929 0 01-5.893 3.402l-.101.174a4.13 4.13 0 006.193-3.576z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M124.7 178.46l.5.5-.5-1.75-.5 1.75z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            d="M120.67 174.33c-.729 0-1.444.193-2.074.559l.101.173a3.927 3.927 0 015.903 3.397h.199a4.13 4.13 0 00-4.129-4.129z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M118.65 174.98l.181-.684-1.262 1.312 1.764-.447z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            d="M117.27 178.35v.4h2.844v-.4z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
          <path
            fillRule="evenodd"
            d="M117.27 178.55l1-1-3.5 1 3.5 1z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-38.1 -118.8) translate(-50.095 -49.395)"
          ></path>
        </g>
        <g strokeDashoffset="1.587" strokeLinejoin="round" strokeWidth="0.4">
          <path
            d="M58.495 134.28v1h.286v-1.45h-.19c-.045.172-.194.26-.444.26v.19zM76.533 134.28v1h.286v-1.45h-.19c-.045.172-.194.26-.444.26v.19zM40.447 134.28v1h.286v-1.45h-.19c-.045.172-.194.26-.444.26v.19z"
            ariaLabel="1"
            transform="translate(-38.1 -118.8)"
          ></path>
          <path
            d="M52.603 134.26c0-.28-.192-.46-.497-.46-.3 0-.476.178-.476.485 0 .012 0 .028.002.05h.274v-.046c0-.162.075-.256.206-.256.127 0 .205.088.205.233 0 .16-.05.225-.37.45-.244.17-.321.296-.336.564h.986v-.255h-.614c.123-.26.62-.332.62-.765zM70.936 134.26c0-.28-.192-.46-.497-.46-.3 0-.476.178-.476.485 0 .012 0 .028.002.05h.274v-.046c0-.162.075-.256.206-.256.127 0 .205.088.205.233 0 .16-.05.225-.37.45-.244.17-.321.296-.336.564h.986v-.255h-.614c.123-.26.62-.332.62-.765zM88.234 134.26c0-.28-.192-.46-.497-.46-.3 0-.476.178-.476.485 0 .012 0 .028.002.05h.274v-.046c0-.162.075-.256.206-.256.127 0 .205.088.205.233 0 .16-.05.225-.37.45-.244.17-.321.296-.336.564h.986v-.255h-.614c.123-.26.62-.332.62-.765z"
            ariaLabel="2"
            transform="translate(-38.1 -118.8)"
          ></path>
        </g>
      </svg>
      {...React.Children.toArray(props.children)}
    </Holder>
  );
}

export default MagneticLines;