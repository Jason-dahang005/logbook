import React from "react";
import { Outlet } from "react-router-dom";
import draw_img from '../../assets/img/draw2.png'



const Welcome = () => {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-8 flex items-center justify-center'>
                    <img src={draw_img} className="w-full" alt="" />
                </div>

                <div className="col-span-4">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Welcome