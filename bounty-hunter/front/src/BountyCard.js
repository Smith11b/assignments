import React from 'react';
import axios from "axios";

function BountyCard({fName, lName, living, type, bounty, _id, ...props}) {
    return (
        <div className = "bounty-card">
            <h1>{fName}</h1>
            <h1>{lName}</h1>
            <h2>{bounty}</h2>
            <h2>{living}</h2>
            <h3>{type}</h3>
            <button onClick = {() => props.bountyDelete(_id)}>X</button>
        </div>
    )
}

export default BountyCard
