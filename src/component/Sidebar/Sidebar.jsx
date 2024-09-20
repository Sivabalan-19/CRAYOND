import React, { useState } from 'react'
import '../../styles/Sidebar.css'
import Iconbox from '../Iconbox/Iconbox'
import { MdDashboard } from 'react-icons/md'

function Sidebar() {
  // const[name,setname] = useState('')

  // const style = {
  //   backgroundcolor: selected == name ?'white' : ''
  // }
  return (
    <div className='sibar'>
        <div className='iconbox'>
                <div className='iconboxcon'><Iconbox name = 'Dashboard' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Sales' icon={<MdDashboard />} /></div>
                <div className='iconboxcon'><Iconbox name = 'Order' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Customer' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Inventory' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Alert' icon={<MdDashboard />}/></div>
        </div>      
    </div>
  )
}

export default Sidebar
