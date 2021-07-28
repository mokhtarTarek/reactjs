import React from 'react'
//context is used to pass value into the deep nested component
//without having to pass the val as props form every compo in the comps tree
//codeVolution is a default value
const UserContext = React.createContext('CodeEvolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext

//UserProvider is responsible for provide a value 
//for all decending compos