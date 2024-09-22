import React, { useState } from "react";
import "../styles/Variantpage.css";
import { TfiArrowCircleRight } from "react-icons/tfi";
import pizza from "../component/assets/pizza.jpeg";
import { IoAdd } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";

function Variant({setcol}) {

    const [count,setcount] = useState(1)

    const decrease = () => {
        if (count > 0) {
            setcount(count - 1);
        }
    };
  return (
    <div className="variantmaincont">
      <div style={{ width: "96%", height: "96%" }}>
        <div className="varianthead">
          <div style={{ fontSize: "20px", fontWeight: "700" }}>
            Variant & Add-ons
          </div>
          <div className="rightciric">
            <TfiArrowCircleRight />
          </div>
        </div>

        <div className="dishbanner">
          <div className="bannerima">
            <div
              style={{
                width: "70%",
                overflow: "hidden",
                borderRadius: "8px",
                height: "70%",
              }}
            >
              <img
                src={pizza}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="bannerdet">You've already implemented the close functionality inside Catalog using setcol(false)</div>
        </div>

        <div className="addoncont">
              <div className="varibut">Variant(2)</div>
              <div className="addonbut">Add-ons</div>
        </div>

        <div className="radiototocon">
            <div className="quanit">Quantity</div>
            <div className="radiobutbox">
            <div className="radiocon">
                <div className="radiolab">
                    <div className="alic"><input type="radio" name="price" style={{height:'17px', width:'17px'}} id="" /> </div>
                    <div style={{fontSize:'16px'}}>Pizza (large)</div>
                </div>
                <div className="radiovlue">SAR 800.00</div>
            </div>
            <div className="radiocon">
                <div className="radiolab">
                    <div className="alic"><input type="radio" name="price" style={{height:'17px', width:'17px'}}  id="" /> </div>
                    <div style={{fontSize:'16px'}}>Pizza (Medium)</div>
                </div>
                <div className="radiovlue">SAR 800.00</div>
            </div>
            <div className="radiocon">
                <div className="radiolab">
                    <div className="alic"><input type="radio" name="price" style={{height:'17px', width:'17px'}}  id="" /> </div>
                    <div style={{fontSize:'16px'}} className="alic">Pizza (Small)</div>
                </div>
                <div className="radiovlue">SAR 800.00</div>
            </div>
            </div>
        </div>

        <div className="emptyadd">

        </div>

        <div className="varbotom">

            <div className="varbotval">
                <div style={{fontWeight:'400', fontSize:'18px'}}>Item Total</div>
                <div style={{fontWeight:'700', fontSize:'20px'}}>SAR 4,100.00</div>
            </div>

            <div className="varbotbut"> 
                <div className="addsubbot">
                    <button onClick={decrease}><LuMinus/></button>
                    <button>{count}</button>
                    <button onClick={() =>setcount(count+1)}><IoAdd/></button>
                </div>
                <div className="addprodu" onClick={() => setcol(-1)}><button>Add to order</button></div>
            </div>

        </div>

      </div>
    </div>
  );
}

export default Variant;
