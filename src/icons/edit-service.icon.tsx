import React from "react";

interface IconProps {
  fillColor?: string;
  strokeColor?: string;
  size?: number;
}

const EditServiceIcon = (props: IconProps) => {
  const { fillColor, strokeColor, size } = props;

  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Rediger tilbud</title>
        <desc>Edit a service.</desc>
        <g
          id="Rediger-tilbud"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Group"
            transform="translate(24.500000, 11.500000) rotate(-330.000000) translate(-24.500000, -11.500000) translate(23.000000, 3.000000)"
            fill="#000000"
          >
            <rect id="Rectangle" x="0" y="0" width="3" height="12"></rect>
            <polygon id="Rectangle" points="0 14 3 14 1.5 17"></polygon>
          </g>
          <rect
            id="Rectangle"
            fill="#000000"
            x="6"
            y="14"
            width="12"
            height="2"
          ></rect>
          <rect
            id="Rectangle-Copy"
            fill="#000000"
            x="6"
            y="19"
            width="9"
            height="2"
          ></rect>
          <polygon
            id="Rectangle"
            fill="#000000"
            points="1 8 21 8 20 10 3 10 3 25 27 25 27 17 29 13 29 27 1 27 1 10"
          ></polygon>
        </g>
      </svg>
    </div>
  );
};

EditServiceIcon.defaultProps = {
  fillColor: "none",
  strokeColor: "#FF8274",
  size: 32
};

export default EditServiceIcon;
