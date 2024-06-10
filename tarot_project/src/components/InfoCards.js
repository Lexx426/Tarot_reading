import React from 'react'

function InfoCards(props) {
    const {name, description} = props
  return (
    <div>
        <h3> {name} </h3>
    </div>
  )
}

export default InfoCards