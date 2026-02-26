const page = async ({params} : {params: {files: string[]}}) => {
    const filePath = (await params).files;
  return (
    <div>
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-8xl font-bold wrap-anywhere">File URL <br /> <i>/{ filePath.join("/") }</i> </h1>
    </div>
  )
}

export default page
