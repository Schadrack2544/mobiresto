import React from 'react'

function Foodcard({foodTitle,src,description,price}) {
    return (
        <div className="px-2 my-2 bg-green-200 rounded-2xl mx-2 ">
            <h1 className="font-bold text-gray-900">{foodTitle}</h1>
            <img src={src} alt="food pic" className="" height={240} width={240}/>
            <p>{description}</p>
            <p className="font-bold">Price: {price} Rwf</p>
           
        </div>
    )
}

export default Foodcard
