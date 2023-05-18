import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";


import { AiOutlineUser } from "react-icons/ai";
import { VscOrganization} from "react-icons/vsc";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const menus = [
        { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
        { name: "Organizations", link: "/organization-list", icon: VscOrganization },
        { name: "Security guards ", link: "/security-list", icon: AiOutlineUser },
        // { name: "Setting", link: "/datepicker", icon: RiSettings4Line },
      ];
      const [open, setOpen] = useState(true);
    return (
      <section className="flex gap-6">
        <div className={`bg-slate-800 h-screen ${ open ? "w-[250px]" : "w-16" } duration-500 text-gray-100 px-5`}>
          <div className="py-3 flex justify-end">
            <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${ menu?.margin && "mt-5" } group flex items-center gap-3.5 text-sm font-medium px-1 py-2 z-50 hover:bg-slate-900 rounded-md`}>
                <div className="">{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{ transitionDelay: `${i + 3}00ms`, }}
                  className={`whitespace-pre duration-500 ${ !open && "opacity-0 translate-x-28 overflow-hidden" }`}>
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>

    )
}

export default Sidebar