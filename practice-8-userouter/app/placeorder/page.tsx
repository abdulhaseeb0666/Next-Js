"use client";
 
import { useRouter } from "next/navigation"

const Page = () => {
    const router= useRouter();

    const handleSubmit = () => {
        alert("Order Placed");
        router.push('/');
    }

    return (
        <div>
      <button type="button" 
      onClick={handleSubmit}
      className="border-black border-2 text-xl px-2 font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
    >Place Order</button>
    </div>
  )
}

export default Page
