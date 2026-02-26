import Link from 'next/link';
const page = () => {
  return (
    <div>

      <div className="flex flex-col gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-8xl font-bold">
        <h1>Home</h1>  
        <p className='text-xl font-light'>Contact is a simple Page <br /> About contains Dynamic Routes <br /> Files is for Catch-all Routes</p>  
      </div>
      
      <div className='flex flex-col gap-2 border-white border-2 font-bold text-2xl m-2 w-fit p-3'>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/files">Files</Link>

      </div>
    </div>
  )
}

export default page
