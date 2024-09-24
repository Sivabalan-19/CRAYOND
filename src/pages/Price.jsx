import React, { useEffect, useState } from "react";
import { BiSolidEdit, BiSolidOffer } from "react-icons/bi";
// import { BsPersonSquare } from "react-icons/bs";
import { RiCoupon2Fill } from "react-icons/ri";
import Priceline from "../component/Details/Priceline";
import Offeerbox from "../component/Details/Offerbox";
import { FiPrinter } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";
import "../styles/Price.css";
import { TiPrinter } from "react-icons/ti";

function Price({ setcol, cart }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i].total, sum);
      sum = sum + cart[i].quantity * cart[i].price;
    }
    setTotal(sum);
  }, [cart]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="Pricelinehead">
        <div style={{ fontSize: "20px", fontWeight: "700" }}>
          Payment summary
        </div>
        <div style={{ fontSize: "16px", color:'#656f74', height:'100%', display:'flex', alignItems:'center' }}> <span style={{height:'100%', display:'flex', alignItems:'center'}} ><TiPrinter /></span>Ashwin</div>
      </div>

      <div style={{ width: "94%",padding:'0px 3%', height: "20%" }}>
        <div className="pricebox">
          <div>
            <Priceline name="Sub total" price={total * 0.05 + total} />
          </div>
          <div>
            <Priceline name="Taxable Amount" price={total} />
          </div>
          <div>
            <Priceline name="Total Tax" price={total * 0.05} />
          </div>
        </div>
     
        <div style={{height:'28%',marginTop:'2%'}}>
            <div
              style={{
                width: "100%",
                // padding:'0px 3%',
                alignItems:'center',
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "16px" , color:'#4e585e'}}>Grand total</div>
              <div style={{ fontSize: "24px", fontWeight: "500" }}>
                SAR <span style={{fontSize:'30px', fontWeight: "600" }}>{(total).toFixed(2)}</span>
              </div>
            </div>
          </div>
       
      </div>

      <div className="emptyrighpage"></div>
      <div className="firstpagebottom">
        <div className="addnotbox">
          <div>
            <BiSolidEdit />
          </div>
          <div color="#07273d">Add notes</div>
        </div>

        <div className="offercont">
          <div className="offermainbox">
            <Offeerbox icon={<BsPersonCircle />} name="Customer" />
          </div>
          <div className="offermainbox">
            <Offeerbox icon={<RiCoupon2Fill />} name="Coupon " />
          </div>
          <div className="offermainbox">
            <Offeerbox icon={<BiSolidOffer />} name="Discount" />
          </div>
        </div>

        <div className="mainoffersub">
          <div className="printicon">
            <div
              className="offersibox"
              style={{ border: " 1px solid #1263df", borderRadius: "5px" }}
            >
              <div className="offericon" style={{ color: "#1263df" }}>
                <FiPrinter />
              </div>
              <div className="offername" style={{ color: "#1263df" }}>
                Print bill
              </div>
            </div>
          </div>
          <div className="proceedbuttonmain">
            <button className="buttonsub">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
