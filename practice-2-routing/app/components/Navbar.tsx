import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-fit w-full flex flex-row justify-between items-center p-3 bg-gray-900 text-white">
        <div className="flex flex-row items-center justify-between w-fit gap-5">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPE9VD7hC5m5iUcMPpHnJWJj37QdoVWgzLsg&s" alt="" width={80} height={80} className="rounded-full" />
            <h1 className="font-bold text-3xl">My Website</h1>
        </div>
        <div className="flex flex-row items-center justify-between w-fit gap-5 font-bold mr-5 text-xl cursor-pointer">
            <Link href="./login">Login</Link>
            <Link href="./register">Register</Link>
            <Link href="./forgot-password">Forgot Password</Link>
            <Link href="./customers">Customers</Link>
            <Link href="./revenue">Revenue</Link>
        </div>
    </div>
  )
}

export default Navbar
