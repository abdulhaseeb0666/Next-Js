import Link from 'next/link';
const page = () => {
  return (
    <div>
      <h1>Home <br /> <span>It is a Demo Site</span></h1> 
      <Link href="./placeorder">Place Order<h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] text-5xl font-bold">Place Order Page</h2></Link>
    </div>
  )
}

export default page
