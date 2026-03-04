const page = async () => {
  await new Promise((resolve => {
    setTimeout(() => {
      resolve(true)
    }, 8000);
  }))
  return (
    <div>
        <h1>100 Comments</h1>
    </div>
  )
}

export default page
