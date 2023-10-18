import React from 'react'
import Navbar from './Navbar'
import TechStack from './TechStack'
import Projects from './Projects'
import Educations from './Educations'
import Hero from './Hero'
import Experience from './Experience'
import Certifications from './Certifications'
import Footer from './Footer'


const Homepage = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
    <Projects/>

    <Educations/>
    <TechStack/>
    <Experience/>
    <Certifications/>
    <Footer/>
    </div>
  )
}

export default Homepage
