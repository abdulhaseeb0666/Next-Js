const Data2 = async () => {
    const response2 = await fetch("https://procodrr.vercel.app/?sleep=2000");
  const data2 = await response2.json();
  
  return (
    <div>
        <h1>{data2.message}</h1>
    </div>
  )
}

export default Data2
