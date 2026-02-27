import { Metadata } from 'next';

export const metadata : Metadata = {
    title : "About"
}   

const page = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}

export default page
