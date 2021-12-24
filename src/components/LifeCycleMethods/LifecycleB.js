import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Tarek'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    
    someFunc(){
        console.log('somecode')
        //this log will not excuted in the console
    }
    componentDidMount(){
        console.log('LifecycleB didMount')
    }
    //Update life cycle method
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate ')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate ')
    }
    //
    render() {
        
        console.log(`LifecycleB render` )
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
