import React, { Component } from 'react'
//this is an child compo
class Input extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    focusInput=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <p>Ref can not be attached to functional component</p>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}

export default Input
