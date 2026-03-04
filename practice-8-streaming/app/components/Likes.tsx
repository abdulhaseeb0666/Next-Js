const page = async () => {
  await new Promise ((resolve) => {
    setTimeout(() => {
      resolve(true);
    } , 2000)
  })
  return (
    <div>
        <h1>2k Likes</h1>
    </div>
  )
}

export default page
