import React from 'react'
import Card from './Card'

export default function Assignment1 () {
  return (
    <div className='mt-10 flex w-11/12 flex-col md:w-3/4 items-center justify-between'>
      <h1 className='text-4xl font-bold mb-5'>
        Assignment No 1 & Assignment No 2
      </h1>
      <p className='text-xl text-center'>
        The <b>layout</b> is as per <b>1st Assignment</b> and it is{' '}
        <b>Responsive</b> as per <b>2nd Assignment</b> Guidelines.
      </p>
      <div className='w-full flex items-center p-3 flex-col md:flex-row gap-5'>
        <div className='w-11/12 mb-5'>
          <Card />
        </div>
        <div className='w-11/12 mb-5'>
          <Card />
        </div>
      </div>
      <div className='w-full flex items-center p-3 flex-col md:flex-row gap-5 '>
        <div className='w-11/12 mb-5'>
          <Card />
        </div>
        <div className='w-11/12 mb-5'>
          <Card />
        </div>
        <div className='w-11/12 mb-5'>
          <Card />
        </div>
      </div>
    </div>
  )
}
