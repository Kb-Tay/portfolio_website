import React from 'react'

import Type from './Type'

function Home() {
  return (
    <div class="relative overflow-hidden max-h-screen">
      <div class="container">
        <div class="grid grid-cols-2">

            <div class="flex flex-col py-2 mt-5 max-w-xl text-left">
              <h1 class="block font-bold mt-10 text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-gray-200">
                Hello I'm a
              </h1>
              <Type/>
              <p class="pt-14 text-lg text-gray-600">My name is Aaron Tay and I am an undergraduate at NUS studying Computer Science. 
              I enjoy learning about technology and building software projects in my free time</p>
              <div>

              </div>
              <div class="flex justify-start pt-4">
                <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold border border-gray-400 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Resume
                </button>
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