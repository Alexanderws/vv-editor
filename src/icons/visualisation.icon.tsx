import React from "react";

interface IconProps {
  fillColor?: string;
  strokeColor?: string;
  size?: number;
}

const VisualisationIcon = (props: IconProps) => {
  const { fillColor, strokeColor, size } = props;

  return (
    <div style={{ width: size, height: size }}>
      <svg
        width={size + "px"}
        height={size + "px"}
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>Visualisering rett</title>
        <desc>Visualisation of nodes.</desc>
        <g
          id="Visualisering-rett"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <path
            d="M26,12 C28.209139,12 30,13.790861 30,16 C30,18.209139 28.209139,20 26,20 C23.790861,20 22,18.209139 22,16 C22,13.790861 23.790861,12 26,12 Z M26,14 C24.8954305,14 24,14.8954305 24,16 C24,17.1045695 24.8954305,18 26,18 C27.1045695,18 28,17.1045695 28,16 C28,14.8954305 27.1045695,14 26,14 Z"
            id="Combined-Shape"
            fill="#000000"
          ></path>
          <path
            d="M15,21 C17.209139,21 19,22.790861 19,25 C19,27.209139 17.209139,29 15,29 C12.790861,29 11,27.209139 11,25 C11,22.790861 12.790861,21 15,21 Z M15,23 C13.8954305,23 13,23.8954305 13,25 C13,26.1045695 13.8954305,27 15,27 C16.1045695,27 17,26.1045695 17,25 C17,23.8954305 16.1045695,23 15,23 Z"
            id="Combined-Shape"
            fill="#000000"
          ></path>
          <path
            d="M19,3 C21.209139,3 23,4.790861 23,7 C23,9.209139 21.209139,11 19,11 C16.790861,11 15,9.209139 15,7 C15,4.790861 16.790861,3 19,3 Z M19,5 C17.8954305,5 17,5.8954305 17,7 C17,8.1045695 17.8954305,9 19,9 C20.1045695,9 21,8.1045695 21,7 C21,5.8954305 20.1045695,5 19,5 Z"
            id="Combined-Shape"
            fill="#000000"
          ></path>
          <polygon
            id="Rectangle-Copy-2"
            fill="#000000"
            points="9 15 23 15 23 17 9 17"
          ></polygon>
          <path
            d="M7.00033215,17.7322434 L7,25 L5,25 L4.99940385,17.7320906 C5.2937119,17.9024741 5.63546675,18 6,18 C6.36442426,18 6.70608373,17.9025324 7.00033215,17.7322434 Z M7,6 L7.00033215,14.2677566 C6.70608373,14.0974676 6.36442426,14 6,14 C5.63546675,14 5.2937119,14.0975259 4.99940385,14.2679094 L5,6 L7,6 Z"
            id="Combined-Shape"
            fill="#000000"
          ></path>
          <polygon
            id="Rectangle-Copy-5"
            fill="#000000"
            points="5 6 17 6 17 8 5 8"
          ></polygon>
          <polygon
            id="Rectangle-Copy-6"
            fill="#000000"
            points="5 24 12 24 12 26 5 26"
          ></polygon>
          <path
            d="M6,12 C8.209139,12 10,13.790861 10,16 C10,18.209139 8.209139,20 6,20 C3.790861,20 2,18.209139 2,16 C2,13.790861 3.790861,12 6,12 Z M6,14 C4.8954305,14 4,14.8954305 4,16 C4,17.1045695 4.8954305,18 6,18 C7.1045695,18 8,17.1045695 8,16 C8,14.8954305 7.1045695,14 6,14 Z"
            id="Combined-Shape"
            fill="#000000"
          ></path>
        </g>
      </svg>
    </div>
  );
};

VisualisationIcon.defaultProps = {
  fillColor: "none",
  strokeColor: "#FF8274",
  size: 32
};

export default VisualisationIcon;
