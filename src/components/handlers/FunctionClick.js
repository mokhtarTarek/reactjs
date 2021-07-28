import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
} 

export default FunctionClick
// wrong !!!!  onClick = {clickHandler()} : is a function call 
// onClick = {clickHandler} : is a function
