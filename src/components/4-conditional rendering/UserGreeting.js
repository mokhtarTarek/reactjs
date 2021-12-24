import React, { Component } from 'react'
//conditionnaly rendering based on isLoggedIn state
 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        //short circuit approache ------
        //evaluate the left hand before continue
        // return this.state.isLoggedIn && <div>Welcome Tarek</div>

        //Approache3 : ternary operator ----inside JSX
        return(
           this.state.isLoggedIn ?
           <div>welcome Tarek</div>:
           <div>welcome Guest</div>
        )
        //approache2: ---------------Outside jsx
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>welcome Tarek</div>
        // }else{
        //     message = <div>welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )

        //approache1:--------- outside JSX
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>welcome Tarek</div>
        //     )
        // }else{
        //     return(
        //         <div>welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>welcome Tarek</div>
        //         <div>welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
