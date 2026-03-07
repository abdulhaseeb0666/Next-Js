import Link from "next/link"

const page = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%]">
      <h1 className="font-bold text-8xl">Home</h1>
      <p className="text-xl">Go to the <Link href="/blogs" className='font-bold'>Blogs</Link> page to see random Errors on BlogID Pages </p>
      <p className="text-xl"><b>Global Error </b> only works best in Production mode</p>
    </div>
  )
}

export default page
