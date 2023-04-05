import React from "react";
import fligno from "../../assets/img/fligno-img.png"
import Dropwdown from "../Dropwdown";


const Header = () => {
  return (
    <div className="bg-slate-700 px-5 flex justify-between items-center py-3 text-white">
      <img src="" className="max-w-10 h-10"/> 
      <Dropwdown/>
    </div>
  )
}
export default Header