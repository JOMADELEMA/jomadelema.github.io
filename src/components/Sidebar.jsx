import React from "react";
import { navbarLinks } from "../data/siteData";
import { Link } from "react-router-dom";
import { TbX } from "react-icons/tb";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { sidebarVisible, toggleSidebar } = useStateContext();

  const classSidebarVisible = "translate-x-0 duration-300";
  const classSidebarNoVisible = "-translate-x-80 tablet:-translate-x-full duration-300";

  return (
    <>
      <div
        className={`h-screen bg-f-hover1 dark:bg-fdark-hover1 w-80 tablet:w-1/3 absolute top-0 shadow-lg ${sidebarVisible ? classSidebarVisible : classSidebarNoVisible
          }`}
      >
        <div className="mr-5 my-5 cursor-pointer flex justify-end ">
          <TbX
            size={25}
            className="text-black dark:text-white hover:rotate-180 hover:duration-500"
            onClick={() => toggleSidebar(sidebarVisible)}
          />
        </div>
        <div className="text-black dark:text-white flex flex-col place-items-center gap-2">
          {navbarLinks.map((item) => (
            <Link
              onClick={() => toggleSidebar(sidebarVisible)}
              to={item.route}
              key={item.id}
              className="h-10 w-11/12 hover:bg-f-pressed hover:dark:bg-fdark-pressed flex rounded dark:hover:border dark:hover:border-neutral-600"
            >
              <div className="ml-5 self-center ">{item.icon}</div>
              <div className="ml-5 tablet:text-xl font-medium self-center">{item.name}</div>
            </Link>
            // <a
            //   href={item.route}
            //   key={item.id}
            //   className="h-10 hover:bg-f-pressed hover:dark:bg-fdark-pressed flex"
            // >
            //   <div className="ml-3 self-center ">{item.icon}</div>
            //   <div className="ml-5 self-center">{item.name}</div>
            // </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
