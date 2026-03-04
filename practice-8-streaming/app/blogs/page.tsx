import Views from "../components/Views"
import Comments from "../components/Comments"
import Likes from "../components/Likes"
import { Suspense } from "react"

const page = () => {
  return (
    <div>
        <h1>Blogs</h1>
        <Suspense fallback={<h1 className="text-gray-500">Loading Views...</h1>}>
            <Views />
        </Suspense>
        
        <Suspense fallback={<h1 className="text-gray-500">Loading Likes...</h1>}>
          <Likes />
        </Suspense>
        
        <Suspense fallback={<h1 className="text-gray-500">Loading Comments...</h1>}>
          <Comments />
        </Suspense>
    </div>
  )
}

export default page
