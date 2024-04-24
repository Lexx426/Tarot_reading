import React from 'react'

function Navbar() {
  return (
    <div >
        <nav >
            <h2 className='text-3xl  '>Tarot Temple</h2>
            <p>History</p>
            <p>Cards</p>
            {/* create drop down menu, All, major, minor, etc */}
            <p>Quiz</p>
            <button>Log In</button>
        </nav>


    </div>
  )
}

export default Navbar