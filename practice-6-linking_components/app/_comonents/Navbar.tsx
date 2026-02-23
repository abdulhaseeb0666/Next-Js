"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const pathname = usePathname()

  return (
    <div className="h-fit bg-gray-900 flex flex-row justify-between items-center text-white p-4 ">

        <div className="flex gap-5 justify-between items-center font-bold ml-5  ">
            <img src="./favicon.ico" alt="" className="h-20 w-20 border-2 border-white rounded-full" />
            <h1 className="font-bold text-4xl">My Web</h1>
        </div>
         
        <div className="flex flex-row items-center justify-between w-fit gap-10 font-bold mr-5 text-xl">
            <Link href="./" className={ pathname ==="/" ? 'text-gray-400' : ''} >Home</Link>
            <Link href="./products" className={ pathname ==="/products" ? 'text-gray-400' : ''} >Products</Link>
            <Link href="./contact" className={ pathname ==="/contact" ? 'text-gray-400' : ''}  replace>Contact</Link>
            <Link href="./about" className={ pathname ==="/about" ? 'text-gray-400' : ''} >About</Link>
        </div>
        
    </div>
  )
}

export default Navbar