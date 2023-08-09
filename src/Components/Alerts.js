import React from 'react'

function Alerts(props) {
    const capital=(word)=>{
       const w = word;
       return w.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
    <div style={{height:'40px'}}>
       {props.alert &&  <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alert.type)}</strong>: {props.alert.mssg}
    </div>
        </div>}
        </div>
  )
}

export default Alerts
