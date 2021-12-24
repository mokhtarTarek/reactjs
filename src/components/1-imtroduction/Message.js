import React, { Component } from "react";
/*
the props is send to this component from parent
and it can't be changed by the children
the solution is to use state 
state is an object that privatly maintaned inside the component
state can be changed within the component
state is declared in the class constructor
*/
class Message extends Component {
    //the call to the super() constructor must be done
    //since we extends this class from it  
    constructor(props){
        super(props)
        this.state={
            message:'Welcome visitor'
        }
    }

    // this is an event handler : listen to the button click
    changeMessage(){
        this.setState({
            message:'thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
