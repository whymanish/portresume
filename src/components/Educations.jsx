import React from 'react'

const Educations = () => {
    return (
        <div>

            <div className="bg-black mt-20 mb-20 ">

                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className=" three-d max-w-sm rounded-3xl  py-8 md:bg-gradient-to-r">
                        <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
                            <h2 className=" text-2xl lg:text-4xl font-bold text-white md:text-4xl">
                                EDUCATION.
                            </h2>

                        </div>
                    </div>
                    <div className="mb-12 space-y-2 text-center">

                        {/* HEADING TO BE ADDED */}

                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group p-6 sm:p-8 rounded-3xl  hover:bg-white transition duration-300 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="relative overflow-hidden rounded-xl">
                                <img src="SSC.png"
                                    alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                            </div>
                            <div className="mt-6 relative">
                                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">March 2017</span>

                                <h3 className="text-2xl font-semibold text-blue-600 dark:text-white">
                                    Utkarsha English Medium<br /> School
                                </h3>
                                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                    I have finished my education up to the 10th grade and received the 'Student of the Year' award during my 9th grade.                                </p>
                                <p  className="px-3 py-2 text-center rounded-xl border bg-white text-teal-600 border-gray-100 text-2xl lg:text-3xl font-bold  transition duration-300 hover:border-transparent hover:bg-primary ">
                                    69 %
                                </p>
                            </div>

                        </div>
                        <div className="group p-6 sm:p-8 rounded-3xl  hover:bg-white transition duration-300 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="relative overflow-hidden rounded-xl">
                                <img src="HSC.png"
                                    alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                            </div>
                            <div className="mt-6 relative">
                                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">March 2019</span>

                                <h3 className="text-2xl font-semibold text-blue-600 dark:text-white">
                                    Asian college of Science, Commerce & Arts
                                </h3>
                                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                    I completed A-levels in the Science stream with a focus on Physics, Chemistry, Mathematics (PCM), and a specialization in Information Technology (IT).                                </p>
                                <p className="px-3 py-2 rounded-xl border bg-white text-teal-600 text-center border-gray-100 text-2xl lg:text-3xl font-bold transition duration-300 hover:border-transparent hover:bg-primary ">
                                    55.85 %
                                </p>
                            </div>

                        </div>
                        <div className="group p-6 sm:p-8 rounded-3xl  hover:bg-white transition duration-300 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                            <div className="relative overflow-hidden rounded-xl">
                                <img src="BE.png"
                                    alt="art cover" loading="lazy" width="1000" height="667" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                            </div>
                            <div className="mt-6 relative">
                                <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">August 2019 - July 2023</span>

                                <h3 className="text-2xl font-semibold text-blue-600 dark:text-white">
                                    Zeal College of Engineering and Research
                                </h3>
                                <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                                    I have earned my Bachelor's degree in Electronics and Telecommunication Engineering, with a specialization in Cybersecurity, graduating with honours
                                </p>
                                <h1 className="px-3 py-2 text-center rounded-xl border bg-white text-teal-600  border-gray-100 text-2xl lg:text-3xl font-bold transition duration-300 hover:border-transparent hover:bg-primary ">
                                    7.55 CGPA ~ 68 %
                                </h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Educations
