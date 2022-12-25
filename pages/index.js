import Image from 'next/image'
import logo from '../assets/y00ts-logo.png'
import React, { useEffect, useState } from 'react'
import TwitterCanvas from '../components/TwitterCanvas'

export default function Home() {
  const [active, setActive] = useState("y00t")
  const [y00tId, sety00tID] = useState(null)


  const twitterClickHandler = () => {
    setActive("twitter")
  }

  return (
    <div style={{background: "#EFF1FB"}}>
    {active !== "twitter" && (
        <header>
        <div style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "center"
        }}>
          <Image
        src={logo}
        alt="y00ts logo"
        width={275}
        />
        </div>
      </header>
    )}
      <main style={{
          display: "flex", 
          justifyContent: "center"
          }}>
        {active == "y00t" && (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          width: "250px",
          paddingTop: "128px",
          paddingBottom: "128px",
          alignItems: "stretch"
        }}>
          <input 
           onChange ={ (e) => sety00tID(e.target.value)}
          style={{
            display:"flex",
            align: "stretch",
            padding: "10px 10px 10px 10px",
            background: "white", 
            boxSizing: "border-box",
            border: "1px solid gray",
            fontSize: "0.95rem",
            letterSpacing: "0.7px",
            color: "#6B7280"
          }}
            type="number" 
            max="15000"
            min="1"
            name="y00t" 
            placeholder="Enter y00t ID..."

          />
          <button
            onClick={twitterClickHandler}
            style={{
              display:"flex",
              align: "stretch",
              padding: "8px 8px 8px 8px",
              marginTop: "30px",
              justifyContent: "center",
              fontSize: "1rem",
              letterSpacing: "0.9px"
            }}
          >
            Generate Banner!
          </button>
        </div>)}
      </main>
      {active !== "twitter" && active !== "discord" && (
      <footer>
        <div style={{
          display: "flex",
          justifyContent: "center",
          color: "#6B7280",
          padding: "20px 20px 20px 20px",
          fontSize: "1.1rem"
        }}>
          <a href="https://twitter.com/its_me_emma_dee"
          target="_blank" rel="noreferrer"> slapped together by boobook </a>
        </div>
      </footer>
      )}
      {active === "twitter" && (
          <TwitterCanvas y00tid = {y00tId} />
          )}
    </div>     
  )
}
