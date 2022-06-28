import React from 'react'
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <div className="bg-gray-500 min-h-max p-2 flex justify-between">
            <div className="brand text-white text-xl">
                <h1>mobi<span className="text-red-600">resto</span></h1>
            </div>
            <div>
                <ul className="flex text-white uppercase">
                    <li className="p-2"><Link to='/'>Home</Link></li>
                    <li className="p-2"><Link to='/about'>About</Link></li>
                    <li className="p-2"><Link to='/contact'>Contact</Link></li>
                    <li className="p-2"><Link to='/foods'>Food</Link></li>
                    <li className="p-2"><Link to='/orders'>Orders</Link></li>
                </ul>
            </div>

        </div>
    )

}

export default Menu
