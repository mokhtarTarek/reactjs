import React from "react";

// function Greet(){
//     return <div>Hello Tarek</div>
// }
const Greet= (props)=>{ 
    console.log(props)
    //props are immutable:
    //the parent own the props and can not be changed by thr children
    //destructuring : in the function params : {props}
    //destructuring : in func body : const {name,heroName}=props
    const {name,heroName}=props
    return (
        <div>
            <h1>Functional component</h1>
            <h1>Hello,my name is {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}

/* return React.createElement(
     'div',
     {id:"hello",className:"dummyClass"},
     React.createElement('h1',null,'Functional component')
 )*/
export default Greet;
//default export
//Named export must be imported with same name