import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import HowItWorks from './HowItWorks/HowItWorks'
import About from './About/About'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Restaurant />
      <Category />
      <HowItWorks />
      <About />
    </div>
  )
}

export default Home