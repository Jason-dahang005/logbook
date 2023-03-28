import React from "react";
import fligno from "./assets/fligno.png"


const Header = () => {
    return (
<div className="bg-slate-400 px-3 flex justify-between items-center py-3 text-white"> 
<img src={fligno} class="w-10 h-10"/> 
<h1 class="">Joven Ople</h1>
</div>


    )
}
export default Header