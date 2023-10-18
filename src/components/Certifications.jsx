import React from 'react'

const Certifications = () => {
    return (
        <div className='mb-20'>
            <div className="container m-auto mt-16 px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="bg-gradient-to-br three-d max-w-sm rounded-3xl from-blue-500 to-purple-600 py-8 md:bg-gradient-to-r">
                    <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
                        <h2 className="text-2xl lg:text-4xl uppercase font-bold text-white md:text-4xl">
                        Certifications.
                        </h2>

                    </div>
                </div>
            </div>
            <div className="px-4  mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 mt-6 lg:mt-28">
            <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[34rem] w-full grayscale object-contain object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src="qrcer.png"
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-1  w-full  px-8 py-6 bg-gray-800 dark:bg-white lg:translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
        <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">AlmaBetter</h4>
            <span className="block text-sm text-gray-500">Full stack web development</span>
          </div>
          <a href='https://certificates.almabetter.com/en/verify/87270180189321' target="_blank" rel="noopener noreferrer">
          <p className="mt-8 py-4 px-4 bg-sky-600 cursor-pointer rounded-2xl text-center text-white font-bold text-xl dark:text-gray-600">Verfiy</p></a>
        </div>
        
      </div>
      </div>
            </div>
        </div>
    )
}

export default Certifications
