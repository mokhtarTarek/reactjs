import React, { Component } from 'react'
/*setState() make react know that he has to rerender the component
calls to setState() are async

*/
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    /*
    setState() take obj as first args so unstead of passing in an object we pass a function
    that take an obj called previouState and return a new objobject?
    how JS know that previousSatate is an obj?
    well from the function body : previousSate.count mean that previousSate has a property named count
    so maybe previousState obj is created in the memory !
    */
    increment(){
        this.setState((previousState,props)=>({
            // count:this.state.count+1
            count:previousState.count + 1
        
        }),()=>console.log('callback value - ' , this.state.count))
        // calls to setState() are async : the code don't stop the execution 
        // console is call before the state is set
        /* some time we want to call some function just after the setState finish excution
        for this setState method accept a callBack functio as  second parameter */
        console.log(this.state.count)
    }
    /*
    
    we pass a function instead of obj to the setState() method
    incFive():React will combine the increment() methode into one go ... for performance reason 
    whenever we want to change state based on previous state we need to pass in a function to the
    setState()methode
    */
    incFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        
    }
    
    render() {
        return (
            <div>
                count - {this.state.count} <br/>
                <button onClick={()=>this.incFive()} >Increment</button>
            </div>
        )
    }
}

export default Counter
