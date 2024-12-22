import React from 'react'
import Card from './Card'
function Grid () {
  return (
    <div className='w-full flex items-center flex-col'>
      <h1 className='text-3xl font-bold text-center mt-3'>Grid and props</h1>
      <div className='w-11/12 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4 lg:grid-cols-4 gap-2'>
        <div>
          <Card title = "Nike Shoes" price={5000} bgColor='bg-green-400' />
        </div>
        <div>
          <Card title = "Adidas Shoes" price={10000} bgColor='bg-neutral-400'/>
        </div>
        <div>
          <Card title = "Shirt" price={500}bgColor='bg-red-400' />
        </div>
        <div>
          <Card title = "Trouser" price={2000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
        <div>
          <Card title = "Nike Shoes" price={5000} />
        </div>
      </div>
    </div>
  )
}

export default Grid
