const TodoItems = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos = await response.json();

  return (
    <div>
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

    </div>
  )
}

export default TodoItems
