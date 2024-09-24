import React from "react";
import cartt from "../assets/cart.png";
import Searchbar from "../component/input/Searchbar";
import { PiJoystickBold } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { FaToriiGate } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDotsVertical } from "react-icons/tb";
import Icononly from "../component/Iconbox/Icononly";
import { LuMinus } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
// import { MdPersonPinCircle } from "react-icons/md";

function EmptyTable({ col, setcol, cart, setcart }) {
  const styles = (item) => ({
    backgroundColor: col === -2 ? "#1263df" : "white",
    color: col === -2 ? "white" : "#1263df",
  });

  const handleAdd = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setcart(updatedCart);
  };

  const handleSubtract = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setcart(updatedCart);
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="searchandicon">
        <div
          style={{
            width: "90%",
            height: "55%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Searchbar />
        </div>
        <button
          className="icononlyboxbok"
          style={styles(true)}
          onClick={() => setcol(-2)}
        >
          <div className="icononlyb">
            <div className="bookchange">
              <SlBookOpen />
            </div>
          </div>
        </button>
      </div>
      <div className="threeiconandlist">
        <div
          style={{
            width: "25%",
            marginLeft:'3%',
            height: "100%",
            justifyContent:'start',
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              justifyContent: "start",
              display: "flex",
              fontWeight: "700",
              width:'100%'
            }}
          >
            Cart summary
          </div>
          <div
            style={{
              fontSize: "17px",
              justifyContent: "start",
              display: "flex",
              width:'100%'
            }}
          >
           <span style={{color:'#6a7174'}}>Order ID</span>: 000007
          </div>
        </div>
        <div
          style={{
            width: "25%",
            alignItems: "center",
            height: "100%",
            display: "flex",
            padding: "0% 3%",
            justifyContent: "space-between",
          }}
        >
          <div className="icononlybox">
            <Icononly icon={<PiJoystickBold />} />
          </div>
          <div className="icononlybox">
            <Icononly icon={<FaToriiGate />} />
          </div>
          <div className="icononlybox">
            <Icononly icon={<TbDotsVertical />} />
          </div>
        </div>
      </div>
      <div className="unknowtableheder">
        <div className="tablehade">
          <div
            className="tableheadcont"
            style={{ width: "45%", justifyContent: "start" , fontSize:'16px' }}
          >
            Item
          </div>
          <div
            className="tableheadcont"
            style={{ width: "25%", textAlign: "center" , fontSize:'16px' }}
          >
            Qty
          </div>
          <div
            className="tableheadcont"
            style={{ width: "25%", textAlign: "center"  , fontSize:'16px'}}
          >
            Amount (SAR)
          </div>
          <div className="tableheadcont" style={{ width: "5%" }}></div>
        </div>
        {cart.length === 0 ? (
          <div className="emptypage">
            <div style={{height:'30%', width:'50%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'
            }}>
              <div style={{ width: "100%",  height:'40%',textAlign: "center" }}>
                <img
                  src={cartt}
                  alt=""
                  style={{ height: "100%", width: "20%" }}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Cart is Empty
              </div>
              <div style={{ width: "100%", textAlign: "center" , color:'#6a7174'}}>
                Scan barcode or add items from catalog
              </div>
            </div>
          </div>
        ) : (
          <div className="dish-pricelis">
            {cart.map((item, index) => (
              <>
              <div className="trbox" key={index}>
                <div
                  className="tablecontvalue"
                  style={{
                    width: "45%",
                    fontSize: "20px",
                    fontWeight: "500",
                    justifyContent: "start",
                  }}
                >
                  {item.name}
                </div>
                <div
                  className="tablecontvalue"
                  style={{ width: "25%", textAlign: "center" }}
                >
                  <div className="addsubbot" style={{ width: "60%" }}>
                    <button onClick={() => handleSubtract(index)}>
                      <LuMinus />
                    </button>
                    <button>{item.quantity}</button>
                    <button onClick={() => handleAdd(index)}>
                      <IoAdd />
                    </button>
                  </div>
                </div>
                <div
                  className="tablecontvalue"
                  style={{
                    width: "25%",
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                >
                  {item.quantity * item.price}.00
                </div>
                <div
                  className="tablecontvalue"
                  style={{ width: "5%", color: "#979b9e", fontSize: "20px" }}
                >
                  <RiDeleteBin6Line />
                </div>
              </div>
              <div className="line"></div></>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default EmptyTable;
