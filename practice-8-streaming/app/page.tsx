import Link from 'next/link';

const page = () => {

  return (
    <div>
      <h1>Home Page</h1>      
      Link to <Link href="/blogs" className='font-bold text-2xl'>Blogs</Link>
    </div>
  )
}

export default page
