import React from 'react'

function Icononly(props) {
  return (
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:'5px'
    }}>
        <div style={{fontSize:'25px',display:'flex',justifyContent:'center',width:'100%'}}>{props.icon}</div>
    </div>
  )
}

export default Icononly
