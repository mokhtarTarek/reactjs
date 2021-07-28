import React, { Component } from 'react'
import MemoComp from '../MemoComp/MemoComp';
import PureCompo from './PureCompo';
import RegularComp from './RegularComp';

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Tarek'
         }
     }
     //setInnterval : reapeat the code every x time
     /*
     recall the setState() every 2 sec wich cause the parent and childs component rerender
     unless we return flase from shouldComponentUpdate()
     the regular compo shouldComponentUpdate() return true by default
     the pure component make shallow comparaison before returning true or false from shouldComponentUpdate()
     if prvious state or props === the current props or state the pure component will not rerender
     */
     componentDidMount(){
         setInterval(() => {
             this.setState({
                 name:'Tarek'
             })
         }, 2000);
         //console.log('componentDidMount')
     }
    render() {
        console.log('---------parent comp render')
        return (
            <div>
                Parent component
                <MemoComp name={this.state.name} />
                {/* <RegularComp name={this.state.name}/> */}
                {/* <PureCompo name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
