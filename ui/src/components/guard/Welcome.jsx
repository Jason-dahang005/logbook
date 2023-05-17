import React from "react";
import { Outlet } from "react-router-dom";
import draw_img from '../../assets/img/draw2.png'



const Welcome = () => {
    return (
        <>
            <div className='grid grid-cols-12 h-screen'>
                <div className=' mt-8 hidden md:hidden="true" lg:block lg:col-span-7 flex items-center justify-center'>
                    <img src={draw_img} className="" />
                </div>

                {/* <div className="col-span-4 max-w-sm max-w-md">
                    <Outlet/>
                </div> */}
                <div className=" col-span-12 md:col-span-12 flex lg:col-span-5  justify-center md:justify-center lg:justify-center">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Welcome