"use client";

import { useRouter } from "next/router"

const page = () => {
    const router = useRouter();
  return (
    <div>
      <button type="button" onClick={()=>{
        console.log("Order Place");
        router.push("/");
      }}>Place Order</button>
    </div>
  )
}

export default page
