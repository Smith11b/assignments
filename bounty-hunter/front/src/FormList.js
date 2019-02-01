import React from 'react'
import BountyCard from './BountyCard';

function FormList(props) {
    return (
        <div>
         {props.bounties.map(bounty => {
             return <BountyCard key = {bounty._id} {...bounty} bountyDelete = {props.delete}/>
         })}
        </div>
    )
}

export default FormList
