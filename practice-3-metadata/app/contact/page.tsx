import { Metadata } from "next"

export const metadata : Metadata = {
    title : {
        template : "%s | Contact",
        default: "Contact"
    }
}
const page = () => {
  return (
    <div>
        <h1>Contact Page</h1>
    </div>
  )
}

export default page
