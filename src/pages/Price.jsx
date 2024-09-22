import React from 'react'
import { BiSolidEdit, BiSolidOffer } from 'react-icons/bi'
import { BsPersonSquare } from 'react-icons/bs'
import { RiCoupon2Fill } from 'react-icons/ri'
import Priceline from '../component/Details/Priceline'
import Offeerbox from '../component/Details/Offerbox'
import { FiPrinter } from 'react-icons/fi'
import '../styles/Price.css'

function Price({setcol}) {
  return (
    <div style={{height:'98%',width:'97%'}}>
      <div className="Pricelinehead">
            <div style={{ fontSize: "20px", fontWeight: "700" }}>
              Payment Summary
            </div>
            <div style={{ fontSize: "18px" }}>Ashwin</div>
          </div>

          <div style={{ width: "100%", height: "20%" }}>
            <div className="pricebox">
              <div>
                <Priceline name="Sub total" price="SAR 0.990" />
              </div>
              <div>
                <Priceline name="Taxable Amount" price="SAR 1.00" />
              </div>
              <div>
                <Priceline name="Total Tax" price="SAR 0.00" />
              </div>
            </div>
            <div>
              <hr />
            </div>

            <div>
              <div>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontSize: "24px" }}>Total Price</div>
                  <div style={{ fontSize: "24px", fontWeight: "500" }}>
                    SAR 0.00
                  </div>
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
              <div>Add Note</div>
            </div>

            <div className="offercont">
              <div className="offermainbox">
                <Offeerbox icon={<BsPersonSquare />} name="Customer" />
              </div>
              <div className="offermainbox">
                <Offeerbox icon={<RiCoupon2Fill />} name="Discount " />
              </div>
              <div className="offermainbox">
                <Offeerbox icon={<BiSolidOffer />} name="Coupon" />
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
  )
}

export default Price
