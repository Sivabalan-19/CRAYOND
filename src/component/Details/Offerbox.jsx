import React from 'react'
import '../../styles/Offerbox.css'
function Offerbox(props) {
  return (
    <div className='offersibox'>
        <div className='offericon'>{props.icon}</div> 
        <div className='offername'>{props.name}</div> 
      
    </div>
  )
}

export default Offerbox
