import React, { ReactNode } from 'react'
import { Metadata } from 'next'

type Props = {
    params : Promise<{productid : string}>,
}

export async function generateMetaData ({params,} : Props ) : Promise<Metadata> {
  const id = (await params).productid;

  return {
    title: `${id} Details`,
  }

}

const page = async ({params,}: Props) => {
    const productid = (await params).productid;
  return (
    <div>
      <h1 className="absolute text-6xl w-fit top-[50%] left-[50%] font-bold whitespace-nowrap translate-x-[-50%] translate-y-[-50%]">Product Details {productid}</h1>
    </div>
  )
}

export default page
