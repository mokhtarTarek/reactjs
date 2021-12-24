import React from 'react'
//pass params from child to parentComponent using arrow function
//to call the parent function and pass in any number of parameters

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler} >greet Parent</button> */}
            <button onClick={()=>props.greetHandler('child')} >greet Parent</button>
        </div>
    )
}

export default ChildComponent
