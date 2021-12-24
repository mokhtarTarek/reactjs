import React from 'react'

function MemoComp({name}) {
    console.log('rendering Memo compo')
    return (
        <div>
            {name}
        </div>
    )
}
//avoid rerendering the component if the props is not changed
export default  React.memo(MemoComp) 
