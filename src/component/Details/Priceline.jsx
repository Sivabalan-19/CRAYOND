import React from "react";

function Priceline(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: "20px" }}>{props.name}</div>
      <div style={{ fontSize: "18px", fontWeight: "500" }}>{props.price}</div>
    </div>
  );
}

export default Priceline;
