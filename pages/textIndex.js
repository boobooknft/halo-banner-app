<body style={{background: "white"}}>
      {active !== "twitter" && active !== "discord" && (
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
              onClick={selectY00tHandler}
              style={{
                display:"flex",
                align: "stretch",
                padding: "8px 8px 8px 8px",
                marginTop: "30px",
                justifyContent: "center",
                fontSize: "1rem",
                letterSpacing: "0.8px"
              }}
            >
              Generate Banner!
            </button>
          </div>)}
          {active == "choose" && (
            <div>
            <h2
            style={{
              display: "flex",
              color: "#6B7280",
              paddingTop: "80px",
              justifyContent: "center"
            }}
            >
              Choose banner...
            </h2>
            <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "250px",
              justifyContent: "space-around",
              paddingTop: "30px",
              paddingBottom: "128px",   
            }}
            >
            <button
              onClick={twitterClickHandler}
              style={{
                display:"flex",
                align: "stretch",
                padding: "8px 8px 8px 8px",
                marginTop: "30px",
                justifyContent: "center",
                fontSize: "1rem",
                letterSpacing: "0.8px"
              }}
            >
              Twitter
            </button>
            <button
              onClick={discordClickHandler}
              style={{
                display:"flex",
                align: "stretch",
                padding: "8px 8px 8px 8px",
                marginTop: "30px",
                justifyContent: "center",
                fontSize: "1rem",
                letterSpacing: "0.8px"
              }}
            >
              Discord
            </button>
            </div>
            </div>
          )}
        </main>
        {active !== "twitter" && active !== "discord" && (
        <footer>
          <div style={{
            display: "flex",
            justifyContent: "center",
            color: "#6B7280",
            padding: "20px 20px 20px 20px"
          }}>
            <a href="https://twitter.com/its_me_emma_dee"
            target="_blank"> Built by boobook </a>
          </div>
        </footer>
        )}
        {active === "twitter" && (
            <DynamicTwitterCanvas y00tid = {y00tId} />
            )}
        {active === "discord" && (
            <DynamicDiscordCanvas y00tid = {y00tId} />
          )}
      </body>     