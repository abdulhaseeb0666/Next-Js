import Image from 'next/image'

const page = () => {
  return (
    
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold">Our Customers</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image src="https://picsum.photos/200" alt="" className="rounded-lg" width={400} height={200} />
          <h2 className="text-xl font-bold mt-4">Google</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image src="https://picsum.photos/200" alt="" className="rounded-lg" width={400} height={200} />
          <h2 className="text-xl font-bold mt-4">Amazon</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Image src="https://picsum.photos/200" alt="" className="rounded-lg" width={400} height={200} />
          <h2 className="text-xl font-bold mt-4">Microsoft</h2>
        </div>
      </section>
    </div>
  )
}
export default page
