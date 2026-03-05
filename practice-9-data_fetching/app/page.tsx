import Link from 'next/link';
const page = () => {

  return (
    <div>
      <div className='flex gap-10 p-2'> 
        <Link href="/posts" className='font-bold text-2xl'>Posts</Link>
        <Link href="/todos" className='font-bold text-2xl'>Todos</Link>
      </div>
      
      <div className='text-xl p-2 flex flex-col'>
        <p>There is a difference between  Fetch Function in Client and Server</p>
        <p>Posts Page shows Data Fetching in Clients</p>
        <p>Todos Page shows Data Fetching in Server</p>
      </div>
      <h1 className='font-bold text-5xl absolute top-[50%] left-[50%] translate-[-50%]'>Home</h1>      
    </div>
  )
}

export default page
