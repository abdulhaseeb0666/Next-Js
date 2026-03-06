const Data3 = async () => {
    const response3 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data3 = await response3.json();

  return (
    <div>
        <h1>{data3.message}</h1>
    </div>
  )
}

export default Data3
