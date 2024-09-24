import React from "react";
import "../../styles/Offerbox.css";

function Icononly(props) {
  return (
    <div className="icononlyb">
      <div
        style={{
          fontSize: "22px",
          display: "flex",
          fontWeight: "400",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {props.icon}
      </div>
    </div>
  );
}

export default Icononly;
