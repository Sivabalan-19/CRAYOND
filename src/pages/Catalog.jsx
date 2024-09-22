import React from "react";
import { RxCross2 } from "react-icons/rx";
import "../styles/Catalog.css";
import "../styles/Price.css";
import { IoMdStarOutline } from "react-icons/io";
import { RxInfoCircled } from "react-icons/rx";
import pizza from "../component/assets/pizza.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
const data = [
  { img: pizza, name: "Mushroom pizza", id: "1" },
  { img: pizza, name: "Mushroom pizza", id: "2" },
  { img: pizza, name: "Mushroom pizza", id: "3" },
  { img: pizza, name: "Mushroom Chickern BB1Q pizza", id: "5" },
  { img: pizza, name: "Mushroom pizza", id: "5" },
  { img: pizza, name: "Mushroom pizza", id: "6" },
  { img: pizza, name: "Mushroom pizza", id: "7" },
  { img: pizza, name: "Mushroom pizza", id: "8" },
  { img: pizza, name: "Mushroom pizza", id: "9" },
];

function Catalog({ setcol }) {
  return (
    <div style={{ width: "97%", height: "98%" }}>
      <div className="cataloghead">
        <div className="cataclcat">Catalog</div>
        <div className="crossicon">
          <div className="iconscat">
            <BsThreeDotsVertical />
          </div>
          <div className="iconscat" onClick={() => setcol(-1)}>
            <RxCross2 />
          </div>
        </div>
      </div>

      <div className="scrolldish">
        <button className="catalodis">All</button>
        <button className="catalodis" style={{ display: "f" }}>
          <span>
            <IoMdStarOutline />
          </span>
          Favourite
        </button>
        <button className="catalodis">Burger</button>
        <button className="catalodis">Pizza</button>
        <button className="catalodis">Sandwich</button>
        <button className="catalodis">Juice</button>
        <button className="catalodis">IceCream</button>
      </div>

      <div className="dishlist">
        {data.map((item, index) => (
          <div
          onClick={() => setcol(-3)}
            key={index}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid gray",
              height: "99%",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <div className="imagecl">
              <img src={item.img} alt="" className="dishimage" />
              <div className="iconblured"><RxInfoCircled className="blurin"/></div>
            </div>
            <div className="dishnameconst">
              <div className="dishname">{item.name}</div>
              <div className="dishvariant">{item.id} variant</div>
            </div>
          </div>
        ))}
      </div>

      <div className="twobuuto">
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
  );
}

export default Catalog;
