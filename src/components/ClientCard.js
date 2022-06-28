import React from 'react'

function ClientCard({clientName}) {
    return (
        <div className="flex justify-center items-center text-red-600 text-2xl w-1/4 h-40 shadow-sm bg-gray-300 m-5">
            <h1>{clientName}</h1>
        </div>
    )
}

export default ClientCard
