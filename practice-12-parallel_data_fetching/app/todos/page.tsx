const page = async () => {

  async function fetchData(url: string){
    const response = await fetch(url);
    return await response.json();
  }

  const [todos, data2, data3] = await Promise.all([
    fetchData("https://jsonplaceholder.typicode.com/todos?_limit=10"),
    fetchData("https://procodrr.vercel.app/?sleep=2000"),
    fetchData("https://procodrr.vercel.app/?sleep=3000"),
  ]);

  return (
    <div>
      <h1>Todos</h1>
      
      {
        todos.map((todo: any) => (
            <div key={todo.id}>
            <h1 className="font-bold inline-block" >Title: </h1>
            <p className="inline-block">{todo.title}</p> <br />
            <h1 className="font-bold inline-block" >Completed: </h1>
            <p className="inline-block">{todo.completed ? "Yes" : "No"}</p>
            </div>
        ))
      }

      <h1>{data2.message}</h1>
      <h1>{data3.message}</h1>

    </div>
  )
}

export default page
