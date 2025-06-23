
import React from 'react'
import { BackgroundGradientDemo } from './BackgroundGradientDemo'

const FeaturedCourses = () => {
  return (
    <div className="bg-black h-screen pt-35 pb-4">
      <h1 className='text-center text-5xl mb-10'>This is Gradient Featured Section</h1>
    <div className='w-full grid grid-cols-2 place-content-center gap-y-14'>
      <BackgroundGradientDemo text={"This is a box"} />
      <BackgroundGradientDemo text={"This is a box"} />
      <BackgroundGradientDemo text={"This is a box"} />
      <BackgroundGradientDemo text={"This is a box"} />
    </div>
    </div>

  )
}

export default FeaturedCourses
