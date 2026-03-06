import Link from "next/link"

const BlogNavbar = () => {
  return (
    <div>
        <nav className="h-fit w-[60%] absolute left-[50%] translate-x-[-50%] rounded-xl  bg-orange-700 px-4 py-2 text-white font-bold text-2xl mt-0.5">
        <ul className="flex justify-between">
          <li><Link href="/blogs/1">Blog 1</Link></li>
          <li><Link href="/blogs/2">Blog 2</Link></li>
          <li><Link href="/blogs/3">Blog 3</Link></li>
          <li><Link href="/blogs/4">Blog 4</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default BlogNavbar
