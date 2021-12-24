import React, { Component } from "react";
/*
change the state directly will not update the UI
setState() let react know that he has to rerender the component

calls to setState() are async: so if we log the state on the console the change
will not apear sence the setState() has not updated the state yet, if we want to
excute some code only after the setState() has finish a job we nod to pass a callback
function as a second parameterto the setState() method.
*/
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  increment() {
    this.setState(
      (previousState, props) => ({
        // count:this.state.count+1
        count: previousState.count + 1,
      }),
      () => console.log("callback value - ", this.state.count)
    );
    // calls to setState() are async : the code don't stop the execution
    // console is call before the state is updated
    /* some time we want to call some function just after the setState finish execution
        for this setState method accept a callBack can accept a function as  second parameter */
    console.log(this.state.count);
  }
  /*
    incFive():React will combine all the increment() methodes into one go ... for performance reason 
    whenever we want to change state based on previous state we need to pass in a function to the
    setState()methode
    
    setState() takes obj as first args so unstead of passing in an object we pass a function
    that take the previouState and return a new state 
    */

  incFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        count - {this.state.count} <br />
        <button onClick={() => this.incFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
