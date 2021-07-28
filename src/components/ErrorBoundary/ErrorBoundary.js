import React, { Component } from 'react'
//if an error is throw only this component is affected
//ErrorBoundary will catch the error and display a fallBack UI
//ErrorBoundary not working for event handler we need to use the regular try catch
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return <h1>something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
