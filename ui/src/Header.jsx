import React from "react";
import fligno from "./assets/fligno.png"


const Header = () => {
    return (
<div className="bg-slate-400 px-3 flex justify-between items-center py-3 text-white"> 
<img src={fligno} className="w-10 h-10"/> 
<h1 className="">Joven Ople</h1>
</div>


    )
}
export default Header