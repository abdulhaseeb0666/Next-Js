import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className='text-4xl text-center py-10 font-bold'>Products Page</h1>

      <ul className='font-bold px-5 flex flex-col gap-5 text-2xl'>
        <li><Link href="./products/men" >Men</Link></li>
        <li><Link href="./products/women">Women</Link></li>
        <li><Link href="./products/kid">Kid</Link></li>
      </ul>
    </div>
  )
}

export default page
