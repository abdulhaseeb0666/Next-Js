import Link from 'next/link'

const page = async ({params}: {params: Promise<{productid: string}>}) => {
    const {productid} = await params;
    console.log(params)
  return (
    <div>
      <h1 className='text-4xl text-center py-10 font-bold'>Products Details {productid}</h1> 
      <h2 className='text-4xl py-10'><Link href= {`./${productid}/reviews/new`}>Reviews</Link></h2>
    </div>
  )
}

export default page
