import React from 'react'
import Button from './Button'

function OrderCard({foodImage,foodName,clientName,clientAddress,clientPhone,foodPrice}) {
    return (
        <div className="flex justify-start bg-black mb-5 border border-black">
            <div className="flex flex-col">
             <img src={foodImage} className="h-auto w-60" alt="food tile"/>
             <h3 className="text-red-600 font-bold pl-2">{foodName}</h3>
             <h3 className="text-green-400 font-bold pl-2">$ {foodPrice}</h3>
            </div>
            <div className="flex  flex-col bg-white w-full justify-center">
               <h1 className="px-5 space-y-3">Client Name: {clientName}</h1>
               <h3 className="px-5 space-y-3">Address: {clientAddress}</h3>
               <h3 className="px-5 space-y-3">Phone: {clientPhone}</h3>
               <Button value="Confirm Order" color="tomato"/>
            </div>
        </div>
    )
}

export default OrderCard
