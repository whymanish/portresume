import React from 'react';

const Navbar = () => {
  

  return (
    <div className="w-full  mx-auto max-w-7xl">
      <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <h1
            className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            href="/groups/header/"
          >
            Manishkumar.
          </h1>
          
        </div>
        <nav className="md:flex md:justify-start md:flex-row ">
          
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
