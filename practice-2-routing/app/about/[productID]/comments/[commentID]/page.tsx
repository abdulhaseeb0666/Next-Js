import Link from "next/link"

const page = async ({params} : {params: {productID: string, commentID: string}}) => {
  const productID = (await params).productID;
  const commentID = (await params).commentID;

  return (
    <div>
      <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl font-bold whitespace-nowrap">Comment {commentID} about {productID}</h1>
    </div>
  )
}

export default page
