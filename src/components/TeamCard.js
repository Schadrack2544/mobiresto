import React from 'react'

function TeamCard({imageUrl,memberName,position,description}) {
    return (
        <div className="flex flex-col h-auto w-60">
            <div className="team-member">
                <img src={imageUrl} alt="team member" className=" w-20 h-20 rounded-full"/>
            </div>
            <div className="member-name font-bold">{memberName}</div>
            <div className="position pb-5 font-semibold">{position}</div>
            <div className="description font-semibold">{description}</div>
        </div>
    )
}

export default TeamCard
