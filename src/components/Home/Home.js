import React from 'react'

import Type from './Type'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class="relative overflow-hidden max-h-screen" id="home">
      <div class="container">
        <div class="grid grid-cols-2">

            <div class="flex flex-col py-2 mt-5 max-w-xl text-left">
              <h1 class="block font-bold mt-10 text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-gray-200">
                I am interested in 
              </h1>
              <Type/>
              <p class="pt-14 text-lg text-gray-600">My name is Aaron Tay and I am a year 2 undergraduate at NUS studying Computer Science. 
              I enjoy learning about technology and building software projects in my free time</p>
              <div>

              </div>
              <div class="flex justify-start pt-4">
                <Link class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold border border-gray-400 text-gray-500 hover:border-blue-600 hover:text-blue-600" to={`resume`}>
                    Resume
                </Link>
              </div>
            </div>
            <div class="flex justify-center pl-10">
              <img src={require('../../assets/Student.jpg')} alt='student' class="max-h-96"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home