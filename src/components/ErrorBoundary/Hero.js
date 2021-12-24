import React from 'react'
//if an error is throw all the athers compo are affeted
export default function Hero({heroName}) {
    if (heroName==='Joker') {
        throw new Error('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
