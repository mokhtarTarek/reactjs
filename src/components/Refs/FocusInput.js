import React, { Component } from 'react'
import Input from './Input'
//parent comp
//create ref attached to the child compo
class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }
    //the FocusInput is defined in the child component

    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                <Input ref = {this.componentRef} />
                <button onClick={this.clickHandler} >Focus input</button>
            <br/>
            <p>
                this button click handler will create ref to the child ref.current.focus()
                
            </p>
            

            </div>
        )
    }
}

export default FocusInput
