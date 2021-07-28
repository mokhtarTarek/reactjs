import React from 'react'
import ReactDOM from 'react-dom'
//the h1 fall in the portal-root element and not 
//in the root element : check public/index.html file
function PortalDemo() {
    return ReactDOM.createPortal(
       
            <h1>
                Portals demo
            </h1>,
            document.getElementById('portal-root')
        
    )
}

export default PortalDemo
