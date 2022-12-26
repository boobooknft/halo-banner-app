import React from 'react'

const Y00tImage = ( {dataURL} ) => {
  return (
    <img src = {`${dataURL}`} 
        style={{width: '100%'}}
       />
  )
}

export default Y00tImage