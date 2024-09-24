import React from "react";
import { IoSearch } from "react-icons/io5";
import "../../styles/Search.css";
function thiru() {
  return (
    <div className="searchbox">
      <div
        style={{
          height: "100%",
          width: "5%",
          fontSize:'22px',
          display: "flex",
          alignItems: "center",
        }}
      >
        <IoSearch style={{color:'#3d4b53'}} />
      </div>
      <div className="searchinput">
        <input type="text" placeholder="Search" className="inpputbox" />
      </div>
    </div>
  );
}

export default thiru;
