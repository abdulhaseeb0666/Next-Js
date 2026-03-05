"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
const page = () => {

  // const [posts, setposts] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://jsonplaceholder.org/posts/1")
      const data = await response.json();
      console.log(data);
    }

    fetchData();
  } , [])

  return (
    <div>
        <Link href="/posts" className='font-bold text-2xl'>Posts</Link>
        <h1 className='font-bold text-5xl absolute top-[50%] left-[50%] translate-[-50%]'>Home</h1>      
    </div>
  )
}

export default page
