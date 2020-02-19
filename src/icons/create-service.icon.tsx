import React from "react";

interface IconProps {
  fillColor?: string;
  strokeColor?: string;
  size: number;
}

const CreateServiceIcon = (props: IconProps) => {
  const { fillColor, strokeColor, size } = props;

  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Opprett tilbud</title>
        <desc>Create a new service.</desc>
        <g
          id="Opprett-tilbud"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <polygon
            id="Rectangle"
            fill="#000000"
            points="1 10 17 10 17 12 3 12 3 27 27 27 27 17 29 17 29 29 1 29"
          ></polygon>
          <rect
            id="Rectangle"
            fill="#000000"
            x="6"
            y="16"
            width="13"
            height="2"
          ></rect>
          <rect
            id="Rectangle-Copy"
            fill="#000000"
            x="6"
            y="21"
            width="9"
            height="2"
          ></rect>
          <g
            id="Group"
            transform="translate(19.000000, 3.000000)"
            fill="#000000"
          >
            <rect id="Rectangle" x="5" y="0" width="2" height="12"></rect>
            <rect
              id="Rectangle-Copy-2"
              transform="translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000) "
              x="5"
              y="0"
              width="2"
              height="12"
            ></rect>
          </g>
        </g>
      </svg>
    </div>
  );
};

CreateServiceIcon.defaultProps = {
  fillColor: "none",
  strokeColor: "#FF8274",
  size: 32
};

export default CreateServiceIcon;
