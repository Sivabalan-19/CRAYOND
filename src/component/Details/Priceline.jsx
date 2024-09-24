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
      <div style={{ fontSize: "16px", color: "#4e585e" }}>{props.name}</div>
      <div style={{ fontSize: "16px", fontWeight: "700" }}>
        SAR {props.price}.00
      </div>
    </div>
  );
}

export default Priceline;
