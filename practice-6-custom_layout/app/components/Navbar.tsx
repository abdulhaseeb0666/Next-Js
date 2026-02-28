import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='h-fit bg-gray-800 w-full font-bold text-white flex justify-between p-5 text-xl'>
            <Link href={`/`} replace>Home</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/services`}>Services</Link>
            <Link href={`/files`}>Files</Link>
            <Link href={`/blogs`}>Blogs</Link> |
            <Link href={`/login`}>Login</Link>
            <Link href={`/register`}>Register</Link>
            <Link href={`/forgot-password`}>Forgot Password</Link> |
            <Link href={`/digital-marketing`}>Digital Marketing</Link> 
            <Link href={`/advertisement`}>Advertisement</Link> 
        </div>
    </div>
  )
}

export default Navbar
