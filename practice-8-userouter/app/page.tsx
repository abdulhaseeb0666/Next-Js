import Link from 'next/link';
const page = () => {
  return (
    <div>
      <Link href="./placeorder">
        <h1 className="font-bold text-2xl absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">Place Order Page</h1>
      </Link>
    </div>
  )
}

export default page
