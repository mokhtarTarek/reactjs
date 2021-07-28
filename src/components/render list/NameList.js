import React from 'react'
import Person from './Person'

function NameList() {
   //const names=['bruce','Clark','Diana']
    const persons=[
        {
            id:1,
            name: 'Bruce',
            age: 28,
            skils:'JS'
        },
        {
            id:2,
            name: 'Clark',
            age: 29,
            skils:'React'
        },
        {
            id:3,
            name: 'Diana',
            age: 23,
            skils:'Vue'
        }
    ]
    //const nameList=names.map((name,index)=><h2 key={index}>{name}</h2>)
    const personList=persons.map((person)=><Person key={person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}
export default NameList;
