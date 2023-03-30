import React from "react";
import { FaBeer } from 'react-icons/fa';


const Dashboard = () => {
    
    return (

    
        <div class="container mx-auto "><br/>
        <div class="grid grid-cols-4 gap-6">
          <div
            class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            <FaBeer size={30}/>5 <br/> fligno
          </div>
          <div
            class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            2
          </div>
          <div
            class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            3
          </div>
          <div
            class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            4
          </div>
          <div
            class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            5
          </div>
          <div 
          class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            <FaBeer size={30}/>6 <br/> fligno
          </div>
          
          <div 
          class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          > 100
          </div>
        
          <div
            class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
          >
            8
          </div>
        </div>
      </div>

    )
}

export default Dashboard