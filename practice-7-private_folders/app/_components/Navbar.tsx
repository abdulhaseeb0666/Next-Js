import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='h-fit bg-gray-800 w-full font-bold text-white flex justify-between p-5 text-xl'>
          <h1>Navbar</h1>
          <Link href={`/components`}>Components</Link>
        </div>
    </div>
  )
}

export default Navbar
