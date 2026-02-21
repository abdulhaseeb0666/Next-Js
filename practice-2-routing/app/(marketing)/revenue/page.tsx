import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold">Revenue Page</h1>
      <div className="mt-10">
        <p className="text-2xl">
          This page is intended to display the revenue of the company.
        </p>
      </div>
      <div className="mt-10">
        <table className="table-auto border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500">Month</th>
              <th className="border border-gray-500">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500">January</td>
              <td className="border border-gray-500">$1000</td>
            </tr>
            <tr>
              <td className="border border-gray-500">February</td>
              <td className="border border-gray-500">$1500</td>
            </tr>
            <tr>
              <td className="border border-gray-500">March</td>
              <td className="border border-gray-500">$2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
