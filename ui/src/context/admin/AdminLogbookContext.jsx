import { createContext, useEffect, useState } from "react"
import axiosInstance from "../../api/axios"

export const AdminLogbookContext = createContext()

const AdminLogbookProvider = ({ children }) => {
  return (
    <AdminLogbookContext.Provider>
      { children }
    </AdminLogbookContext.Provider>
  )
}

export default AdminLogbookProvider