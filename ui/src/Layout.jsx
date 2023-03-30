import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="grow">
                <div className="flex flex-col">
                    <div>
                        <Header/>
                    </div>
                    <div className="px-5">
                        <Outlet/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Layout