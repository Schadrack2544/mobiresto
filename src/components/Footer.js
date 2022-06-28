import React from 'react'

function Footer() {
    return (
        <div className="bg-gray-500">
             <div className="p-2 text-center">
              &copy;copyright {new Date().getFullYear()} mobiresto Ltd
            </div>
        </div>
    )
}

export default Footer
