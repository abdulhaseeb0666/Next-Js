import Link from 'next/link';
const page = async () => {
  
  return (
    <div>
      <Link href={"/todos"}> Todos </Link>
    </div>
  )
}

export default page