import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../admin/Header"

const Master = () => {
    return (
        <div className="flex h-screen">
            <div>
                <Sidebar/>
            </div>
            <div className="grow">
                <div className="flex flex-col">
                    <div>
                      <Header/>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Master