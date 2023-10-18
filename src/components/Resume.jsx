import React from 'react'

const Resume = () => {
    return (
        <div className='mx-auto px-2 max-w-xl mt-10 mb-10 '>

            <div className="bg-gradient-to-br rounded-3xl from-blue-500 to-purple-600 py-16 md:bg-gradient-to-r">
                <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
                    <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl">
                        Checkout my Resume
                    </h2>
                    <a
                        href="#"
                        className="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                    >
                        <span className="relative text-base font-semibold text-purple-600"
                        >Manishkumar.pdf</span
                        >
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Resume
