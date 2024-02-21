import React from 'react'

import ProjectCard from './ProjectCard'

import MoneyManager from '../../assets/Projectpics/Moneymanager.png'
import EusoffApp from '../../assets/Projectpics/Eusoffapp.png'
import Unofas from "../../assets/Projectpics/Unofas.png"
import BigAtHeart from "../../assets/Projectpics/BigAtHeart.png"

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
            content = "Application that I created to manage finances between friends for a internal school hackathon. This app allows you to include your friends in your expenses and notifies them on their dashboard that they owe you expenses."
            hasDemo = {true}
            gitLink = "https://github.com/Kb-Tay/money_manager"
            demoLink = "https://moneymanager-app.vercel.app/"
          />
          <ProjectCard
            imgPath = {EusoffApp}
            imgName = "EusoffApp"
            title = "Eusoff Hall App"
            content = "A web application aiming to solve hall problems. The website is currently being used to handle jersey bidding for over 400 hall students. New features are being added such as room bidding and hall games score updates"
            hasDemo = {false}
            gitLink = "https://github.com/eusoff-hackers/eusoff-website-23-24"
            demoLink = ""
          />
          <ProjectCard
            imgPath = {Unofas}
            imgName = "Unofas"
            title = "UNOFAS"
            content = "Command Line interface contact book for Financial Advisors. This application was programmed in Java and I used it to learn good software development practices and software testing."
            hasDemo = {true}
            gitLink = "https://github.com/AY2324S1-CS2103T-F12-1/tp"
            demoLink = "https://github.com/AY2324S1-CS2103T-F12-1/tp/releases/tag/v1.4"
          />
          <ProjectCard
            imgPath = {BigAtHeart}
            imgName = "BigAtHeart"
            title = "BigAtHeart"
            content = "A fullstack web application developed to help the voluntary organisation Big At Heart efficiently organise their information. The application achieves this by allowing the organisers to post and create custom sign up forms on the UI and also easily track attendances during events with QR codes."
            hasDemo = {true}
            gitLink = "https://github.com/sopa301/h4g"
            demoLink = "https://h4g.vercel.app/"
          />
        </div>
      </div>
    </Element>
    
  )
}

export default Project