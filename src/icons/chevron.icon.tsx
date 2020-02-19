import React from "react";

interface ChevronProps {
  direction?: string;
}

const Chevron = ({ direction }: ChevronProps) => {
  let degrees = 0;
  switch (direction) {
    case "right": {
      degrees = 270;
      break;
    }
    case "left": {
      degrees = 90;
      break;
    }
    case "up": {
      degrees = 0;
      break;
    }
    case "down": {
      degrees = 180;
      break;
    }
    default: {
      degrees = 270;
      break;
    }
  }

  return (
    <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1">
      <desc>Created with Sketch.</desc>
      <g
        id="PIL-OUTLINE"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <polygon
          id="main-path"
          stroke="#000000"
          strokeWidth="1.8"
          transform={`translate(11.000000, 11.000000) rotate(-${degrees}) translate(-11.000000, -11.000000)`}
          points="10.999625 4 2 13.3333333 6.50056248 18 10.999625 13.3333333 15.4994375 18 20 13.3333333"
        ></polygon>
      </g>
    </svg>
  );
};

Chevron.defaultProps = {
  direction: "right"
};

export default Chevron;
