import React from 'react'

function ProjectCard(props) {
  return (
    <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl card_trans">
      <div class="h-52 flex flex-col justify-center items-center bg-gray-400 rounded-t-xl">
        <img src={props.imgPath} alt={props.imgName} class="overflow-hidden h-full w-full rounded-t-lg" />
      </div>
      <div class="p-4 md:p-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {props.title}
        </h3>
        <p class="mt-3 text-gray-500">
          {props.content}
        </p>
      </div>
      <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
        <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50" href={props.gitLink}>
          Github
        </a>
        {props.hasDemo 
          ? 
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50" href={props.demoLink}>
            Demo
          </a> : <></>}
      </div>
    </div>
  )
}

export default ProjectCard