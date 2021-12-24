import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
//passing method as props to the child component
//and how to receive argument for this method from child  component

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  //the function receive param from childComponent
  greetParent(chiledName) {
    alert(`hello ${this.state.parentName} from ${chiledName}`);
  }
  render() {
    return <div>
        <ChildComponent greetHandler = {this.greetParent} />
    </div>;
  }
}

export default ParentComponent;
