const page = async ({params}: {params: Promise<{productid: string, reviewid: string}>}) => {
    const {productid, reviewid} = await params;
  return (
    <div>
      <h1 className='text-4xl text-center py-10 font-bold'>{reviewid.toLocaleUpperCase()} Review for {productid}</h1>
    </div>
  )
}

export default page
