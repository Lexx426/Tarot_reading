import React from 'react'
import tarotData from '../tarot-file/tarot-images.json'

function IndividualCard() {
  console.log(tarotData.name)
  return (
    <div>
      {tarotData.name}
    </div>
  )
}

export default IndividualCard