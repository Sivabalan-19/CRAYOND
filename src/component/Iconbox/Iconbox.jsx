import React from 'react'

function Iconbox(props) {
  return (
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',gap:'5px'
    }}>
        <div style={{fontSize:'25px',display:'flex',justifyContent:'center',width:'100%'}}>{props.icon}</div>
        <div style={{fontSize:'0.8em',width:'100%',textAlign:'center'}}>{props.name}</div>
    </div>
  )
}

export default Iconbox
