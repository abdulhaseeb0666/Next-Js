"use client";


import React from 'react'

const page = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter your email address"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
    </div>
  )
}

export default page
