import React from 'react'
import { useState, useEffect } from 'react'

import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import * as Scroll from "react-scroll";

function Navbar() {
  
  const [isClicked, setIsClicked] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let isScrolling;

    const handleScroll = () => {
      setIsScrolled(true);

      // Clear the timeout to debounce the scroll event
      clearTimeout(isScrolling);

      // Set a timeout to revert isScrolled state after a delay (e.g., 500ms)
      isScrolling = setTimeout(() => {
        setIsScrolled(false);
      }, 400);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

   const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };


  return (
      <header class={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full py-3 sticky top-0 bg-gray-500 ${isScrolled ? 'opacity-70' : 'opacity-100'}`}>
        <nav class={`max-w-[85rem] w-full mx-auto pb-2 px-4 sm:flex sm:items-center sm:justify-between`} aria-label="Global">
          <div class="flex items-center justify-between">
            <button class="flex-none" onClick={() => goToPageAndScroll('home')}>
              <svg class="w-10 h-auto" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="10" fill="black"/>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="white">AT</text>
              </svg>
            </button>
            <div class="sm:hidden">
              <button onClick={handleButtonClick} type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-1" aria-controls="navbar-image-1" aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                
              </button>
              
            </div>
          </div>
          <div id="navbar-image-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 space-x-4">
              <ScrollLink 
                activeClass="active" 
                to="aboutme" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                <button class="nav_text" onClick={() => goToPageAndScroll('aboutme')} aria-current="page">About</button>
              </ScrollLink>
              
              <ScrollLink 
                activeClass="active" 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={50} 
                duration={500} 
                onSetActive={handleSetActive}
              >
                <button class="nav_text" onClick={() => goToPageAndScroll('projects')} aria-current="page">Projects</button>
              </ScrollLink>
              <Link class="nav_text" to={`resume`}>
                Resume
              </Link>
              
            </div>
          </div>
        </nav>
        {isClicked ? 
          <div class="flex flex-col w-full sm:hidden">
          <Link 
            activeClass="active" 
            to="test1" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
          </Link>
            
            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Services
            </a>
          </div>
          : <div></div>
        }
      </header>
  )
}

export default Navbar