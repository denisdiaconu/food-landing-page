import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import HowItWorks from './HowItWorks/HowItWorks'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Restaurant />
      <Category />
      <HowItWorks />
    </div>
  )
}

export default Home