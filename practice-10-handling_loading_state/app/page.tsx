import Link from 'next/link';
const page = () => {
  return (
    <div>
      <h1 className="absolute top-[50%] left-[50%] translate-[-50%] font-bold text-8xl">Home</h1>     
      <p>Go to the <Link href="/todos" className='font-bold text-xl'>Todos</Link> page to see a loading state </p> 
    </div>
  )
}

export default page