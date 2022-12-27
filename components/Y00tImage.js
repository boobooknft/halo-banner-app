import React from 'react'
import Image from 'next/image'

const Y00tImage = ( {dataURL} ) => {
  return (
    <Image src = {`${dataURL}`} 
        style={{width: '100%'}}
        alt="paint splash background image"
       />
  )
}

export default Y00tImage