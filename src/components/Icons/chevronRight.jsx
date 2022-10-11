import React from "react";

const chevronRight = (props) => (
  <svg
    stroke="currentColor"
    fill="#ffffff"
    strokeWidth={0}
    viewBox="0 0 16 16"
    height="30px"
    width="30px"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      stroke="none"
    />
  </svg>
);
export default chevronRight;
