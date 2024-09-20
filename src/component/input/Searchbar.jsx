import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../../styles/Search.css'
function Sivabalan() {
  return (
    <div className='searchbox'>
      <div><CiSearch /></div>
      <div className='searchinput'><input type="text" className='inpputbox'/></div>
    </div>
  )
}

export default Sivabalan
