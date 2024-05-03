import React from 'react'

function Navbar() {
  return (
    <div >
        <nav className='flex  w-screen items-center justify-around z-10 fixed h-14 border border-solid border-red-700'>
            <h2 className='text-3xl '>Tarot Temple</h2>
            <div className='flex items-center w-2/5 justify-evenly border border-solid border-green-700'>
                <a>History</a>
                <a>Cards</a>
                {/* create drop down menu, All, major, minor, etc */}
                <a>Quiz</a>
                <button className='bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Log In</button>
            </div>
            
        </nav>


    </div>
  )
}

export default Navbar