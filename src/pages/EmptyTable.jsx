import React from 'react'
import cart from  '../component/assets/cart.png'
import Searchbar from '../component/input/Searchbar'
import { PiJoystickBold } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { FaToriiGate } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDotsVertical } from "react-icons/tb";
import Icononly from '../component/Iconbox/Icononly'
import { LuMinus } from 'react-icons/lu';
import { IoAdd } from 'react-icons/io5';

function EmptyTable({col,setcol}) {
    

  // const [count,setcount] = useState(1)

  // const decrease = () => {
  //     if (count > 0) {
  //         setcount(count - 1);
  //     }
  // };


  const data = [
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
    {descr : 'Chickern BBq Sauce form the India', count:1, amoun: 100.00, },
  ]

    const styles = (item) => ({
        backgroundColor: col === -2 ? "#1263df" : "white",
        color: col === -2 ? "white" : "#1263df",
      });
  return (
    <div style={{width:'100%', height:'100%'}}>
        <div className="searchandicon">
            <div
              style={{
                width: "85%",
                padding: "15px",
                height: "70%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Searchbar />
            </div>
            <button className="icononlyboxbok"
            style={styles(true)}
            onClick={() => setcol(-2)}>
              <div
                className="icononlyb"
                
              >
                <div className="bookchange">
                  <SlBookOpen />
                </div>
              </div>
            </button>
          </div>
          <div className="threeiconandlist">
            <div
              style={{
                width: "28%",
                height: "100%",
                alignItems: "center",
                justifyContent: "start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  justifyContent: "start",
                  display: "flex",
                }}
              >
                Cart Summary
              </div>
              <div
                style={{
                  fontSize: "17px",
                  justifyContent: "start",
                  display: "flex",
                }}
              >
                Order Id: 000007
              </div>
            </div>
            <div
              style={{
                width: "30%",
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
              <div className="tableheadcont" style={{width:'45%',justifyContent:'start'}}>Item</div>
              <div className="tableheadcont" style={{width:'25%',textAlign:'center'}}>Qty</div>
              <div className="tableheadcont" style={{width:'25%',textAlign:'center'}}>Amount(SAR)</div>
              <div className="tableheadcont" style={{width:'5%'}}></div>
            </div>
              
              {
                 data.length === 0 ?
                 (
                  <div className="emptypage">
                  <div>
                      <div style={{width:'100%',textAlign:'center'}}><img src={cart} alt="" style={{height:'50%', width:'50%'}}/></div>
                      <div  style={{width:'100%',textAlign:'center',fontWeight:'700', fontSize:'18px'}}>Cart in Empty</div>
                      <div style={{width:'100%',textAlign:'center'}}>Scan barcode or add items from catalog</div>
                  </div>
                </div>
                 ) :
                 (
                    
              <div className='dish-pricelis'>
              {
              data.map((item) =>
              <div className='trbox'>
                <div className="tablecontvalue" style={{width:'45%',fontSize:"20px",fontWeight:'600',justifyContent:'start'}}>{item.descr}</div>
                <div className="tablecontvalue" style={{width:'25%',textAlign:'center'}}>
                <div className="addsubbot" style={{width:'60%'}}>
                  <button><LuMinus/></button>
                  <button>{item.count}</button>
                  <button><IoAdd/></button>
              </div>
                </div>
                <div className="tablecontvalue" style={{width:'25%', fontSize:'18px',textAlign:'center', fontWeight:'700'}}>{item.amoun}</div>
                <div className="tablecontvalue" style={{width:'5%',color:'gray', fontSize:'20px'}}> <RiDeleteBin6Line/></div>
              </div>
                 ) }
              </div>
                 )
              }

           

         
       


          </div>
      
    </div>
  )
}

export default EmptyTable
