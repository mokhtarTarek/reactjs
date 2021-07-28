import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //destructuring in class comp in the render methode
    const { compName } = this.props;
    //const { state1, state2 } = this.state;
    return (
      <div>
        <h1>Class component</h1>
        <h3>welcome from {compName}</h3>
      </div>
    );
  }
}
export default Welcome;
