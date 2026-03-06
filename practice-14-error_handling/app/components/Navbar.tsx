import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <nav className="h-fit w-full bg-gray-800 p-2 text-white font-bold text-2xl">
        <ul className="flex justify-between">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contacts">Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
