import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl dark:bg-gray-900">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div
            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-400 capitalize lg:text-3xl dark:text-white">
              About <span className="text-blue-500">Me</span> <br />
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="qt.png" alt="" />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white lg:text-gray-800 md:text-7xl lg:text-5xl">Manishkumar Yadav</h1>


                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  “ I have a Bachelor's in Electronics and Telecommunication Engineering, and I'm a UI/UX and front-end developer. I excel in React.js, JavaScript, HTML5, CSS3, and Tailwind CSS, crafting user-friendly web applications that blend technical expertise with creative design. ”
                </p>
                <div className='mt-10'>
                  <a href="https://drive.google.com/file/d/1DJ6Al4f77EvOxMFzKIY56seW_qzHTQYG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-md  bg-sky-500 text-white  text-lg font-semibold text-primary transition duration-300 hover:border-transparent hover:bg-primary ">
                    My_Resume.pdf
                  </a>
                </div>
                <div className="flex flex-wrap  w-full mt-4 -mx-4 text-left">
                  <div className="w-1/4 hidden lg:block p-4 mt-4 sm:w-1/4">
                    <span className="tooltip" data-tip="Github">
                      <a href="https://github.com/Manish026636" target="_blank" rel="noopener noreferrer">
                        <img src='github.svg' alt='' className=' w-10 h-10' /></a></span>
                  </div>
                  <div className="w-1/4 block lg:hidden  p-4 mt-4 sm:w-1/4">
                    <span className="tooltip" data-tip="Github">
                      <a href="https://github.com/Manish026636" target="_blank" rel="noopener noreferrer">
                        <img src='git.svg' alt='' className=' w-10 h-10' /></a></span>
                  </div>
                  <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                    <span className="tooltip" data-tip="Behance">
                      <a href="https://www.behance.net/manishkyadav" target="_blank" rel="noopener noreferrer">
                        <img src='behance.svg' alt='' className='w-10 h-10' /></a></span>

                  </div>
                  <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                    <span className="tooltip" data-tip="X.com">
                      <a href="https://twitter.com/my79220" target="_blank" rel="noopener noreferrer">
                        <img src='x.com.svg' alt='' className='w-10 h-10' /></a></span>

                  </div>
                  <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                    <span className="tooltip" data-tip="Instagram">
                      <a href="https://www.instagram.com/ymanishkumar_" target="_blank" rel="noopener noreferrer">
                        <img src='instagram.svg' alt='' className='w-10 h-10' /></a></span>

                  </div>
                </div>


              </div>
            </div>

            <div className="flex hidden lg:block items-center justify-between mt-12 lg:justify-start">
              <button title="left arrow" className="p-2 bg-blue-700 text-gray-800 transition-colors duration-300  rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">

              </button>

              <button title="right arrow" className="p-2 bg-cyan-600 text-gray-800 transition-colors duration-300  rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
