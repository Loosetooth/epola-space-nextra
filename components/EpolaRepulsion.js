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

function EpolaRepulsion(props) {
  const { resolvedTheme } = useTheme();
  const strokeColor = resolvedTheme === "dark" ? "floralwhite" : "black"

  return (
    <Holder>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ? props.width : "100%"}
        height={props.width ? props.width : "100%"}
        viewBox="0 0 43.967 60.216"
        color={strokeColor}
        fill={strokeColor}
      >
        <defs>
          <pattern
            id="pattern183"
            patternTransform="rotate(54 -75.328 38.381) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern81"
          ></pattern>
          <pattern
            id="pattern81"
            patternTransform="rotate(54) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#Strips1_1"
          ></pattern>
          <pattern
            id="Strips1_1"
            width="2"
            height="10"
            
            patternTransform="scale(2)"
            patternUnits="userSpaceOnUse"
            preserveAspectRatio="xMidYMid"
          >
            <path d="M0 -0.5H1V10.5H0z"></path>
          </pattern>
          <pattern
            id="pattern182"
            patternTransform="rotate(136.857 76.739 36.82) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern82"
          ></pattern>
          <pattern
            id="pattern82"
            patternTransform="rotate(136.857 91.913 -1.561) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern81"
          ></pattern>
          <pattern
            id="pattern1"
            patternTransform="rotate(54) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#Strips1_1"
          ></pattern>
          <pattern
            id="pattern2"
            width="2"
            height="10"
            
            patternTransform="scale(2)"
            patternUnits="userSpaceOnUse"
            preserveAspectRatio="xMidYMid"
          >
            <path d="M0 -0.5H1V10.5H0z"></path>
          </pattern>
          <pattern
            id="pattern181"
            patternTransform="rotate(-36 403.617 -.22) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern1"
          ></pattern>
          <pattern
            id="pattern3"
            patternTransform="rotate(-36 285.48 -38.604) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern81"
          ></pattern>
          <pattern
            id="pattern4"
            patternTransform="rotate(54) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#Strips1_1"
          ></pattern>
          <pattern
            id="pattern180"
            patternTransform="rotate(-153.105 123.736 34.726) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern2"
          ></pattern>
          <pattern
            id="pattern179"
            patternTransform="rotate(-153.274 137.181 37.95) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern3"
          ></pattern>
          <pattern
            id="pattern10"
            patternTransform="rotate(54) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#Strips1_1"
          ></pattern>
          <pattern
            id="pattern11"
            width="2"
            height="10"
            
            patternTransform="scale(2)"
            patternUnits="userSpaceOnUse"
            preserveAspectRatio="xMidYMid"
          >
            <path d="M0 -0.5H1V10.5H0z"></path>
          </pattern>
          <pattern
            id="pattern178"
            patternTransform="rotate(-29.319 488.867 30.03) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern4"
          ></pattern>
          <pattern
            id="pattern177"
            patternTransform="rotate(52.943 -100.63 67.525) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern10"
          ></pattern>
          <pattern
            id="pattern176"
            patternTransform="rotate(134.627 57.264 45.805) scale(.1)"
            preserveAspectRatio="xMidYMid"
            xlinkHref="#pattern11"
          ></pattern>
        </defs>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M103.88 52.877a1.254 1.254 0 10.004 2.508 1.254 1.254 0 00-.004-2.508zm0 .201a1.054 1.054 0 11.001 2.107 1.054 1.054 0 01-.001-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(0 76.763)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(0 76.763) translate(.023 -.037)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(0 76.763) translate(.023 -.037)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.687 92.58)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.687 92.58)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(30.171 110.21)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(30.171 110.21)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 30.479a1.254 1.254 0 100 2.508 1.254 1.254 0 000-2.508zm0 .2a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.108z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.429 117.25)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.429 117.25) translate(-30.393 -22.437)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.429 117.25) translate(-30.393 -22.437)"
          ></path>
        </g>
        <path
          d="M114.56 135.27c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254 0-.691-.563-1.254-1.254-1.254zm0 .2a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.108z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(58.461 98.786) scale(.69455)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(58.461 98.786) scale(.69455)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M103.88 52.877a1.254 1.254 0 10.004 2.508 1.254 1.254 0 00-.004-2.508zm0 .201a1.054 1.054 0 11.001 2.107 1.054 1.054 0 01-.001-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(51.534 88.704) scale(.68673)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(51.534 88.704) scale(.68673) translate(.023 -.037)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(51.534 88.704) scale(.68673) translate(.023 -.037)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M103.88 52.877a1.254 1.254 0 10.004 2.508 1.254 1.254 0 00-.004-2.508zm0 .201a1.054 1.054 0 11.001 2.107 1.054 1.054 0 01-.001-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(37.803 102.92) scale(.68673)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(37.803 102.92) scale(.68673) translate(.023 -.037)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(37.803 102.92) scale(.68673) translate(.023 -.037)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(71.922 113.36) scale(.69455)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(71.922 113.36) scale(.69455)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(12.952 92.195)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(12.952 92.195)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 30.479a1.254 1.254 0 100 2.508 1.254 1.254 0 000-2.508zm0 .2a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.108z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(12.722 116.84)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(12.722 116.84) translate(-30.393 -22.437)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(12.722 116.84) translate(-30.393 -22.437)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 30.479a1.254 1.254 0 100 2.508 1.254 1.254 0 000-2.508zm0 .2a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.108z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(29.857 134.86)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(29.857 134.86) translate(-30.393 -22.437)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(29.857 134.86) translate(-30.393 -22.437)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.227 128.33)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(47.227 128.33)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(30.816 74.222)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(30.816 74.222)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M103.88 52.877a1.254 1.254 0 10.004 2.508 1.254 1.254 0 00-.004-2.508zm0 .201a1.054 1.054 0 11.001 2.107 1.054 1.054 0 01-.001-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(17.544 59.002)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(17.544 59.002) translate(.023 -.037)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(17.544 59.002) translate(.023 -.037)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 30.479a1.254 1.254 0 100 2.508 1.254 1.254 0 000-2.508zm0 .2a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.108z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(1.777 118.61) scale(1.3034)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(1.777 118.61) scale(1.3034) translate(-30.393 -22.437)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(1.777 118.61) scale(1.3034) translate(-30.393 -22.437)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M103.88 52.877a1.254 1.254 0 10.004 2.508 1.254 1.254 0 00-.004-2.508zm0 .201a1.054 1.054 0 11.001 2.107 1.054 1.054 0 01-.001-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(70.484 99.273) scale(.41392)"
          ></path>
          <path
            d="M103 54.018v.3h1.72v-.3h-1.57z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(70.484 99.273) scale(.41392) translate(.023 -.037)"
          ></path>
          <path
            d="M103.71 53.309v1.72h.299v-1.72z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(70.484 99.273) scale(.41392) translate(.023 -.037)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(93.737 105.55) scale(.42057)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(93.737 105.55) scale(.42057)"
          ></path>
        </g>
        <g strokeLinecap="square" strokeLinejoin="round" >
          <path
            d="M73.465 37.361c-.691 0-1.254.563-1.254 1.254 0 .691.563 1.254 1.254 1.254.691 0 1.254-.563 1.254-1.254s-.563-1.254-1.254-1.254zm0 .201a1.054 1.054 0 11.002 2.107 1.054 1.054 0 01-.002-2.107z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(-.297 85.939) scale(1.3334)"
          ></path>
          <path
            d="M72.605 38.465v.3h1.72v-.3h-1.572z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192) translate(-.297 85.939) scale(1.3334)"
          ></path>
        </g>
        <path
          d="M104.72 130.1l4.1-4.052.158.176-4.079 4.123zM109.93 124.94l3.134-3.026.07.094-3.053 3.064zM123 125.09c.004 0 1.272-2.987 1.272-2.987l.126.103-1.137 2.974zM121.2 130.04l1.393-3.422.1.029-1.214 3.44zM98.542 136.17l4.574-4.41.138.105-4.44 4.547zM104.14 147.79l4.444-7.14.138.111-4.227 7.295zM121.06 147.84l1.78-6.862.191.003-1.618 6.97z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <g strokeLinejoin="round" >
          <path
            d="M104.79 148.73l14.964.11M104.79 148.58l-.002.299 14.963.11.002-.3z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M103.81 147.74l.031-15.697M103.69 132.04l-.031 15.697.3.002.032-15.697z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M105.03 130.93l14.971.127M105.04 130.78l-.002.299 14.971.127.004-.299z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M121.13 132.35l-.233 15.476M120.98 132.35l-.232 15.477.3.004.233-15.475z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M110.28 125.73l11.803.148M110.28 125.65l-.002.15 11.803.149.002-.15z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M122.9 126.67l-.035 12.714M122.82 126.67l-.033 12.713.15.002.033-12.715z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M122.15 140.21l-12.213-.065M109.93 140.07v.15l12.211.067.002-.15z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M109.03 139.31l.227-12.93M109.19 126.37l-.227 12.932.15.002.227-12.93z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M103.88 129.74l.305-15.754M104.11 113.99l-.305 15.754.15.002.305-15.754z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M121.48 114.29l-.21 15.762M121.4 114.29l-.21 15.762.15.002.208-15.762z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M102.73 130.98l-15.16-.168M87.572 130.74l-.002.15 15.16.168.002-.15z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M102.48 148.86l-15.15-.154M87.334 148.63l-.002.15 15.15.155v-.15z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M103.67 149.98l-.225 15.459M103.59 149.98l-.225 15.459.15.002.225-15.459z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g strokeLinejoin="round" >
          <path
            d="M120.92 150.13l-.254 15.663M120.84 150.13l-.254 15.662.15.004.254-15.664z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.45"
          strokeDashoffset="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M104.91 131.41l8.652 4.519M105.02 131.41a.075.075 0 00-.043.037.075.075 0 00.031.102l.266.138a.075.075 0 00.101-.03.075.075 0 00-.03-.102l-.266-.14a.075.075 0 00-.059-.005zm.723.354a.075.075 0 00-.102.03.075.075 0 00.031.102l.268.139a.075.075 0 00.1-.031.075.075 0 00-.032-.102zm.664.347a.075.075 0 00-.102.031.075.075 0 00.033.102l.266.139a.075.075 0 00.102-.034.075.075 0 00-.034-.1zm.666.346a.075.075 0 00-.102.033.075.075 0 00.031.1l.266.14a.075.075 0 00.102-.033.075.075 0 00-.032-.101zm.664.348a.075.075 0 00-.102.03.075.075 0 00.033.102l.266.139a.075.075 0 00.1-.031.075.075 0 00-.032-.102zm.607.341a.075.075 0 00-.043.037.075.075 0 00.031.102l.266.139a.075.075 0 00.102-.032.075.075 0 00-.032-.101l-.267-.139a.075.075 0 00-.057-.006zm.666.348a.075.075 0 00-.045.037.075.075 0 00.032.102l.265.138a.075.075 0 00.102-.03.075.075 0 00-.031-.102l-.266-.14a.075.075 0 00-.057-.005zm.72.352a.075.075 0 00-.1.033.075.075 0 00.033.1l.265.14a.075.075 0 00.102-.033.075.075 0 00-.033-.102zm.667.347a.075.075 0 00-.102.031.075.075 0 00.032.102l.265.139a.075.075 0 00.102-.032.075.075 0 00-.031-.101zm.664.348a.075.075 0 00-.102.031.075.075 0 00.032.102l.267.138a.075.075 0 00.1-.03.075.075 0 00-.031-.102zm.664.348a.075.075 0 00-.101.03.075.075 0 00.033.102l.265.139a.075.075 0 00.102-.031.075.075 0 00-.033-.102zm.666.345a.075.075 0 00-.101.033.075.075 0 00.03.102l.266.139a.075.075 0 00.102-.034.075.075 0 00-.031-.1zm.664.348a.075.075 0 00-.101.031.075.075 0 00.033.102l.265.138a.075.075 0 00.1-.03.075.075 0 00-.031-.102z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.45"
          strokeDashoffset="0.45"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M109.8 139.65l3.701-2.663M113.29 137.05l-.244.176a.075.075 0 00-.018.103.075.075 0 00.106.018l.244-.176a.075.075 0 00.015-.103.075.075 0 00-.103-.018zm-.61.438l-.244.175a.075.075 0 00-.015.106.075.075 0 00.103.015l.245-.173a.075.075 0 00.017-.106.075.075 0 00-.105-.018zm-.552.425a.075.075 0 00-.057.014l-.242.174a.075.075 0 00-.017.105.075.075 0 00.103.018l.244-.176a.075.075 0 00.018-.105.075.075 0 00-.049-.03zm-.61.438a.075.075 0 00-.054.013l-.244.174a.075.075 0 00-.018.106.075.075 0 00.106.017l.242-.175a.075.075 0 00.017-.104.075.075 0 00-.048-.031zm-.664.451l-.244.176a.075.075 0 00-.017.103.075.075 0 00.105.018l.244-.176a.075.075 0 00.016-.103.075.075 0 00-.104-.018zm-.609.437l-.244.176a.075.075 0 00-.016.106.075.075 0 00.104.015l.244-.174a.075.075 0 00.018-.105.075.075 0 00-.106-.018z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M113.64 137.22l-9.148 10.835M113.59 137.28a.075.075 0 00-.105.008l-.194.23a.075.075 0 00.008.106.075.075 0 00.106-.01l.195-.229a.075.075 0 00-.01-.105zm-.484.572a.075.075 0 00-.106.01l-.193.229a.075.075 0 00.01.105.075.075 0 00.105-.008l.194-.23a.075.075 0 00-.01-.106zm-.483.574a.075.075 0 00-.107.008l-.194.229a.075.075 0 00.01.107.075.075 0 00.106-.01l.193-.228a.075.075 0 00-.008-.106zm-.539.555a.075.075 0 00-.05.027l-.194.229a.075.075 0 00.008.105.075.075 0 00.105-.01l.194-.228a.075.075 0 00-.008-.106.075.075 0 00-.055-.017zm-.43.59a.075.075 0 00-.105.01l-.193.229a.075.075 0 00.008.105.075.075 0 00.107-.008l.193-.23a.075.075 0 00-.01-.106zm-.484.574a.075.075 0 00-.105.008l-.194.23a.075.075 0 00.01.106.075.075 0 00.106-.01l.193-.228a.075.075 0 00-.01-.106zm-.482.572a.075.075 0 00-.108.01l-.193.229a.075.075 0 00.01.105.075.075 0 00.105-.008l.194-.23a.075.075 0 00-.008-.105zm-.485.575a.075.075 0 00-.105.008l-.194.228a.075.075 0 00.008.108.075.075 0 00.106-.01l.193-.229a.075.075 0 00-.008-.105zm-.484.572a.075.075 0 00-.106.01l-.193.229a.075.075 0 00.008.105.075.075 0 00.108-.01l.193-.229a.075.075 0 00-.01-.105zm-.54.555a.075.075 0 00-.05.027l-.193.228a.075.075 0 00.01.106.075.075 0 00.105-.008l.194-.23a.075.075 0 00-.01-.106.075.075 0 00-.055-.018zm-.482.574a.075.075 0 00-.05.025l-.196.23a.075.075 0 00.01.106.075.075 0 00.106-.01l.193-.228a.075.075 0 00-.008-.106.075.075 0 00-.055-.017zm-.43.59a.075.075 0 00-.105.01l-.193.228a.075.075 0 00.008.106.075.075 0 00.105-.008l.196-.23a.075.075 0 00-.01-.106zm-.484.574a.075.075 0 00-.105.008l-.193.23a.075.075 0 00.01.106.075.075 0 00.105-.01l.193-.229a.075.075 0 00-.01-.105zm-.539.555a.075.075 0 00-.05.027l-.194.229a.075.075 0 00.01.105.075.075 0 00.106-.01l.193-.228a.075.075 0 00-.01-.106.075.075 0 00-.055-.018zm-.427.59a.075.075 0 00-.106.01l-.193.228a.075.075 0 00.008.105.075.075 0 00.105-.008l.194-.23a.075.075 0 00-.008-.105zm-.485.574a.075.075 0 00-.105.008l-.194.23a.075.075 0 00.008.106.075.075 0 00.106-.01l.195-.229a.075.075 0 00-.01-.105zm-.484.572a.075.075 0 00-.106.01l-.193.228a.075.075 0 00.01.106.075.075 0 00.105-.008l.194-.23a.075.075 0 00-.01-.106zm-.483.574a.075.075 0 00-.107.008l-.193.23a.075.075 0 00.01.106.075.075 0 00.105-.01l.193-.228a.075.075 0 00-.008-.106zm-.484.572a.075.075 0 00-.105.01l-.194.229a.075.075 0 00.008.105.075.075 0 00.106-.01l.193-.228a.075.075 0 00-.008-.106z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.45"
          strokeDashoffset="0.345"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M115.15 137.51l5.313 10.4M115.3 137.8a.075.075 0 00-.033.102l.137.267a.075.075 0 00.101.033.075.075 0 00.031-.101l-.136-.268a.075.075 0 00-.1-.033zm.342.668a.075.075 0 00-.033.102l.136.267a.075.075 0 00.1.033.075.075 0 00.033-.101l-.137-.268a.075.075 0 00-.1-.033zm.34.668a.075.075 0 00-.034.102l.137.267a.075.075 0 00.102.031.075.075 0 00.033-.1l-.137-.267a.075.075 0 00-.101-.033zm.341.668a.075.075 0 00-.033.101l.137.268a.075.075 0 00.102.031.075.075 0 00.03-.1l-.134-.267a.075.075 0 00-.102-.033zm.342.668a.075.075 0 00-.033.101l.137.268a.075.075 0 00.1.031.075.075 0 00.033-.1l-.137-.267a.075.075 0 00-.1-.033zm.34.668a.075.075 0 00-.031.101l.135.268a.075.075 0 00.101.031.075.075 0 00.033-.1l-.136-.267a.075.075 0 00-.102-.033zm.342.668a.075.075 0 00-.033.101l.136.268a.075.075 0 00.102.031.075.075 0 00.031-.1l-.135-.267a.075.075 0 00-.101-.033zm.342.668a.075.075 0 00-.034.101l.137.268a.075.075 0 00.1.031.075.075 0 00.033-.1l-.137-.267a.075.075 0 00-.1-.033zm.34.668a.075.075 0 00-.032.101l.135.268a.075.075 0 00.102.031.075.075 0 00.033-.1l-.137-.267a.075.075 0 00-.101-.033zm.341.668a.075.075 0 00-.033.101l.137.268a.075.075 0 00.101.031.075.075 0 00.034-.1l-.137-.267a.075.075 0 00-.102-.033zm.342.668a.075.075 0 00-.033.101l.137.266a.075.075 0 00.101.033.075.075 0 00.031-.1l-.136-.267a.075.075 0 00-.1-.033zm.34.668a.075.075 0 00-.031.101l.136.266a.075.075 0 00.1.033.075.075 0 00.033-.1l-.136-.267a.075.075 0 00-.102-.033zm.342.668a.075.075 0 00-.033.101l.136.266a.075.075 0 00.102.033.075.075 0 00.033-.102l-.137-.265a.075.075 0 00-.101-.033zm.342.668a.075.075 0 00-.034.101l.137.266a.075.075 0 00.102.033.075.075 0 00.03-.102l-.136-.265a.075.075 0 00-.1-.033zm.34.668a.075.075 0 00-.032.101l.137.266a.075.075 0 00.1.033.075.075 0 00.033-.102l-.137-.265a.075.075 0 00-.102-.033zm.341.668a.075.075 0 00-.033.101l.012.02a.075.075 0 00.1.033.075.075 0 00.032-.102l-.01-.02a.075.075 0 00-.101-.032z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.45"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M115.64 136.92l6.525 3.088M115.97 136.99a.075.075 0 00-.1.035.075.075 0 00.036.102l.271.127a.075.075 0 00.1-.035.075.075 0 00-.036-.1zm.678.32a.075.075 0 00-.1.037.075.075 0 00.035.1l.272.129a.075.075 0 00.1-.037.075.075 0 00-.036-.1zm.677.323a.075.075 0 00-.1.035.075.075 0 00.036.1l.272.128a.075.075 0 00.1-.035.075.075 0 00-.036-.101zm.622.318a.075.075 0 00-.043.037.075.075 0 00.035.1l.271.129a.075.075 0 00.1-.036.075.075 0 00-.035-.1l-.272-.128a.075.075 0 00-.057-.002zm.734.322a.075.075 0 00-.1.037.075.075 0 00.036.1l.271.127a.075.075 0 00.1-.035.075.075 0 00-.036-.1zm.678.322a.075.075 0 00-.1.036.075.075 0 00.035.1l.272.128a.075.075 0 00.1-.037.075.075 0 00-.036-.1zm.677.32a.075.075 0 00-.1.036.075.075 0 00.036.1l.271.128a.075.075 0 00.1-.035.075.075 0 00-.035-.1zm.678.321a.075.075 0 00-.1.035.075.075 0 00.038.102l.27.127a.075.075 0 00.1-.035.075.075 0 00-.036-.1zm.621.318a.075.075 0 00-.043.04.075.075 0 00.037.1l.27.128a.075.075 0 00.101-.037.075.075 0 00-.037-.1l-.27-.129a.075.075 0 00-.058-.002zm.737.325a.075.075 0 00-.102.035.075.075 0 00.037.1l.125.058a.075.075 0 00.1-.035.075.075 0 00-.036-.1z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M115.33 135.67l4.987-3.67M120.08 132.11a.075.075 0 00-.057.014l-.242.177a.075.075 0 00-.015.106.075.075 0 00.105.015l.242-.177a.075.075 0 00.016-.106.075.075 0 00-.049-.029zm-.605.445a.075.075 0 00-.055.014l-.242.178a.075.075 0 00-.016.103.075.075 0 00.106.018l.24-.18a.075.075 0 00.017-.103.075.075 0 00-.05-.03zm-.604.444a.075.075 0 00-.055.013l-.242.178a.075.075 0 00-.015.106.075.075 0 00.103.015l.242-.178a.075.075 0 00.016-.105.075.075 0 00-.049-.03zm-.66.459l-.24.177a.075.075 0 00-.016.106.075.075 0 00.104.015l.242-.177a.075.075 0 00.015-.106.075.075 0 00-.105-.015zm-.604.445l-.242.178a.075.075 0 00-.015.103.075.075 0 00.105.016l.242-.178a.075.075 0 00.016-.103.075.075 0 00-.106-.016zm-.548.43a.075.075 0 00-.055.013l-.242.178a.075.075 0 00-.016.106.075.075 0 00.105.015l.24-.178a.075.075 0 00.018-.105.075.075 0 00-.05-.03zm-.659.459l-.242.177a.075.075 0 00-.015.106.075.075 0 00.103.015l.242-.177a.075.075 0 00.016-.106.075.075 0 00-.104-.015zm-.605.445l-.24.178a.075.075 0 00-.016.103.075.075 0 00.104.016l.242-.178a.075.075 0 00.015-.103.075.075 0 00-.105-.016z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M114.11 135.46l-4.44-9.07M109.63 126.32a.075.075 0 00-.033.102l.008.015a.075.075 0 00.1.035.075.075 0 00.035-.1l-.008-.017a.075.075 0 00-.102-.035zm.207.422a.075.075 0 00-.035.1l.133.269a.075.075 0 00.1.035.075.075 0 00.034-.101l-.132-.27a.075.075 0 00-.1-.033zm.33.674a.075.075 0 00-.035.1l.13.269a.075.075 0 00.102.035.075.075 0 00.034-.102l-.131-.27a.075.075 0 00-.1-.032zm.328.674a.075.075 0 00-.033.1l.13.269a.075.075 0 00.102.035.075.075 0 00.034-.102l-.131-.27a.075.075 0 00-.102-.032zm.389.67a.075.075 0 00-.059.003.075.075 0 00-.033.1l.131.27a.075.075 0 00.102.033.075.075 0 00.033-.1l-.131-.27a.075.075 0 00-.043-.036zm.271.675a.075.075 0 00-.035.102l.133.27a.075.075 0 00.1.033.075.075 0 00.035-.1l-.133-.27a.075.075 0 00-.1-.035zm.387.67a.075.075 0 00-.057.004.075.075 0 00-.035.102l.133.27a.075.075 0 00.1.032.075.075 0 00.035-.1l-.133-.269a.075.075 0 00-.043-.039zm.274.678a.075.075 0 00-.036.101l.133.268a.075.075 0 00.1.035.075.075 0 00.035-.1l-.133-.269a.075.075 0 00-.1-.035zm.33.674a.075.075 0 00-.036.1l.133.269a.075.075 0 00.1.035.075.075 0 00.035-.1l-.133-.27a.075.075 0 00-.1-.034zm.386.67a.075.075 0 00-.058.004.075.075 0 00-.033.1l.13.269a.075.075 0 00.102.035.075.075 0 00.033-.102l-.13-.267a.075.075 0 00-.044-.04zm.272.677a.075.075 0 00-.033.1l.13.27a.075.075 0 00.102.035.075.075 0 00.033-.102l-.13-.27a.075.075 0 00-.102-.033zm.33.674a.075.075 0 00-.033.1l.13.27a.075.075 0 00.1.035.075.075 0 00.035-.102l-.13-.27a.075.075 0 00-.102-.033zm.33.674a.075.075 0 00-.035.1l.133.27a.075.075 0 00.1.034.075.075 0 00.034-.101l-.132-.27a.075.075 0 00-.1-.033zm.33.672a.075.075 0 00-.035.101l.133.27a.075.075 0 00.1.033.075.075 0 00.034-.1l-.132-.269a.075.075 0 00-.1-.035z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M115.18 135.55l7.237-9.022M122.2 126.81a.075.075 0 00-.105.012l-.188.234a.075.075 0 00.012.106.075.075 0 00.105-.012l.188-.235a.075.075 0 00-.012-.105zm-.523.568a.075.075 0 00-.051.028l-.188.234a.075.075 0 00.012.105.075.075 0 00.105-.011l.188-.235a.075.075 0 00-.012-.105.075.075 0 00-.054-.016zm-.471.586a.075.075 0 00-.05.028l-.188.234a.075.075 0 00.011.105.075.075 0 00.106-.011l.187-.235a.075.075 0 00-.011-.105.075.075 0 00-.055-.016zm-.469.584a.075.075 0 00-.05.028l-.188.234a.075.075 0 00.012.105.075.075 0 00.105-.011l.187-.233a.075.075 0 00-.011-.105.075.075 0 00-.055-.018zm-.469.586a.075.075 0 00-.05.028l-.188.234a.075.075 0 00.012.105.075.075 0 00.105-.011l.188-.235a.075.075 0 00-.012-.105.075.075 0 00-.055-.016zm-.47.584a.075.075 0 00-.05.03l-.187.232a.075.075 0 00.01.105.075.075 0 00.106-.011l.19-.233a.075.075 0 00-.012-.105.075.075 0 00-.057-.018zm-.47.586a.075.075 0 00-.05.027l-.187.235a.075.075 0 00.011.105.075.075 0 00.106-.011l.187-.235a.075.075 0 00-.011-.105.075.075 0 00-.055-.016zm-.468.586a.075.075 0 00-.05.027l-.188.233a.075.075 0 00.012.105.075.075 0 00.105-.01l.188-.234a.075.075 0 00-.012-.106.075.075 0 00-.055-.015zm-.469.584a.075.075 0 00-.05.027l-.188.235a.075.075 0 00.012.105.075.075 0 00.105-.011l.188-.235a.075.075 0 00-.012-.105.075.075 0 00-.055-.016zm-.47.586a.075.075 0 00-.05.027l-.189.235a.075.075 0 00.012.105.075.075 0 00.106-.012l.187-.234a.075.075 0 00-.01-.105.075.075 0 00-.056-.016zm-.469.584a.075.075 0 00-.05.027l-.188.235a.075.075 0 00.011.105.075.075 0 00.106-.012l.187-.234a.075.075 0 00-.011-.105.075.075 0 00-.055-.016zm-.469.586a.075.075 0 00-.05.027l-.188.235a.075.075 0 00.012.105.075.075 0 00.105-.012l.188-.234a.075.075 0 00-.012-.105.075.075 0 00-.055-.016zm-.47.584a.075.075 0 00-.05.027l-.187.235a.075.075 0 00.012.105.075.075 0 00.103-.012l.19-.234a.075.075 0 00-.012-.105.075.075 0 00-.056-.016zm-.47.586a.075.075 0 00-.05.027l-.188.235a.075.075 0 00.012.105.075.075 0 00.106-.012l.187-.234a.075.075 0 00-.012-.106.075.075 0 00-.054-.015zm-.468.584a.075.075 0 00-.05.027l-.188.234a.075.075 0 00.011.106.075.075 0 00.106-.012l.187-.234a.075.075 0 00-.011-.106.075.075 0 00-.055-.015z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M100.57 129.18l3.44-15.224M104.03 113.89a.075.075 0 00-.09.057l-.062.271a.075.075 0 00.056.09.075.075 0 00.09-.057l.063-.271a.075.075 0 00-.057-.09zm-.16.709a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.056.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.166.732a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.056.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.166.733a.075.075 0 00-.09.056l-.064.291a.075.075 0 00.056.09.075.075 0 00.088-.056l.067-.293a.075.075 0 00-.057-.088zm-.164.73a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.056.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.166.733a.075.075 0 00-.09.056l-.066.291a.075.075 0 00.056.09.075.075 0 00.09-.056l.066-.291a.075.075 0 00-.056-.09zm-.166.73a.075.075 0 00-.088.057l-.067.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.064-.293a.075.075 0 00-.056-.09zm-.164.733a.075.075 0 00-.09.056l-.067.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.166.73a.075.075 0 00-.09.057l-.067.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.164.732a.075.075 0 00-.09.057l-.067.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.166.731a.075.075 0 00-.09.057l-.067.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.056-.09zm-.166.732a.075.075 0 00-.09.057l-.065.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.064-.293a.075.075 0 00-.056-.09zm-.165.733a.075.075 0 00-.09.056l-.066.291a.075.075 0 00.057.09.075.075 0 00.09-.056l.066-.293a.075.075 0 00-.057-.088zm-.166.73a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.057-.09zm-.164.733a.075.075 0 00-.09.056l-.066.293a.075.075 0 00.057.088.075.075 0 00.09-.056l.064-.291a.075.075 0 00-.055-.09zm-.166.73a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.057-.09zm-.166.733a.075.075 0 00-.09.056l-.064.293a.075.075 0 00.057.09.075.075 0 00.088-.057l.066-.293a.075.075 0 00-.057-.09zm-.164.73a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.057-.09zm-.166.732a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.057-.09zm-.166.733a.075.075 0 00-.088.057l-.066.29a.075.075 0 00.057.09.075.075 0 00.09-.056l.064-.293a.075.075 0 00-.057-.088zm-.164.73a.075.075 0 00-.09.057l-.066.293a.075.075 0 00.057.09.075.075 0 00.09-.057l.066-.293a.075.075 0 00-.057-.09z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M87.567 130.71l13.006-1.477M100.56 129.16l-.01.002a.075.075 0 00-.066.082.075.075 0 00.084.066h.008a.075.075 0 00.066-.084.075.075 0 00-.082-.066zm-.457.053l-.299.033a.075.075 0 00-.064.084.075.075 0 00.082.066l.299-.035a.075.075 0 00.066-.082.075.075 0 00-.084-.066zm-.744.084l-.299.035a.075.075 0 00-.066.082.075.075 0 00.084.066l.296-.033a.075.075 0 00.067-.084.075.075 0 00-.082-.066zm-.746.086l-.3.033a.075.075 0 00-.064.084.075.075 0 00.082.064l.3-.033a.075.075 0 00.064-.082.075.075 0 00-.082-.066zm-.746.084l-.297.033a.075.075 0 00-.067.084.075.075 0 00.082.066l.3-.035a.075.075 0 00.066-.082.075.075 0 00-.084-.066zm-.744.084l-.3.035a.075.075 0 00-.066.082.075.075 0 00.084.066l.3-.033a.075.075 0 00.064-.084.075.075 0 00-.083-.066zm-.747.086l-.296.033a.075.075 0 00-.067.084.075.075 0 00.082.064l.299-.033a.075.075 0 00.066-.082.075.075 0 00-.084-.066zm-.744.084l-.299.033a.075.075 0 00-.066.084.075.075 0 00.084.066l.297-.035a.075.075 0 00.066-.082.075.075 0 00-.082-.067zm-.746.084l-.297.035a.075.075 0 00-.066.082.075.075 0 00.082.066l.299-.033a.075.075 0 00.066-.084.075.075 0 00-.084-.067zm-.744.085l-.299.034a.075.075 0 00-.066.084.075.075 0 00.084.064l.297-.033a.075.075 0 00.066-.082.075.075 0 00-.082-.066zm-.746.084l-.297.034a.075.075 0 00-.066.084.075.075 0 00.082.066l.299-.035a.075.075 0 00.066-.082.075.075 0 00-.084-.066zm-.744.084l-.299.036a.075.075 0 00-.066.082.075.075 0 00.084.066l.296-.033a.075.075 0 00.067-.084.075.075 0 00-.082-.067zm-.746.086l-.3.034a.075.075 0 00-.064.084.075.075 0 00.082.064l.3-.033a.075.075 0 00.066-.082.075.075 0 00-.084-.067zm-.744.084l-.3.034a.075.075 0 00-.066.084.075.075 0 00.084.066l.297-.035a.075.075 0 00.067-.082.075.075 0 00-.082-.067zm-.746.084l-.3.036a.075.075 0 00-.064.082.075.075 0 00.082.066l.3-.033a.075.075 0 00.064-.084.075.075 0 00-.082-.067zm-.747.086l-.296.033a.075.075 0 00-.067.084.075.075 0 00.082.065l.299-.033a.075.075 0 00.066-.082.075.075 0 00-.084-.067zm-.744.084l-.299.035a.075.075 0 00-.066.082.075.075 0 00.084.067l.299-.035a.075.075 0 00.064-.082.075.075 0 00-.082-.067zm-.746.086l-.297.033a.075.075 0 00-.066.082.075.075 0 00.082.067l.299-.033a.075.075 0 00.066-.084.075.075 0 00-.084-.065z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M97.83 135.9l2.698-6.577M100.56 129.25a.075.075 0 00-.098.041l-.011.027a.075.075 0 00.04.098.075.075 0 00.098-.041l.012-.027a.075.075 0 00-.041-.098zm-.182.443a.075.075 0 00-.097.041l-.116.278a.075.075 0 00.041.097.075.075 0 00.098-.04l.115-.278a.075.075 0 00-.04-.098zm-.285.694a.075.075 0 00-.097.04l-.114.278a.075.075 0 00.041.1.075.075 0 00.098-.041l.113-.278a.075.075 0 00-.04-.1zm-.342.695a.075.075 0 00-.04.041l-.114.277a.075.075 0 00.041.098.075.075 0 00.098-.041l.113-.277a.075.075 0 00-.041-.098.075.075 0 00-.057 0zm-.226.693a.075.075 0 00-.098.041l-.115.278a.075.075 0 00.041.097.075.075 0 00.098-.04l.115-.278a.075.075 0 00-.041-.098zm-.285.694a.075.075 0 00-.098.04l-.113.278a.075.075 0 00.04.098.075.075 0 00.098-.041l.114-.278a.075.075 0 00-.041-.097zm-.285.695a.075.075 0 00-.098.041l-.113.277a.075.075 0 00.04.098.075.075 0 00.098-.041l.114-.277a.075.075 0 00-.041-.098zm-.284.693a.075.075 0 00-.1.041l-.113.278a.075.075 0 00.041.097.075.075 0 00.098-.04l.115-.278a.075.075 0 00-.04-.097zm-.343.694a.075.075 0 00-.04.04l-.115.278a.075.075 0 00.041.098.075.075 0 00.1-.041l.113-.278a.075.075 0 00-.04-.097.075.075 0 00-.06 0zm-.284.693a.075.075 0 00-.04.041l-.114.278a.075.075 0 00.041.1.075.075 0 00.098-.042l.113-.28a.075.075 0 00-.041-.097.075.075 0 00-.057 0z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M87.29 148.91l12.826 4.111M87.627 148.94a.075.075 0 00-.094.049.075.075 0 00.05.093l.284.092a.075.075 0 00.094-.048.075.075 0 00-.049-.094zm.715.229a.075.075 0 00-.094.048.075.075 0 00.047.094l.287.092a.075.075 0 00.094-.047.075.075 0 00-.049-.096zm.713.23a.075.075 0 00-.094.047.075.075 0 00.049.096l.285.091a.075.075 0 00.096-.048.075.075 0 00-.05-.096zm.715.228a.075.075 0 00-.094.05.075.075 0 00.049.093l.285.092a.075.075 0 00.094-.049.075.075 0 00-.05-.094zm.714.229a.075.075 0 00-.093.049.075.075 0 00.047.094l.287.091a.075.075 0 00.093-.048.075.075 0 00-.048-.094zm.715.229a.075.075 0 00-.095.048.075.075 0 00.048.094l.286.092a.075.075 0 00.095-.049.075.075 0 00-.049-.094zm.713.228a.075.075 0 00-.094.049.075.075 0 00.05.096l.284.09a.075.075 0 00.094-.048.075.075 0 00-.049-.095zm.715.23a.075.075 0 00-.094.047.075.075 0 00.047.096l.287.092a.075.075 0 00.094-.049.075.075 0 00-.049-.094zm.715.229a.075.075 0 00-.096.049.075.075 0 00.049.094l.285.091a.075.075 0 00.096-.048.075.075 0 00-.049-.094zm.713.229a.075.075 0 00-.094.048.075.075 0 00.049.094l.285.092a.075.075 0 00.094-.049.075.075 0 00-.05-.094zm.715.228a.075.075 0 00-.094.049.075.075 0 00.047.094l.287.091a.075.075 0 00.094-.048.075.075 0 00-.05-.094zm.714.229a.075.075 0 00-.095.048.075.075 0 00.049.096l.285.09a.075.075 0 00.095-.047.075.075 0 00-.048-.096zm.713.23a.075.075 0 00-.093.049.075.075 0 00.048.094l.286.091a.075.075 0 00.093-.048.075.075 0 00-.047-.094zm.715.229a.075.075 0 00-.094.048.075.075 0 00.047.094l.287.092a.075.075 0 00.094-.049.075.075 0 00-.049-.094zm.715.228a.075.075 0 00-.096.049.075.075 0 00.05.094l.284.091a.075.075 0 00.096-.048.075.075 0 00-.049-.094zm.713.229a.075.075 0 00-.094.048.075.075 0 00.049.094l.285.092a.075.075 0 00.094-.049.075.075 0 00-.047-.094zm.715.23a.075.075 0 00-.094.047.075.075 0 00.047.096l.287.091a.075.075 0 00.094-.048.075.075 0 00-.05-.096zm.715.229a.075.075 0 00-.096.048.075.075 0 00.049.094l.285.092a.075.075 0 00.096-.049.075.075 0 00-.05-.094z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M98.098 158.57c.02-.09 1.927-5.47 1.927-5.47M100.05 153.03a.075.075 0 00-.096.045l-.074.207a.075.075 0 00.047.096.075.075 0 00.096-.047l.072-.205a.075.075 0 00-.045-.096zm-.225.63a.075.075 0 00-.095.046l-.1.283a.075.075 0 00.047.096.075.075 0 00.096-.047l.1-.281a.075.075 0 00-.048-.096zm-.25.708a.075.075 0 00-.095.045l-.1.283a.075.075 0 00.045.096.075.075 0 00.096-.045l.101-.283a.075.075 0 00-.047-.096zm-.25.707a.075.075 0 00-.095.045l-.1.283a.075.075 0 00.045.096.075.075 0 00.096-.045l.101-.283a.075.075 0 00-.047-.096zm-.25.707a.075.075 0 00-.095.045l-.1.283a.075.075 0 00.047.096.075.075 0 00.094-.045l.101-.283a.075.075 0 00-.047-.096zm-.25.707a.075.075 0 00-.095.045l-.1.283a.075.075 0 00.047.096.075.075 0 00.096-.045l.1-.283a.075.075 0 00-.048-.096zm-.248.707a.075.075 0 00-.095.045l-.1.283a.075.075 0 00.045.096.075.075 0 00.096-.045l.1-.283a.075.075 0 00-.046-.096zm-.25.707a.075.075 0 00-.095.047l-.098.283a.075.075 0 00.045.096.075.075 0 00.096-.047l.1-.283a.075.075 0 00-.048-.096z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <g
          strokeDasharray="0.3, 0.450001"
          strokeDashoffset="0.42"
          strokeLinecap="round"
          strokeLinejoin="round"
          
        >
          <path
            d="M103.16 165.45l-2.973-12.405M100.2 153.09a.075.075 0 00-.057.09l.07.293a.075.075 0 00.09.054.075.075 0 00.057-.09l-.07-.292a.075.075 0 00-.09-.055zm.174.729a.075.075 0 00-.055.091l.069.291a.075.075 0 00.091.057.075.075 0 00.055-.092l-.07-.29a.075.075 0 00-.09-.057zm.176.73a.075.075 0 00-.057.09l.07.293a.075.075 0 00.09.054.075.075 0 00.057-.09l-.07-.292a.075.075 0 00-.09-.055zm.173.728a.075.075 0 00-.054.092l.068.291a.075.075 0 00.092.055.075.075 0 00.055-.09l-.07-.29a.075.075 0 00-.09-.057zm.176.731a.075.075 0 00-.056.09l.07.29a.075.075 0 00.09.057.075.075 0 00.056-.09l-.07-.292a.075.075 0 00-.09-.055zm.174.728a.075.075 0 00-.055.09l.069.293a.075.075 0 00.092.055.075.075 0 00.054-.09l-.07-.291a.075.075 0 00-.09-.057zm.174.731a.075.075 0 00-.055.09l.07.29a.075.075 0 00.09.057.075.075 0 00.057-.091l-.07-.291a.075.075 0 00-.092-.055zm.176.728a.075.075 0 00-.055.09l.068.293a.075.075 0 00.092.055.075.075 0 00.055-.09l-.07-.293a.075.075 0 00-.09-.055zm.173.729a.075.075 0 00-.054.092l.07.29a.075.075 0 00.09.057.075.075 0 00.056-.091l-.07-.291a.075.075 0 00-.092-.057zm.176.73a.075.075 0 00-.054.09l.068.293a.075.075 0 00.092.055.075.075 0 00.054-.09l-.07-.293a.075.075 0 00-.09-.055zm.174.729a.075.075 0 00-.055.092l.07.29a.075.075 0 00.09.055.075.075 0 00.057-.09l-.07-.29a.075.075 0 00-.092-.057zm.176.73a.075.075 0 00-.055.09l.069.291a.075.075 0 00.091.057.075.075 0 00.055-.09l-.07-.293a.075.075 0 00-.09-.055zm.174.729a.075.075 0 00-.055.09l.07.293a.075.075 0 00.09.054.075.075 0 00.055-.09l-.068-.29a.075.075 0 00-.092-.057zm.175.73a.075.075 0 00-.056.09l.07.291a.075.075 0 00.092.057.075.075 0 00.055-.092l-.07-.291a.075.075 0 00-.09-.055zm.174.729a.075.075 0 00-.054.09l.07.293a.075.075 0 00.09.054.075.075 0 00.054-.09l-.068-.292a.075.075 0 00-.092-.055zm.176.728a.075.075 0 00-.057.092l.07.291a.075.075 0 00.093.057.075.075 0 00.054-.092l-.07-.29a.075.075 0 00-.09-.058zm.174.73a.075.075 0 00-.055.09l.07.294a.075.075 0 00.09.054.075.075 0 00.055-.09l-.068-.292a.075.075 0 00-.092-.055z"
            style={{ InkscapeStroke: "none" }}
            transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
          ></path>
        </g>
        <path
          d="M97.972 158.53l5.218-8.636.16.054-5.113 8.692z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern183)"
          d="M108.24 125.29l-1.392-3.378.263-.236 2.483 2.725z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern182)"
          d="M123.34 125.08l2.813-2.47.234.22-2.438 2.919z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern181)"
          d="M125.74 128.96l-3.378 1.392-.236-.263 2.725-2.483z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern180)"
          d="M100.97 128.71l1.725 1.443-.127.33-2.085-.84z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern179)"
          d="M124.2 140l2.785 2.364-.126.331-3.455-1.285z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern178)"
          d="M108.57 141.02l-3.376 1.344-.203-.29 2.995-2.148z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern177)"
          d="M123.01 153.66l-1.454-3.352.259-.24 2.532 2.678z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fill="url(#pattern176)"
          d="M99.973 152.36l2.715-2.578.242.212-2.323 3.01z"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M83.926 147.72a.075.075 0 00-.096.047.075.075 0 00.047.096l.877.304a.075.075 0 00.096-.045.075.075 0 00-.047-.095z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M83.902 147.79l.478-.23-1.363-.079 1.115.787z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M96.893 161.71a.075.075 0 00-.092.05l-.258.893a.075.075 0 00.051.092.075.075 0 00.092-.05l.258-.891a.075.075 0 00-.051-.094z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M96.614 162.67l-.256-.464-.005 1.365.725-1.157z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M103.77 167.91a.075.075 0 00-.049.094l.28.884a.075.075 0 00.093.05.075.075 0 00.049-.094l-.28-.885a.075.075 0 00-.093-.049z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M104.07 168.87l-.47-.245.752 1.14-.037-1.365z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M84.918 130.91l-.92.11a.075.075 0 00-.066.083.075.075 0 00.084.067l.922-.112a.075.075 0 00.064-.084.075.075 0 00-.084-.064z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M84.006 131.1l.328-.417-1.259.529 1.348.216z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M96.566 138.99a.075.075 0 00-.043.037l-.412.832a.075.075 0 00.033.102.075.075 0 00.102-.036l.41-.832a.075.075 0 00-.033-.1.075.075 0 00-.057-.003z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M96.178 139.89l-.17-.502-.246 1.342.918-1.01z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M104.83 110.39a.075.075 0 00-.088.059l-.185.91a.075.075 0 00.058.088.075.075 0 00.088-.059l.186-.91a.075.075 0 00-.059-.088z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M104.81 110.46l.293.442-.107-1.36-.628 1.211z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M108.17 123.56a.075.075 0 00-.021.104l.037.058a.075.075 0 00.103.022.075.075 0 00.022-.104l-.037-.058a.075.075 0 00-.104-.022z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M108.21 123.62l.518.112-1.025-.9.395 1.306z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M124.8 124.18a.075.075 0 00-.053.023l-.049.05a.075.075 0 00.003.105.075.075 0 00.105-.002l.049-.05a.075.075 0 00-.002-.105.075.075 0 00-.053-.021z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M124.8 124.25l.007.53.647-1.202-1.184.68z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M123.93 129.04l-.057.04a.075.075 0 00-.017.105.075.075 0 00.103.02l.057-.04a.075.075 0 00.02-.106.075.075 0 00-.106-.019z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M123.97 129.11l-.096.522.868-1.055-1.294.437z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M124.9 141.35a.075.075 0 00-.047.033.075.075 0 00.024.104l.058.037a.075.075 0 00.104-.026.075.075 0 00-.026-.103l-.056-.035a.075.075 0 00-.057-.01z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M124.98 141.46l-.516.12 1.312.375-.917-1.011z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M122.69 151.58a.075.075 0 00-.055.014.075.075 0 00-.013.105l.04.055a.075.075 0 00.106.014.075.075 0 00.014-.106l-.041-.055a.075.075 0 00-.051-.027z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M122.72 151.71l-.526-.066 1.101.806-.509-1.266z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M107.06 141.08l-.06.033a.075.075 0 00-.03.102.075.075 0 00.102.03l.06-.034a.075.075 0 00.03-.102.075.075 0 00-.102-.029z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M107.04 141.18l.15-.509-.973.959 1.332-.3z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M101.39 151.41a.075.075 0 00-.105.002l-.047.05a.075.075 0 00.002.106.075.075 0 00.107-.004l.047-.049a.075.075 0 00-.004-.105z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M101.29 151.52l-.015-.53-.629 1.212 1.174-.697z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M101.76 129.72a.075.075 0 00-.102.03.075.075 0 00.03.1l.06.034a.075.075 0 00.102-.031.075.075 0 00-.03-.102z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          fillRule="evenodd"
          d="M101.72 129.79l.508-.153-1.334-.29.979.95z"
          
          style={{ InkscapeStroke: "none" }}
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M98.227 151.93v-.382h.639v-1.759l-.619.386v-.404l.646-.42h.487v2.197h.59v.382z"
          ariaLabel="1"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
        <path
          d="M98.623 128.79v-.295q.083-.184.236-.358.155-.174.388-.363.224-.182.313-.3.091-.118.091-.232 0-.278-.28-.278-.136 0-.209.074-.071.073-.092.22l-.429-.025q.037-.296.221-.452.187-.156.506-.156.345 0 .53.157.185.158.185.442 0 .15-.06.271-.058.121-.15.224-.093.102-.207.191l-.218.174q-.106.085-.194.171-.086.087-.128.185h.99v.35z"
          ariaLabel="2"
          transform="translate(-74.836 -106.35) translate(-8.181 -3.192)"
        ></path>
      </svg>
      {...React.Children.toArray(props.children)}
    </Holder>
  );
}

export default EpolaRepulsion;