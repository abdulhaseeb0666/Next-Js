"use client";


import { useEffect, useState } from 'react';


const page = () => {
    
  const [posts, setposts] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json();
      console.log(data);
    }

    fetchData();
  } , [])

  return (
    <div>
        <h1 className='font-bold text-5xl absolute top-[50%] left-[50%] translate-[-50%]'>Posts</h1>
    </div>
  )
}

export default page
