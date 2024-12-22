import Assignment1 from '@/components/Assignment1'
import Assignment2 from '@/components/Assignment2'
import Assignment3 from '@/components/Assignment3'

export default function Home () {
  return (
    <div className='flex items-center w-full flex-col gap-5'>
      <Assignment1 />
      <Assignment2 />
      <Assignment3 />
    </div>
  )
}
