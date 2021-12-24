import React, { Component } from 'react'
//look at App.js:
/**
 in react is possible to pass a props whos value is a function to controle
 what should the chiled component rendred 
 */
class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
            </div>
        )
    }
}

export default User
