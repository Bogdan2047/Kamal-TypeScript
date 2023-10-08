import React from "react";

interface HorizontalLineProps {
  x1?: any;
  y1?: number;
  y?: number;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ x1, y1, y }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <svg
        className="lines"
        style={{
          height: 10,
          width: "90%",
        }}
      >
        <line x1={x1} y1={y1} y={y} stroke="#DCDCDC" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default HorizontalLine;
