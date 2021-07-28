import React from 'react';
/*
HOC is a function taht take a component as argument and return a new component
HOC :Higher order component is used to share
functionality between other component without having to repeat the code
NB: this function will return a newComponent (instance of this NewComponent )
that have unique state and props for each of them!!!
*/
const withCounter=(WrappedComponent,IncrementNumber)=>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount=()=>{
            this.setState((prevState)=>{
                return{count: prevState.count + IncrementNumber}
            })
        }
        render() {
            
            return (
                <WrappedComponent 
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}//when create HOC make sure
                //to pass down the rest of props : see name='Tarek' in App
                />
            )
        }
    }
    return WithCounter
}
export default withCounter