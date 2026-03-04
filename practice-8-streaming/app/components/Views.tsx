const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 5000)
  })
  return (


    <div>
        <h1>10k Views</h1>
    </div>
  )
}

export default page
