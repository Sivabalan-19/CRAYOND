import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../../styles/Search.css'
function thiru() {
  return (
    <div className='searchbox'>
      <div style={{height:'100%',width:'5%',display:'flex',alignItems:'center'}}><CiSearch /></div>
      <div className='searchinput'><input type="text" placeholder='Search' className='inpputbox'/></div>
    </div>
  )
}

export default thiru
