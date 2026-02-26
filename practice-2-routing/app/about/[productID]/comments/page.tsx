import Link from "next/link"

const page = async ({params} : {params: {productID: string}}) => {
    const productID = (await params).productID

  return (
    <div>
      <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold whitespace-nowrap">Comments about {productID}</h1>

    <div className='flex flex-col gap-2 border-white border-2 font-bold text-2xl m-2 w-fit p-3'>
      <Link href={`/about/${productID}/comments/1`}>Comment 1</Link>
      <Link href={`/about/${productID}/comments/2`}>Comment 2</Link>
      <Link href={`/about/${productID}/comments/3`}>Comment 3</Link>
    </div>
    </div>
  )
}

export default page
