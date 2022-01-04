import React from 'react'
const textEdit=()=>{
    alert("Order confirmed");
}
function Button({value,position,color}) {
    return (
        <div className=" mt-5" style={{textAlign:`${position}`}}>
            <button className="ml-5 text-center mx-auto my-0 rounded-full px-5" style={{backgroundColor:`${color}`}} onClick={textEdit}>{value}</button>
        </div>
    )
}

export default Button
