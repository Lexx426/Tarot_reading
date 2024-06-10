import React from 'react'

function InfoCards(props) {
    const {name, description, picture} = props
  return (
    <div>
        <h3> {name} </h3>
        <p> {description} </p>
    </div>
  )
}

export default InfoCards