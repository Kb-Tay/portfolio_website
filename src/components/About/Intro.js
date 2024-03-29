import React from 'react'

import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div>
      <p>My passion is in software engineering and web development. I also enjoy studying algorithms and is looking towards expanding my knowledge on Artifical Intelligence and Machine Learning.</p>
      <p class="pt-4">I am the most fluent in Java and have experience coding with Python, Javascript, Typescript.</p>
      <p class="pt-4">Feel free to contact me on...</p>
      <div class="flex flex-row space-x-4 pt-2">
        <a href="https://github.com/Kb-Tay">
          <FaGithubSquare class="icon"/>
        </a>
        <a href="www.linkedin.com/in/aaron-tay-kai-boon">
          <AiOutlineLinkedin class="icon"/>
        </a>
      </div>
    </div>
  )
}

export default Intro