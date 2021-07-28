import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topics:'react'
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        //this.handleCommentsChange=this.handleCommentsChange.bind(this)
    }
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }
    handleCommentsChange = (e)=>{
        this.setState({
            comments: e.target.value
        })
    }
    handleTopicChange=e=>{
        this.setState({
            topic: e.target.value
        })
    }
    handleSbmit = e =>{
        
        alert(`${this.state.username} ${this.state.comments}`)
        e.preventDefault()
    }
    render() {
        const {username,comments,topics}=this.state
        return (
            <form onSubmit={this.handleSbmit}>
            <div>
                <label>UserName</label>
                <input type='text' value={username} 
                onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments}
                onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topics}
                onChange ={this.handleTopicChange} >
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type='submit' >Submit</button>
            </form>
        )
    }
}

export default Form
