import React from "react";
import { TbSun, TbMoon, TbMenu2 } from "react-icons/tb";
import { useStateContext } from "../contexts/ContextProvider";
import { navbarLinks } from "../data/siteData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { currentMode, toggleMode, sidebarVisible, toggleSidebar } =
    useStateContext();

  const activeLink = "border-b border-b-2 border-b-black dark:border-b-white mx-3 px-2";
  const normalLink = "hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black hover:duration-300 hover:rounded-sm px-2 mx-3 ";

  return (
    <>

      <div id="container-navbar" className="w-full border-spacing-2 fixed top-0 laptop:justify-center">
        <div className=" text-black dark:text-white h-12 w-full flex justify-between">
          <div className="font-semibold self-center text-2xl w-32 flex justify-center">
            <TbMenu2
              size={25}
              className="cursor-pointer laptop:hidden"
              onClick={() => toggleSidebar(sidebarVisible)}
            />
          </div>

          <div className="text-md w-full font-bold self-center justify-center hidden laptop:flex">
            {navbarLinks.map((item) => (
              <NavLink to={item.route} key={item.id} className={({ selected }) => selected ? activeLink : normalLink} smooth>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div
            className="w-32 cursor-pointer px-2 self-center flex justify-center "
            onClick={() => {
              toggleMode(currentMode);
            }}
          >
            {currentMode === "Light" ? (
              <TbMoon size={25} />
            ) : (
              <TbSun size={25} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
