import React, { Component } from 'react'
import FRInput from './FRInput'
/*
steps to create ref in functional comp
1 add ref in the constructor
2 attach the ref to the child FRInput
3 Forward the ref in the child compo
4 define the clickHandler to trigger the ref 
*/
class FRParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref ={this.inputRef} />
                <button onClick={this.clickHandler} >Focus input</button>
            </div>
        )
    }
}

export default FRParentInput
