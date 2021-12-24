import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
/* Mounting life cycle
LifecycleA constructor
LifecycleA.js:13 LifecycleA getDerivedStateFromProps
LifecycleA.js:26 LifecycleA render
LifecycleA.js:22 LifecycleA didMount

Mounting life cycle with chiled component :
LifecycleA constructor
LifecycleA.js:19 LifecycleA getDerivedStateFromProps
LifecycleA.js:32 LifecycleA render
LifecycleB.js:10 LifecycleB constructor
LifecycleB.js:13 LifecycleB getDerivedStateFromProps
LifecycleB.js:26 LifecycleB render
LifecycleB.js:22 LifecycleB componentdidMount
LifecycleA.js:28 LifecycleA componentdidMount

the update cycle method is triggred when props or state are changed
LifecycleA getDerivedStateFromProps
LifecycleA.js:44 LifecycleA shouldComponentUpdate
LifecycleA.js:63 LifecycleA render
LifecycleB.js:13 LifecycleB getDerivedStateFromProps
LifecycleB.js:26 LifecycleB shouldComponentUpdate
LifecycleB.js:39 LifecycleB render
LifecycleB.js:30 LifecycleB getSnapshotBeforeUpdate 
LifecycleA.js:48 LifecycleA getSnapshotBeforeUpdate 
LifecycleB.js:34 LifecycleB componentDidUpdate 
LifecycleA.js:52 LifecycleA componentDidUpdate 
*/
class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Tarek'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    someFunc(){
        console.log('somecode')
        //this log will not excuted in the console
    }
    componentDidMount(){
        console.log('LifecycleA componentdidMount')
    }
    //Update if the shouldComponentUpdate return true (by default)
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate ')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate ')
    }
    //
    changeState=()=>{
        this.setState({
            name:'codeVolution'
        })
        //console.log(this.state.name)
    }
    render() {
        
        console.log(`LifecycleA render` )
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState} >Change state</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
