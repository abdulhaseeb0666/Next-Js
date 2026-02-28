const page = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4">
      <h1 className="font-bold text-5xl ">Home Page</h1>
      <ol className="text-gray-500 font-bold">
        <li>There are three Router Groups as seperated in Navbar</li>  
        <li>Each have its own layout page</li>  
      </ol>
    </div>
  )
}

export default page
