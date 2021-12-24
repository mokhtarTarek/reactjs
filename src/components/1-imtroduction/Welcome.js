import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //destructuring in class comp in the render method
    //const { prop1, parop2 } = this.props;
    //const { state1, state2 } = this.state;
    const { compName } = this.props;
    return (
      <div>
        <h1>Class component</h1>
        <h3>welcome from {compName}</h3>
      </div>
    );
  }
}
export default Welcome;
