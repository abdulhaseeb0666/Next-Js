"use client";

import { usePathname } from "next/navigation";

const notfound = () => {
    const path = usePathname();

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-6xl">
      <h1>Blog <span className="text-red-500">{path.split("/")[2]}</span> Page does not Exist</h1>
      <p className="text-3xl whitespace-nowrap font-medium mt-4   ">The page that you are trying to visit does not exist</p>
    </div>
  )
}

export default notfound
