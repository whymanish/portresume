import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='mx-auto border-t max-w-7xl border-gray-400'></div>

      <footer className="w-full  dark:bg-gray-900 py-16">
        <div className="md:px-12 lg:px-28">
          <div className="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
            <div className='flex justify-center'>
            <h1 className='text-2xl text-indigo-600 font-bold'>Quantafile</h1>

            </div>
            <div className='flex justify-center items-center '>
              
            <ul
              
              
            >
              <div className='grid grid-cols-4 gap-4'>
              <a href="https://github.com/Manish026636" target="_blank" rel="noopener noreferrer">
                            <li className='tooltip tooltip-bottom' data-tip="Github">
                                <img src='git.svg' alt='github' className='w-8 h-8'/>
                            </li>
                            </a> 
                            <a href="https://www.behance.net/manishkyadav" target="_blank" rel="noopener noreferrer">   
                            <li className='tooltip tooltip-bottom ' data-tip="Behance">
                            <img src='behance.svg' alt='behnace' className='w-8 h-8'/>

                            </li>
                             </a>
                             <a href="https://twitter.com/my79220" target="_blank" rel="noopener noreferrer">  
                            <li className='tooltip tooltip-bottom ' data-tip="X.com">
                            <img src='x.com.svg' alt='x.com' className='w-8 h-8'/>

                            </li>
                            </a>
                            <a href="https://www.instagram.com/ymanishkumar_" target="_blank" rel="noopener noreferrer">  
                            <li className='tooltip tooltip-bottom ' data-tip="Instagram">
                            <img src='instagram.svg' alt='insagram' className='w-8 h-8'/>

                            </li>
                            </a>
                            </div>
            </ul>
            </div>
            
           

            <div className="text-center">
              <span className="text-sm tracking-wide"
              >Copyright © Quantafile <span id="year"></span> | All right reserved</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
