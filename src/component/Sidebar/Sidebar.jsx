import React, { useState } from "react";
import "../../styles/Sidebar.css";
import { CiBoxes } from "react-icons/ci";
import { HiMiniBellAlert } from "react-icons/hi2";
import Iconbox from "../Iconbox/Iconbox";
import { BsShop } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import logo from "../../assets/Nestle.png";
import { MdDashboard } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import img from "../../assets/abovelogo.png";

function Sidebar() {
  const [name, setName] = useState("sales");

  const styles = (item) => ({
    backgroundColor: name === item ? "white" : "transparent",
    color: name === item ? "#07273d" : "white",
    boxShadow: name === item ? "0px 0px 15px 2px white" : "",
    borderRadius: "7px",
    transition: "all 0.3s",
  });

  const setname = (item) => {
    setName(item);
  };
  return (
    <div className="sibar">
      <div className="iconboxcon">
        <img src={img} alt="" style={{ height: "60%", width: "80%" }} />
      </div>
      <div className="iconbox" style={{width:'100%'}}>
        <div
          className="iconboxcon"
          style={styles("dash")}
          onClick={() => setname("dash")}
        >
          <Iconbox name="Dashboard" icon={<MdDashboard />} />
        </div>
        <div
          className="iconboxcon"
          style={styles("sales")}
          onClick={() => setname("sales")}
        >
          <Iconbox name="Sales" icon={<RiShoppingCart2Fill />} />
        </div>
        <div
          className="iconboxcon"
          style={styles("order")}
          onClick={() => setname("order")}
        >
          <Iconbox name="Order" icon={<IoNewspaperSharp />} />
        </div>
        <div
          className="iconboxcon"
          style={styles("customer")}
          onClick={() => setname("customer")}
        >
          <Iconbox name="Customer" icon={<BsPersonSquare />} />
        </div>
        <div
          className="iconboxcon"
          style={styles("shop")}
          onClick={() => setname("shop")}
        >
          <Iconbox name="Shop" icon={<BsShop />} />
        </div>
        <div
          className="iconboxcon"
          style={styles("inventory")}
          onClick={() => setname("inventory")}
        >
          <Iconbox name="Inventory" icon={<CiBoxes />} />
        </div>
        <div
          className="iconboxcon"
          style={styles("alert")}
          onClick={() => setname("alert")}
        >
          <Iconbox name="Alert" icon={<HiMiniBellAlert />} />
        </div>
        
      </div>
      <div className="iconboxcon">
        <img
          src={logo}
          alt=""
          style={{ height: "80%", width: "100%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
