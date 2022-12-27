import React from 'react'
import Image from 'next/image'

const Y00tImage = ( {dataURL} ) => {
  return (
    <Image src = {`${dataURL}`} 
        style={{width: '100%'}}
       />
  )
}

export default Y00tImage