import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold">Login</h2>
        <label className="block mt-5 text-sm font-medium text-gray-700">
          
          Email address
          <input type="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
        </label>
        <label className="block mt-5 text-sm font-medium text-gray-700">
          
          Password
          <input type="password" name="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500" />
        </label>
        <button type="submit" className="mt-5 w-full px-3 py-2 bg-indigo-500 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500">Login</button>
      </form>
    </div>
  )
}

export default page
