import React from 'react'
import Card from './Card'

function Assignment2() {
  return (
    <div className='flex items-center flex-col'>
        <h1 className='text-4xl font-bold mb-5 text-center'>Assignment No 2</h1>
        <div className='w-11/12 flex flex-wrap'>
          <div className='w-full p-2 sm:w-1/2 md:w-1/3'>
            <Card />
          </div>
          <div className='w-full p-2 sm:w-1/2 md:w-1/3'>
            <Card />
          </div>
          <div className='w-full p-2 sm:w-1/2 md:w-1/3'>
            <Card />
          </div>
          <div className='w-full p-2 sm:w-1/2 md:w-1/3'>
            <Card />
          </div>
          <div className='w-full p-2 sm:w-1/2 md:w-1/3'>
            <Card />
          </div>
          <div className='w-full p-2 sm:w-1/2 md:w-1/3'>
            <Card />
          </div>
      </div>
    </div>
  )
}

export default Assignment2