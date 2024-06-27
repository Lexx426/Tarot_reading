import React from 'react'

function InfoCards(props) {
    const {name, description, picture} = props
  return (
    <div className='column-3 border  border-spacing-1'>
        <h3> {name} </h3>
        <p> {description} </p>
        <p> This is a demo sentence.</p>p
    </div>
  )
}

export default InfoCards