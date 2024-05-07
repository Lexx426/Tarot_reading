import React, {useState} from 'react'

function MobileNav() {
    const [MobileNav, setMobileNav] = useState(false)
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
        <nav >
            <section className='flex md:hidden'>
                <div className='space-y-2' onClick={() => setMobileNav((prev) => !prev)}>
                    <span className='block w-10 h-0.5 animate-bounce bg-red-400'></span>
                    <span className='block w-10 h-0.5 animate-bounce bg-red-400'></span>
                    <span className='block w-10 h-0.5 animate-bounce bg-red-400'></span>
                </div>
                <div className='border '>
                    <div className="absolute top-0 right-0 px-8 py-8">
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
                    
                
                    <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href='/'>
                            History
                            </a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href='/'>
                                Cards
                            </a>
                            
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href='/'>
                                Quiz
                            </a>
                        </li>
                        <li className="border-b border-gray-400 my-8 uppercase">
                            <a href='/'>
                                Log in
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            
        </nav>

    </div>
  )
}

export default MobileNav