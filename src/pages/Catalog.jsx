import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../styles/Catalog.css";
import { RiInformationLine } from "react-icons/ri";
// import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPrintSharp } from "react-icons/io5";

function Catalog({ col, setcol, id, setid, data }) {
  const [name, setName] = useState("all");

  const styles = (item) => ({
    backgroundColor: name === item ? "#1263df" : "white",
    color: name === item ? " white" : "#07273d",
    transition: "all 0.3s",
  });

  const setname = (item) => {
    setName(item);
  };
  return (
    <div style={{ width: "96%", height: "98%" }}>
      <div className="cataloghead">
        <div className="cataclcat">Catalog</div>
        <div className="crossicon">
          <div className="iconscat">
            <BsThreeDotsVertical style={{fontSize:'25px', color:'#07273d'}}/>
          </div>
          <div className="iconscat" onClick={() => setcol(-1)}>
            <RxCross2 style={{color:'#4c565c'}} />
          </div>
        </div>
      </div>

      <div className="scrolldish">
        <button
          className="catalodis"
          style={styles("all")}
          onClick={() => setname("all")}
        >
          All
        </button>
        <button
          className="catalodis"
          style={styles("Favourite")}
          onClick={() => setname("Favourite")}
        >
          <span style={{height:'90%', display:'flex', alignItems:'center'}}>
            <FaRegStar style={{ fontSize: "16px" }} />
          </span>
          Favourite
        </button>
        <button
          className="catalodis"
          style={styles("burger")}
          onClick={() => setname("burger")}
        >
          Burger
        </button>
        <button
          className="catalodis"
          style={styles("Pizza")}
          onClick={() => setname("Pizza")}
        >
          Pizza
        </button>
        <button
          className="catalodis"
          style={styles("Sandwich")}
          onClick={() => setname("Sandwich")}
        >
          Sandwich
        </button>
        <button
          className="catalodis"
          style={styles("Juice")}
          onClick={() => setname("Juice")}
        >
          Juice
        </button>
        <button
          className="catalodis"
          style={styles("IceCream")}
          onClick={() => setname("IceCream")}
        >
          IceCream
        </button>
      </div>

   
     <div className="dishlist">
     <div className="barsize">
        <div className="greid">
        {data.map((item, index) => (
          <div
            onClick={() => {
              setcol(-3);
              setid(item.id);
            }}
            key={index}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #fdfdfd",
              height: "170px",
              width: "150px",
           
              borderRadius: "10px",
            }}
          >
            <div className="imagecl">
              <img src={item.img} alt="" className="dishimage" />
              <div className="iconblured">
                <RiInformationLine className="blurin" />
              </div>
            </div>
            <div className="dishnameconst">
              <div className="dishname">{item.name}</div>
              {item.vari === '' ? <div className="dishvariant"> </div>: <div className="dishvariant">{item.vari} variants </div>}
            </div>
          </div>
        ))}
        </div>
      </div>
     </div>

      <div className="twobuuto">
        <div className="printicon">
          <div
            className="offersibox"
            style={{ border: " 1px solid #1263df", borderRadius: "5px" }}
          >
            <div className="offericon" style={{ color: "#1263df" }}>
              <IoPrintSharp />
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
  );
}

export default Catalog;
