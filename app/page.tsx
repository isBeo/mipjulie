import About from '@/components/About'
import Courses from '@/components/Courses'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Video from '@/components/Video'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <About />
      <Courses />
      <Video />
    </div>
  )
}

export default page