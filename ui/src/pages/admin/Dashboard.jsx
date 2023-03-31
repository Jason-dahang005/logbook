import React from "react"

const Dashboard = () => {
  return (
    <div className="container mx-auto "><br/>
      <div className="grid grid-cols-4 gap-6">
        <div className="flex justify-center p-6 text-md bg-gray-100 drop-shadow-lg border-gray-300 rounded-md">1</div>
        <div className="flex justify-center p-6 text-md bg-gray-100 drop-shadow-lg border-gray-300 rounded-md">2</div>
        <div className="flex justify-center p-6 text-md bg-gray-100 drop-shadow-lg border-gray-300 rounded-md">3</div>
        <div className="flex justify-center p-6 text-md bg-gray-100 drop-shadow-lg border-gray-300 rounded-md">4</div>
      </div>
    </div>
  )
}

export default Dashboard