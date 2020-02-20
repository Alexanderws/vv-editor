import React from "react";

interface IconProps {
  fillColor?: string;
  strokeColor?: string;
  size?: number;
}

const ServicesRankedIcon = (props: IconProps) => {
  const { fillColor, strokeColor, size } = props;

  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Tilbud rangert</title>
        <desc>Services in a ranked list.</desc>
        <g
          id="Tilbud-rangert"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <rect
            id="Rectangle-Copy-3"
            stroke="#000000"
            stroke-width="2"
            x="9"
            y="4"
            width="19"
            height="5"
          ></rect>
          <circle
            id="Oval"
            fill="#000000"
            cx="4.5"
            cy="6.5"
            r="1.5"
          ></circle>
          <rect
            id="Rectangle-Copy-4"
            stroke="#000000"
            stroke-width="2"
            x="9"
            y="13"
            width="19"
            height="5"
          ></rect>
          <circle
            id="Oval-Copy"
            fill="#000000"
            cx="4.5"
            cy="15.5"
            r="1.5"
          ></circle>
          <rect
            id="Rectangle-Copy-5"
            stroke="#000000"
            stroke-width="2"
            x="9"
            y="22"
            width="19"
            height="5"
          ></rect>
          <circle
            id="Oval-Copy-2"
            fill="#000000"
            cx="4.5"
            cy="24.5"
            r="1.5"
          ></circle>
        </g>
      </svg>
    </div>
  );
};

ServicesRankedIcon.defaultProps = {
  fillColor: "none",
  strokeColor: "#FF8274",
  size: 32
};

export default ServicesRankedIcon;
