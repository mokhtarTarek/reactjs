import React, { Component } from 'react'

class CounterTwo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0
        }
      }
      incrementCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + 1 }
        })
      }

      //this mean take this state.count and this.increment function
      //and render wathever you is passed 

    render() {
        
        return (
            <div>
                {/* we pass the render function as props with tow parameters  */}
                {/*render is a function that take two params and return a new component (see App.js CounterTwo) */}
                {this.props.children(this.state.count,this.incrementCount)}
            </div>
        )
    }
}

export default CounterTwo
