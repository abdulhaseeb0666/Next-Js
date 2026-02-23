import Link from 'next/link';
const page = () => {
  return (
    <div>
      <h1>Welcome Home!!!!!</h1>

      <div className='flex flex-col gap-2 p-2'>
        <Link href="./">Home</Link>
        <Link href="./blog">Blog</Link>
        <Link href="./article">Articles</Link>
        
      </div>
    </div>
  )
}

export default page
