import React from "react";
//child component receive the ref from the parent 
// component and attch it to the native input element
// function FRInput() {
//     return (
//         <div>
//             <input type='text'/>
//         </div>
//     )
// }
const FRInput = React.forwardRef(
    (props,ref)=> {
        return (
          <div>
            <input type="text" ref={ref} />
          </div>
        )
      }
) 

export default FRInput;
