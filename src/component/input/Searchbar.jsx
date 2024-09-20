import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../../styles/Search.css'
function Searchbar() {
  return (
    <div className='searchbox'>
      <div><CiSearch />sivabalan branch</div>
      <div className='searchinput'><input type="text" className='inpputbox'/></div>
    </div>
  )
}

export default Searchbar
