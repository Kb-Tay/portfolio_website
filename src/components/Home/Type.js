import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter 
        options={{
          strings: [
            "Student",
            "Developer",
            "Problem Solver"
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