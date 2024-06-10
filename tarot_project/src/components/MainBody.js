import React from 'react'
import Carousl from './Carousl'
import InfoCards from './InfoCards'

function MainBody() {
  return (
    <div>
        <h1 className='my-10' > Welcome to the world of Tarot!</h1>
        <p> We hope that this website can bring you knowledge about what exactly is Tarot</p>
        <Carousl/>
        <div>
          <h2>
            What will this website bring you?
          </h2>
          <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <InfoCards name="Alexis" description="Creator of website"/>
          <InfoCards name="Rachel" description="Psychic"/>
          <InfoCards name="Emily" description="Psychic and Witch"/>


        </div>
    </div>
  )
}

export default MainBody