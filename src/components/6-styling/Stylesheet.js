import React from 'react'
import "./myStyle.css";
//conditionaly apply style sheet : 
//we pass a prop from the parent comp = false || true
function Stylesheet(props) {
    let className = props.primary?'primary':''
    return (
        <div>
            {/* <h1 className="primary" >stylesheet</h1> */}
            <h1 className= {`${className} font-xl`} >stylesheet</h1>
        </div>
    )
}
export default Stylesheet

