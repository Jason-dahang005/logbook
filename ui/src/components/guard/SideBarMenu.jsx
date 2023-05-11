import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SideBarMenu = () => {

  const [open, setOpen] = useState(true)
  const [org, setOrg] = useState([])

  useEffect(() => {
    
  }, [])
  
  return (
    <aside className={`${ open ? 'w-[250px]' : ''} duration-500 bg-white shadow-[7px_2px_15px_3px_#00000024]`}>
      
    </aside>
  )
}

export default SideBarMenu
