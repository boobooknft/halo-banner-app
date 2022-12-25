
import React, { useState, useEffect, useRef } from 'react'


const Canvas = ( {y00tid} ) => {

    const [image, setImage] = useState(null)
    const [imgData, setImgData] = useState({})
    const [logo, setLogo] = useState(null)
    const y00tImageID = y00tid - 1

    const canvas = useRef(null)

    // This creates a new image to store reference to the y00t image. It grabs the image from 
    // src and saves that reference in state
    useEffect(() => {
        const y00tImage = new Image();
        y00tImage.crossOrigin = "anonymous"
        // url for the image of the y00t. Will be passed as props from y00tid in parent component.
        y00tImage.src = `https://metadata.y00ts.com/y/${y00tImageID}.png` 
        y00tImage.onload = () => setImage(y00tImage)
        }, [])

    // This creates a new image to store reference to the y00ts logo. It grabs the image from 
    // src and saves that reference in state. This can be duplicated to insert any other images 
    // also...e.g. other pfps, logos, designs
    useEffect(() => {
        const y00tsLogo = new Image();
        y00tsLogo.crossOrigin = "anonymous"
        y00tsLogo.src= "https://y00ts-wallpaper.vercel.app/_next/image?url=%2Flogo.png&w=384&q=75"
        y00tsLogo.onload = () => setLogo(y00tsLogo)
         }, [])


    // This draws the image saved in state and grabs the image data from 1 background pixel.
    // This is used to colour the background of the canvas the same as the background of 
    // the pfp. NB. getImageData returns an object of r,g,b,a values
    useEffect(() => {
        const imageData = () => {
            if(image && logo) {
                const ctx = canvas.current.getContext("2d");
                ctx.drawImage(image, (1500-300), (500-300), 300, 300)
                const imageData = ctx.getImageData((1500-299),(500-299),1,1);
                setImgData(imageData)
            }
        }
        imageData()        
    }, [image, logo])

    // This draws the canvas and places the images on the canvas
    useEffect(()=> {
        const drawCanvas = () => {
            if(image && canvas) {
                const ctx = canvas.current.getContext("2d");
                const red = imgData.data[0]
                const green = imgData.data[1]
                const blue = imgData.data[2]
                const alpha = imgData.data[3]
                const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`
                ctx.fillStyle = rgba
                ctx.fillRect(0, 0, 1500, 500);
                ctx.drawImage(logo, (1500/2) -144, (500/2) - 73, (384 * .75), (197 * .75) );
                ctx.drawImage(image, (1500-300), (500-300), 300, 300);
            }
        }
        drawCanvas()
    },[imgData])

  return (
       <canvas 
         ref={canvas}
         width={1500}
         height={500}
       />
  )
}

export default Canvas