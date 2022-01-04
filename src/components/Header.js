import React from 'react'
import Menu from './Menu'

function Header({address}) {
    return (
        <div>
           <div className="text-gray flex justify-between min-w-full bg-white">
              <div>KN 168 St {address}</div>
              <div>facebook |instagram| twitter</div>
            </div> 
            <Menu/>
        </div>
    )
}

export default Header
