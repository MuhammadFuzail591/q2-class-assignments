import Image from 'next/image'
import React from 'react'

export default function Card ({title = "Title", price = 500, bgColor = "bg-slate-400"}) {

  return (
    <div>
      <div className={`${bgColor} w-full h-full py-10 px-5 rounded-xl flex flex-col items-center`}>
        <Image
          src='/AboutPng.png'
          width={160}
          height={120}
          className='h-1/2'
          alt='Product'
        ></Image>
        <h2 className='text-xl font-bold bg-'>{title}</h2>
        <h4>
          <b>{price + " PKR"}</b>
        </h4>
        <div className='flex gap-2 flex-col md:flex-row w-11/12  md:justify-center'>
          <button className='py-2 px-2 bg-slate-600 rounded-lg font-bold mt-2 '>
            Buy Now
          </button>
          <button className='py-2 px-2 bg-slate-600 rounded-lg font-bold mt-2 '>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
