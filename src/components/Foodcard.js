import React from 'react'

function Foodcard({foodTitle,src,description,price}) {
    return (
        <div className="px-2 my-2 bg-black text-gray-300 rounded-2xl mx-2 ">
            <h1 className="font-bold text-gray-300">{foodTitle}</h1>
            <img src={src} alt="food pic" className="" height={240} width={240}/>
            <p>{description}</p>
            <p className="font-bold">Price: ${price} </p>
           
        </div>
    )
}

export default Foodcard
