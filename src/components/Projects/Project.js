import React from 'react'

import ProjectCard from './ProjectCard'

import MoneyManager from '../../assets/Projectpics/Moneymanager.png'
import EusoffApp from '../../assets/Projectpics/Eusoffapp.png'
import Unofas from "../../assets/Projectpics/Unofas.png"

import { Element } from 'react-scroll'

function Project() {
  return (
    <Element name='projects' className='element'>
      <div class="container">
        <h1 class="h1 text-center">My Projects</h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          <ProjectCard
            imgPath = {MoneyManager}
            imgName = "Money Manager"
            title = "Money Manager App"
            content = "Fullstack application I made for an internal competition in school."
            hasDemo = {true}
            gitLink = "https://github.com/Kb-Tay/money_manager"
            demoLink = "https://moneymanager-app.vercel.app/"
          />
          <ProjectCard
            imgPath = {EusoffApp}
            imgName = "EusoffApp"
            title = "Eusoff Hall App"
            content = "One stop application to handle all hall issues."
            hasDemo = {false}
            gitLink = "https://github.com/eusoff-hackers/eusoff-website-23-24"
            demoLink = ""
          />
          <ProjectCard
            imgPath = {Unofas}
            imgName = "Unofas"
            title = "UNOFAS"
            content = "Command Line interface contact book for Financial Advisors."
            hasDemo = {true}
            gitLink = "https://github.com/AY2324S1-CS2103T-F12-1/tp"
            demoLink = "https://github.com/AY2324S1-CS2103T-F12-1/tp/releases/tag/v1.4"
          />
        </div>
      </div>
    </Element>
    
  )
}

export default Project