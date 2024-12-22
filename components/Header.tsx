'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SlArrowDown } from 'react-icons/sl'
import { IoMenu } from 'react-icons/io5'
import styles from './Header.module.css'
function Header () {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <header className={`${styles.header} `}>
        <div className='flex items-center justify-between gap-3 w-[90%] relative pl-[9em] lg:w-4/5'>
          <Image
            className='absolute top-1 left-0 '
            src={'/logo.png'}
            width={100}
            height={100}
            alt='logo'
          ></Image>
          <h1 className='hidden font-bold lg:block xl-lg:text-xl xl:text-2xl'>
            Tuition Free Education Program on Latest Technologies
          </h1>
          <h1 className='block text-xl font-bold w-2/5 lg:hidden'>
            Tution Free Program
          </h1>
          <nav className='hidden relative md:flex items-center justify-between sm:gap-2 w-2/5'>
            <Link href='/'>Home</Link>
            <Link href='/about'>Apply</Link>
            <Link href='/jobs'>Jobs</Link>
            <Link href='/result'>Result</Link>
            <button
              className={styles.btn}
              onClick={() => {
                setOpen(!open)
              }}
            >
              Courses
              <SlArrowDown
                className={
                  open
                    ? 'transform rotate-180 transition-transform ease-in duration-150'
                    : 'transition-transform ease-in duration-150'
                }
              />
            </button>
            {open && (
              <div className='absolute text-black top-10 right-0 p-5 rounded-lg bg-white'>
                <div className='flex flex-col my-3'>
                  <h1 className='font-bold text-xl'>Core Courses</h1>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Programming Fundamentals
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Web2 Using NextJS
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Earn as You Learn
                  </Link>
                </div>
                <hr />
                <div className='flex flex-col mt-3'>
                  <h1 className='font-bold text-xl'>Advance Courses</h1>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Web3 and Metaverse
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Cloud Native Computing
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    AI and Deep Learning
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Ambient Computing and IoT
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Genomics and Bioinformatics
                  </Link>
                  <Link
                    href='/'
                    className='m-1 p-1 hover:transform hover:translate-x-1 transition'
                  >
                    Network Programmability and Automation
                  </Link>
                </div>
              </div>
            )}
          </nav>
          <div className='text-4xl p-4 cursor-pointer md:invisible hover:scale-105'>
            <IoMenu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header