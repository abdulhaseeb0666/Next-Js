const notfound = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl font-bold whitespace-nowrap w-fix flex flex-col items-start gap-3" >
      <h1>Not Found</h1>
      <p>Resource that you are trying to reach cannot be reached</p>
    </div>
  )
}

export default notfound
