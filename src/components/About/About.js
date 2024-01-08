import React from 'react'
import Profile from './Profile'
import Intro from './Intro'

import { Element } from 'react-scroll'

function About() {
  return (
    <div>
      <Element name="aboutme" class="element pb-12" />
      <div class="container mx-auto flex flex-col pt-10">
        
        <div class="grid grid-cols-3 pt-10">
          <div class="col-span-3 pb-10">
            <h1 class="h1">About me</h1>
          </div>
          <div class="col-span-2 text-lg">
            <Intro/>
          </div>
          <div class="col-span-1">
            <Profile/>
          </div>
        </div>
            
      </div>
    </div>
  )
}

export default About