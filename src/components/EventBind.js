import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
    this.clickHandler=this.clickHandler.bind(this);    
    }
    clickHandler(){
        this.setState({
            message:'goodBye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler} >click</button>
            </div>
        )
    }
}

export default EventBind
//binding in render the render method:
//<button onClick={this.clickHandler.bind(this)} >click</button>
//<button onClick={()=>this.clickHandler()} >click</button> :calling the event handler with parenthses and return it's value

// binding in the constructor :
//this.clickHandler=this.clickHandler.bind(this);    
//use arrow function to define an event handler
/*
clickHandler = ()=>{
    this.setState({
        message:'bye'
    })
}
normaly the 4th approache is used in function component
*/