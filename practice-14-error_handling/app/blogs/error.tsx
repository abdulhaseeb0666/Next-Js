"use client";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

const error = ({error , reset} : {error : Error , reset : () => void}) => {
  const router = useRouter();
  
  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%]">
      <h1 className="text-4xl font-bold">505 Error <br />Something went wrong in Blog Page</h1>
      <button className=" bg-gray-400 text-white border border-black font-bold cursor-pointer rounded-xl p-2 mt-2"
        onClick={()=>{
          startTransition(()=>{
            router.refresh();
            reset();
          })

        }}  
      >Reload</button>
    </div>
  )
}

export default error
