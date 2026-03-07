"use client";

import { startTransition } from "react";
import Navbar from "./components/Navbar";
import {useRouter}  from "next/navigation";
import "./globals.css";

const globalerror = ({error , reset} : {error : Error , reset : () => void}) => {
  const router = useRouter();
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Next Js App</title>
        </head>
        <body>
            <Navbar />
            <div className="flex flex-col items-center w-fit gap-3 absolute top-[50%] left-[50%] translate-[-50%]">
              <h1 className="font-bold text-4xl w-fit">Something went wrong in Root Layout</h1>
              <button 
                className="bg-gray-500 text-white border w-fit border-black font-bold cursor-pointer rounded-xl p-2"
              
                onClick={()=>{
                  startTransition(()=>{
                    router.refresh();
                    reset();
                  })
                }}
              >Reload</button>
            </div>

        </body>
    </html>
  )
}

export default globalerror
