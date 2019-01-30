import React from 'react'

function BountyCard(props) {
    return (
        <div className = "bounty-card">
            <h1>{props.fName}</h1>
            <h1>{props.lName}</h1>
            <h2>{props.living}</h2>
            <h3>{props.type}</h3>
        </div>
    )
}

export default BountyCard
