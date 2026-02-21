import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1 className='text-4xl text-center py-10 font-bold'>Home Page</h1>
      <h2 className='text-4xl py-10'><Link href="./products/">Products</Link></h2>
    </div>
  )
}

export default page
