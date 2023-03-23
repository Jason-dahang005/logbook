import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BackBtn = () => {
  return (
    <div>
      <Link to="/home">
        <AiOutlineArrowLeft className='rounded-full hover:bg-slate-300 p-1' size={30}/>
      </Link>
    </div>
  )
}

export default BackBtn
