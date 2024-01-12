import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter 
        options={{
          strings: [
            "Software Engineering",
            "Artifical Intelligence",
            "Fullstack development",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
    
  )
}

export default Type