import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='h-fit bg-gray-800 w-full font-bold text-white flex justify-between p-5 text-2xl'>
            <Link href={`/`} replace>Home</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/services`}>Services</Link>
            <Link href={`/files`}>Files</Link>
            <Link href={`/blogs`}>Blogs</Link>
        </div>
    </div>
  )
}

export default Navbar
