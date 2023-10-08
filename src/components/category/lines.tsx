import React from "react";

interface LinesProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const Lines: React.FC<LinesProps> = ({ x1, y1, x2, y2 }) => {
  return (
    <svg className="lines" style={{ height: 40, width: 200 }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#DCDCDC" strokeWidth="2" />
    </svg>
  );
};

export default Lines;
