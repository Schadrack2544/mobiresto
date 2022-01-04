import React from 'react';
function Testimonial({message,name, time,image}){
  return (
      <div className="bg-white rounded-xl p-5 text-center mx-2.5 my-2.5">
        <p>{name}</p>
        <img src={image} className="h-10 w-10 my-0 mx-auto rounded-2xl" alt="document"/>
        <p className="font-bold" >{message}</p>
        <p>{time}</p>
      </div>
  )
}
export default Testimonial
