import Link from 'next/link';

const page = async ({params} : {params: {productID: string}} ) => {
    const productID = (await params).productID;

  return (
    <div>
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-8xl font-bold whitespace-nowrap">{productID}</h1>  

        <div className='flex flex-col gap-2 border-white border-2 font-bold text-2xl m-2 w-fit p-3'>
            <Link href={`/about/${productID}/comments`}>Comments</Link>   
        </div>
    </div>
  )
}

export default page
