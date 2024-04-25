import React from 'react'

function Navbar() {
  return (
    <div >
        <nav className='flex gap-5'>
            <h2 className='text-3xl  '>Tarot Temple</h2>
            <a>History</a>
            <p>Cards</p>
            {/* create drop down menu, All, major, minor, etc */}
            <p>Quiz</p>
            <button className='bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Log In</button>
        </nav>


    </div>
  )
}

export default Navbar