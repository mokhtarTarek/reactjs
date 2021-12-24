import React from 'react'
//the key prop is not accessible in the child component
function Person({person}) {
    return (
        <div>
            <h2> my name is {person.name} i'm {person.age} old , i know {person.skils}  </h2>
        </div>
    )
}

export default Person
