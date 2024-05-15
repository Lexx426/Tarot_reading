import React from 'react'
import tarotData from '../tarot-file/tarot-images.json'

function IndividualCard() {
  console.log(tarotData.name)
  return (
    <div>
      {tarotData.name}
      {tarotData.img}
    </div>
  )
}

export default IndividualCard