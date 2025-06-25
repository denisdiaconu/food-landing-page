import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-xl sm:text-2xl text-center font-extrabold'>Meet our Quality Features</h1>
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div>
                <FeatureCard />
            </div>
        </div>
    </div>
  )
}

export default Feature