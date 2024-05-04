import React from 'react'

function MobileNav() {
  return (
    <div>
        <nav>
            <section>
                <div className='space-y-3'>
                    <span className='block w-10 h-0.5 bg-red-400'></span>
                    <span className='block w-10 h-0.5 bg-red-400'></span>
                    <span className='block w-10 h-0.5 bg-red-400'></span>
                </div>
                <div className='border '>
                    <svg
                        className='h-12 w-12 text-gray-600'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        b
                    >
                        <line x1={18} y1={6} x2={6} y2={18}/>
                        <line x1={6} y1={6} x2={18} y2={18}/>
                    </svg>
                </div>
                <ul>
                    <li>
                        History
                    </li>
                    <li>
                        Cards
                    </li>
                    <li>
                        Quiz
                    </li>
                    <li>
                        Log in
                    </li>
                </ul>
            </section>
            
        </nav>

    </div>
  )
}

export default MobileNav