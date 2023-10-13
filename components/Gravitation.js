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

function Gravitation(props) {
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "floralwhite" : "black"

  return (
    <Holder>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ? props.width : "100%"}
        height={props.width ? props.width : "100%"}
        viewBox="0 0 48.327 18.328"
        color={strokeColor}
        fill={strokeColor}
      >
        <g strokeDashoffset="1.587" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M76.333 124.9a.737.737 0 00-.736.734c0 .405.331.737.736.737a.737.737 0 000-1.47zm0 .203a.532.532 0 11.002 1.064.532.532 0 01-.002-1.064zM90.231 124.9a.737.737 0 00-.736.734c0 .405.331.737.736.737a.735.735 0 000-1.47zm0 .203c.295 0 .531.236.531.531s-.236.534-.531.534a.532.532 0 110-1.065z"
            
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68)"
          ></path>
          <g strokeWidth="0.071" ariaLabel="m2">
            <path
              d="M148.73 135.77c-.198 0-.372.08-.552.253-.05-.17-.168-.253-.37-.253-.207 0-.348.061-.543.244l.04-.198h-.232l-.34 1.6h.257l.214-1.005c.049-.232.256-.421.46-.421.15 0 .251.085.251.21a.507.507 0 01-.012.113l-.235 1.102h.256l.214-1.004c.052-.238.26-.421.48-.421.143 0 .231.088.231.235 0 .045-.006.045-.027.15l-.22 1.04h.256l.241-1.139c.006-.033.019-.134.019-.167 0-.116-.074-.34-.388-.34z"
              transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
            ></path>
            <path
              d="M149.89 136.62c-.306 0-.48.153-.557.488h.174c.018-.07.071-.335.36-.335.138 0 .23.085.23.212s-.096.246-.26.33l-.207.103c-.35.174-.434.29-.522.609h.935l.037-.173h-.747c.033-.097.142-.194.323-.284l.222-.113c.264-.133.393-.297.393-.496 0-.137-.075-.341-.381-.341z"
              baselineShift="sub"
              transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
            ></path>
          </g>
        </g>
        <g >
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M132.56 132.13a.075.075 0 00-.092.053.075.075 0 00.053.091l6.6 1.768a.075.075 0 00.091-.053.075.075 0 00-.052-.091z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M132.54 132.2l.46-.265-1.366.022 1.171.702z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M145.72 132.13l-6.598 1.768a.075.075 0 00-.052.091.075.075 0 00.091.053l6.598-1.768a.075.075 0 00.053-.091.075.075 0 00-.092-.053z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M145.74 132.2l-.265.46 1.17-.703-1.364-.022z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M139.14 131.77a.075.075 0 00-.076.076v2.121a.075.075 0 00.076.077.075.075 0 00.074-.077v-2.12a.075.075 0 00-.074-.077z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M139.14 131.85l.375.375-.375-1.313-.375 1.313z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M139.12 137.66l-6.6 1.768a.075.075 0 00-.052.091.075.075 0 00.092.053l6.6-1.768a.075.075 0 00.052-.091.075.075 0 00-.092-.053z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M132.54 139.5l.265-.46-1.17.703 1.364.022z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M139.16 137.66a.075.075 0 00-.092.053.075.075 0 00.053.091l6.598 1.768a.075.075 0 00.091-.053.075.075 0 00-.052-.091z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M145.74 139.5l-.46.265 1.366-.022-1.171-.702z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M139.14 137.66a.075.075 0 00-.076.074v2.121a.075.075 0 00.076.077.075.075 0 00.074-.077v-2.12a.075.075 0 00-.074-.075z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M139.14 139.85l-.375-.375.375 1.313.375-1.313z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M116.01 128.03a.075.075 0 00-.041.04.075.075 0 00.037.099l9.278 4.173a.075.075 0 00.1-.037.075.075 0 00-.038-.1l-9.28-4.173a.075.075 0 00-.056-.002z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M116.04 128.1l.496-.188-1.351-.197 1.043.88z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M119.21 128.78a.075.075 0 00-.045.035.075.075 0 00.03.102l6.087 3.422a.075.075 0 00.102-.028.075.075 0 00-.027-.103l-6.088-3.422a.075.075 0 00-.059-.006z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M119.23 128.85l.51-.143-1.327-.316.96.97z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M122.71 131.76a.075.075 0 00-.086.063.075.075 0 00.063.085l2.61.438a.075.075 0 00.089-.063.075.075 0 00-.063-.085z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M122.7 131.84l.432-.308-1.357.153 1.233.587z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M116.01 128.03a.075.075 0 00-.041.04.075.075 0 00.037.099l9.278 4.173a.075.075 0 00.1-.037.075.075 0 00-.038-.1l-9.28-4.173a.075.075 0 00-.056-.002z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M116.04 128.1l.496-.188-1.351-.197 1.043.88z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M119.21 128.78a.075.075 0 00-.045.035.075.075 0 00.03.102l6.087 3.422a.075.075 0 00.102-.028.075.075 0 00-.027-.103l-6.088-3.422a.075.075 0 00-.059-.006z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M119.23 128.85l.51-.143-1.327-.316.96.97z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M122.71 131.76a.075.075 0 00-.086.063.075.075 0 00.063.085l2.61.438a.075.075 0 00.089-.063.075.075 0 00-.063-.085z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M122.7 131.84l.432-.308-1.357.153 1.233.587z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M125.29 139.36l-9.277 4.176a.075.075 0 00-.037.098.075.075 0 00.097.039l9.28-4.176a.075.075 0 00.037-.098.075.075 0 00-.1-.039z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M116.04 143.6l.188-.496-1.043.88 1.35-.196z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M125.34 139.36a.075.075 0 00-.057.008l-6.088 3.422a.075.075 0 00-.029.101.075.075 0 00.104.03l6.088-3.422a.075.075 0 00.027-.102.075.075 0 00-.045-.037z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M119.23 142.85l.143-.51-.96.97 1.328-.317z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M125.3 139.36l-2.611.436a.075.075 0 00-.063.085.075.075 0 00.086.063l2.613-.438a.075.075 0 00.063-.085.075.075 0 00-.088-.061z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M122.7 139.87l.308-.432-1.233.587 1.357.153z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M125.29 139.36l-9.277 4.176a.075.075 0 00-.037.098.075.075 0 00.097.039l9.28-4.176a.075.075 0 00.037-.098.075.075 0 00-.1-.039z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M116.04 143.6l.188-.496-1.043.88 1.35-.196z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M125.34 139.36a.075.075 0 00-.057.008l-6.088 3.422a.075.075 0 00-.029.101.075.075 0 00.104.03l6.088-3.422a.075.075 0 00.027-.102.075.075 0 00-.045-.037z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M119.23 142.85l.143-.51-.96.97 1.328-.317z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M125.3 139.36l-2.611.436a.075.075 0 00-.063.085.075.075 0 00.086.063l2.613-.438a.075.075 0 00.063-.085.075.075 0 00-.088-.061z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M122.7 139.87l.308-.432-1.233.587 1.357.153z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M162.26 128.03a.075.075 0 00-.057.002l-9.277 4.174a.075.075 0 00-.039.1.075.075 0 00.1.037l9.277-4.174a.075.075 0 00.04-.1.075.075 0 00-.044-.039z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M162.24 128.1l-.188.496 1.043-.88-1.35.196z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M159.01 128.79l-6.088 3.422a.075.075 0 00-.03.103.075.075 0 00.102.028l6.088-3.422a.075.075 0 00.03-.102.075.075 0 00-.102-.03z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M159.05 128.85l-.143.51.96-.97-1.328.317z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M155.56 131.76l-2.613.438a.075.075 0 00-.06.085.075.075 0 00.085.063l2.611-.438a.075.075 0 00.063-.085.075.075 0 00-.086-.063z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M155.57 131.84l-.308.432 1.233-.587-1.357-.153z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M162.26 128.03a.075.075 0 00-.057.002l-9.277 4.174a.075.075 0 00-.039.1.075.075 0 00.1.037l9.277-4.174a.075.075 0 00.04-.1.075.075 0 00-.044-.039z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M162.24 128.1l-.188.496 1.043-.88-1.35.196z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M159.01 128.79l-6.088 3.422a.075.075 0 00-.03.103.075.075 0 00.102.028l6.088-3.422a.075.075 0 00.03-.102.075.075 0 00-.102-.03z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M159.05 128.85l-.143.51.96-.97-1.328.317z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M155.56 131.76l-2.613.438a.075.075 0 00-.06.085.075.075 0 00.085.063l2.611-.438a.075.075 0 00.063-.085.075.075 0 00-.086-.063z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M155.57 131.84l-.308.432 1.233-.587-1.357-.153z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M152.93 139.36a.075.075 0 00-.043.04.075.075 0 00.04.097l9.276 4.176a.075.075 0 00.1-.04.075.075 0 00-.04-.097l-9.276-4.176a.075.075 0 00-.057 0z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M162.24 143.6l-.496.188 1.351.197-1.043-.88z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M153 139.37a.075.075 0 00-.102.03.075.075 0 00.03.1l6.088 3.423a.075.075 0 00.101-.03.075.075 0 00-.03-.101z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M159.05 142.85l-.51.143 1.327.316-.96-.97z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M152.97 139.36a.075.075 0 00-.086.06.075.075 0 00.06.087l2.614.437a.075.075 0 00.086-.062.075.075 0 00-.063-.086z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M155.57 139.87l-.432.308 1.357-.153-1.233-.587z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M152.93 139.36a.075.075 0 00-.043.04.075.075 0 00.04.097l9.276 4.176a.075.075 0 00.1-.04.075.075 0 00-.04-.097l-9.276-4.176a.075.075 0 00-.057 0z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M162.24 143.6l-.496.188 1.351.197-1.043-.88z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M153 139.37a.075.075 0 00-.102.03.075.075 0 00.03.1l6.088 3.423a.075.075 0 00.101-.03.075.075 0 00-.03-.101z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M159.05 142.85l-.51.143 1.327.316-.96-.97z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            strokeDashoffset="1.587"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M152.97 139.36a.075.075 0 00-.086.06.075.075 0 00.06.087l2.614.437a.075.075 0 00.086-.062.075.075 0 00-.063-.086z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M155.57 139.87l-.432.308 1.357-.153-1.233-.587z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
        </g>
        <g
          strokeDashoffset="1.587"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.15"
        >
          <path
            d="M83.719 119.19c.188-.092.264-.209.264-.399 0-.288-.182-.447-.51-.447h-.77v1.671h.214v-.72h.55c.19 0 .275.092.275.298v.15c0 .102.016.203.046.272h.259v-.053c-.09-.06-.101-.156-.101-.263l.002-.117c0-.151-.02-.303-.23-.392zm.041-.369c0 .197-.1.287-.328.287h-.515v-.576h.516c.178 0 .327.05.327.289z"
            ariaLabel="R"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M76.012 120.73h.202c.009-.151.048-.387.327-.387.184 0 .321.13.321.304 0 .129-.075.239-.22.321l-.21.12c-.34.192-.438.346-.457.703h1.082v-.2h-.855c.02-.132.09-.224.293-.334l.23-.124c.227-.123.343-.29.343-.49 0-.282-.213-.477-.52-.477-.222 0-.522.074-.536.564z"
            ariaLabel="2"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M89.574 120.63v1.157h.202v-1.625h-.133c-.071.25-.117.285-.429.324v.144z"
            ariaLabel="1"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M83.719 132.29c.188-.092.264-.209.264-.399 0-.288-.182-.447-.51-.447h-.77v1.671h.214v-.72h.55c.19 0 .275.092.275.298v.15c0 .102.016.203.046.272h.259v-.053c-.09-.06-.101-.156-.101-.263l.002-.117c0-.151-.02-.303-.23-.392zm.041-.369c0 .197-.1.286-.328.286h-.515v-.575h.516c.178 0 .327.05.327.289z"
            ariaLabel="R"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M76.012 130.62h.202c.009-.151.048-.387.327-.387.184 0 .321.13.321.304 0 .129-.075.239-.22.321l-.21.12c-.34.192-.438.346-.457.703h1.082v-.2h-.855c.02-.132.09-.224.293-.334l.23-.124c.227-.123.343-.29.343-.49 0-.282-.213-.477-.52-.477-.222 0-.522.074-.536.564z"
            ariaLabel="2"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M89.574 130.53v1.157h.202v-1.625h-.133c-.071.25-.117.285-.429.324v.144z"
            ariaLabel="1"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M65.223 122.63h.202c.009-.151.048-.387.327-.387.184 0 .321.13.321.304 0 .129-.075.239-.22.321l-.21.12c-.34.192-.438.346-.457.703h1.082v-.2h-.855c.02-.132.09-.224.293-.334l.23-.124c.227-.123.343-.29.343-.49 0-.282-.213-.477-.52-.477-.222 0-.522.074-.536.564z"
            ariaLabel="2"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M60.017 119.49c.188-.092.264-.209.264-.399 0-.288-.182-.447-.51-.447h-.77v1.671h.214v-.72h.55c.19 0 .275.092.275.298v.15c0 .102.016.203.046.272h.259v-.053c-.09-.06-.101-.156-.101-.263l.002-.117c0-.151-.02-.303-.23-.392zm.041-.369c0 .197-.1.287-.327.287h-.516v-.576h.516c.178 0 .327.05.327.29z"
            ariaLabel="R"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M63.536 117.31v1.157h.202v-1.624h-.133c-.071.25-.117.284-.429.323v.144zM100.53 122.58v1.157h.202v-1.624h-.133c-.071.25-.117.284-.429.323v.144z"
            ariaLabel="1"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M102.11 117.24h.202c.009-.151.048-.387.327-.387.184 0 .321.13.321.305 0 .128-.075.238-.22.32l-.21.12c-.34.192-.438.346-.457.703h1.082v-.2h-.855c.02-.132.09-.224.293-.334l.23-.124c.227-.123.343-.29.343-.49 0-.282-.213-.477-.52-.477-.222 0-.522.074-.536.564z"
            ariaLabel="2"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M106.8 120.12c.188-.092.264-.209.264-.399 0-.288-.182-.447-.51-.447h-.77v1.671h.214v-.72h.55c.19 0 .275.092.275.298v.15c0 .102.016.203.046.272h.259v-.053c-.09-.06-.101-.156-.101-.263l.002-.117c0-.151-.02-.303-.23-.392zm.041-.369c0 .197-.1.287-.327.287h-.516v-.576h.516c.178 0 .327.05.327.29z"
            ariaLabel="R"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M65.223 128.43h.202c.009-.151.048-.387.327-.387.184 0 .321.13.321.304 0 .129-.075.239-.22.321l-.21.12c-.34.192-.438.346-.457.703h1.082v-.2h-.855c.02-.132.09-.224.293-.334l.23-.124c.227-.123.343-.29.343-.49 0-.282-.213-.477-.52-.477-.222 0-.522.074-.536.564z"
            ariaLabel="2"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M60.121 131.97c.188-.092.264-.209.264-.399 0-.288-.181-.447-.51-.447h-.77v1.671h.214v-.72h.55c.19 0 .275.092.275.298v.15c0 .102.016.203.046.272h.259v-.053c-.09-.06-.101-.156-.101-.263l.002-.117c0-.151-.02-.303-.23-.392zm.041-.369c0 .197-.1.286-.327.286h-.516v-.575h.516c.178 0 .327.05.327.289z"
            ariaLabel="R"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M63.817 133.85v1.157h.202v-1.625h-.133c-.071.25-.117.285-.429.324v.144zM100.53 128.57v1.157h.202v-1.625h-.133c-.071.25-.117.285-.429.324v.144z"
            ariaLabel="1"
            transform="translate(-59.002 -116.68)"
          ></path>
          <path
            d="M102.11 133.82h.202c.009-.151.048-.387.327-.387.184 0 .321.13.321.304 0 .129-.075.239-.22.321l-.21.12c-.34.192-.438.346-.457.703h1.082v-.2h-.855c.02-.132.09-.224.293-.334l.23-.124c.227-.123.343-.29.343-.49 0-.282-.213-.477-.52-.477-.222 0-.522.074-.536.564z"
            ariaLabel="2"
            transform="translate(-59.002 -116.68)"
          ></path>
        </g>
        <g >
          <path
            strokeDashoffset="1.587"
            strokeLinejoin="round"
            d="M132.73 135.56h2.028M132.73 135.38v.35h2.027v-.35z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M134.76 135.56l-.875.875 3.063-.875-3.063-.875z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
        </g>
        <path
          strokeDashoffset="1.587"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.15"
          d="M106.8 131.76c.188-.092.264-.209.264-.399 0-.288-.182-.447-.51-.447h-.77v1.671h.214v-.72h.55c.19 0 .275.092.275.298v.15c0 .102.016.203.046.272h.259v-.053c-.09-.06-.101-.156-.101-.263l.002-.117c0-.151-.02-.303-.23-.392zm.041-.369c0 .197-.1.286-.327.286h-.516v-.575h.516c.178 0 .327.05.327.289z"
          ariaLabel="R"
          transform="translate(-59.002 -116.68)"
        ></path>
        <g >
          <path
            strokeDashoffset="1.587"
            strokeLinejoin="round"
            d="M145.36 135.56h-2.028M143.33 135.38v.35h2.027v-.35z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
          <path
            fillRule="evenodd"
            d="M143.33 135.56l.875-.875-3.063.875 3.063.875z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-59.002 -116.68) translate(-55.763 -9.92)"
          ></path>
        </g>
        <path
          strokeDashoffset="1.587"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.071"
          d="M74.676 125.85c-.198 0-.372.08-.552.253-.05-.17-.168-.253-.37-.253-.207 0-.348.061-.543.244l.04-.198h-.232l-.34 1.6h.257l.214-1.005c.049-.232.256-.421.46-.421.15 0 .251.085.251.21a.507.507 0 01-.012.113l-.235 1.102h.256l.214-1.004c.052-.238.26-.421.48-.421.143 0 .231.088.231.235 0 .045-.006.045-.027.15l-.22 1.04h.256l.241-1.139c.006-.033.019-.134.019-.167 0-.116-.074-.34-.388-.34z"
          transform="translate(-59.002 -116.68)"
        ></path>
        <path
          strokeDashoffset="1.587"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.071"
          d="M75.716 127.1l-.214 1.002h.174l.3-1.407h-.115c-.107.215-.149.24-.435.28l-.025.125z"
          baselineShift="sub"
          transform="translate(-59.002 -116.68)"
        ></path>
      </svg>
      {...React.Children.toArray(props.children)}
    </Holder>
  );
}

export default Gravitation;