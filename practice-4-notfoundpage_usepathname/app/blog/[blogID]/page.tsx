import { notFound } from "next/navigation"

const page = async ({params} : {params : {blogID : string}}) => {
    const blgID = (await params).blogID
    
  if( Number(blgID) > 10){
    notFound();
  }

  return (
    <div>
      <h1>Blog Page for {blgID} </h1>
    </div>
  )
}

export default page
