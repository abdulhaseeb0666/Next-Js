const page = async () => {

    const response = await fetch("https://procodrr.vercel.app/?sleep=2000");
    const data = await response.json();
    console.log(data);


  return (
    <div>
        <h1 className='font-bold text-5xl absolute top-[50%] left-[50%] translate-[-50%]'>Todos</h1>
    </div>
  )
}

export default page
