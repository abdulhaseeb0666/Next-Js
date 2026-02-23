import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Products Page",
}

const page = () => {
  return (
    <div>
        <h1 className="absolute text-9xl w-fit top-[50%] left-[50%] font-bold translate-x-[-50%] translate-y-[-50%]">Products</h1>
        <p className='font-bold text-4xl p-2 ml-2'><Link href="./products/clothes">Clothes</Link></p>
        <p className='font-bold text-4xl p-2 ml-2'><Link href="./products/watches">Watches</Link></p>
        <p className='font-bold text-4xl p-2 ml-2'><Link href="./products/shoes">Shoes</Link></p>

    </div>
  )
}

export default page
