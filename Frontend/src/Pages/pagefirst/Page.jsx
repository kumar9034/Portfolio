import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Project from '../../components/Project'
import Footer from '../../components/Footer'

const Page = () => {
  return (
    <div className='w-full h-screen '> 
        <Header/>
        <Hero/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default Page
