import React, { useState } from 'react'
import '../../styles/Sidebar.css'
import Iconbox from '../Iconbox/Iconbox'
import { MdDashboard } from 'react-icons/md'

function Sidebar() {
  const [name, setName] = useState('dash');

  const styles= (item) => ({
    // backgroundColor: name === item ?'white' : 'transparent',
    backgroundColor: name === item ?'white' : 'transparent',
    color:  name === item ?'#07273d' : 'white'
  })

  const  setname = (item) =>
  {
    setName(item)
    console.log(name)
  }

  console.log(name)
  return (
    <div className='sibar'>
        <div className='iconbox'>
                <div className='iconboxcon' style={styles('dash')} onClick={() => setname('dash')}><Iconbox name = 'Dashboard' icon={<MdDashboard />}/></div>
                <div className='iconboxcon' style={styles('item')} onClick={ () =>setname('item')}><Iconbox name = 'Sales' icon={<MdDashboard />} /></div>
                <div className='iconboxcon'><Iconbox name = 'Order' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Customer' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Inventory' icon={<MdDashboard />}/></div>
                <div className='iconboxcon'><Iconbox name = 'Alert' icon={<MdDashboard />}/></div>
        </div>      
    </div>
  )
}

export default Sidebar
