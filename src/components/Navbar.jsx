import React from "react";
import { TbSun, TbMoon, TbMenu2 } from "react-icons/tb";
import { FaTwitter, FaInstagram, FaDribbble, FaGithub } from "react-icons/fa";
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
        {/* <div id="container-navbar" className="w-full border-spacing-2 laptop:justify-center"> */}
        <div className=" text-black dark:text-white h-10 tablet:h-12 w-full flex justify-between">
          <div className="w-16 tablet:w-32  font-semibold self-center text-2xl flex justify-center laptop:hidden">
            <TbMenu2
              size={30}
              className="cursor-pointer laptop:hidden hover:scale-125 hover:duration-100 hover:ease-in"
              onClick={() => toggleSidebar(sidebarVisible)}
            />
          </div>
          <div id="Social" className="flex place-items-center justify-between px-5">
            <a href="https://twitter.com/jomadelema_dev" target="_blank" rel="noreferrer" className="hover:scale-125 hover:duration-100 hover:ease-in">
              <FaTwitter size={20} className="mx-2" />
            </a>

            <a href="https://www.instagram.com/jomadelema.dev/" target="_blank" rel="noreferrer" className="hover:scale-125 hover:duration-100 hover:ease-in">
              <FaInstagram size={20} className="mx-2" />
            </a>

            <a href="https://dribbble.com/jomadelema" target="_blank" rel="noreferrer" className="hover:scale-125 hover:duration-100 hover:ease-in">
              <FaDribbble size={20} className="mx-2" />
            </a>

            <a href="https://github.com/JOMADELEMA" target="_blank" rel="noreferrer" className="hover:scale-125 hover:duration-100 hover:ease-in">
              <FaGithub size={20} className="mx-2" />
            </a>
          </div>

          <div className="text-md w-auto font-bold self-center justify-center hidden laptop:flex">
            {navbarLinks.map((item) => (
              <NavLink to={item.route} key={item.id} className={({ selected }) => selected ? activeLink : normalLink} smooth>
                {item.name}
              </NavLink>
            ))}
          </div>


          <div
            className="w-16 tablet:w-32 cursor-pointer px-2 self-center flex justify-center hover:scale-125 hover:duration-100 hover:ease-in"
            onClick={() => {
              toggleMode(currentMode);
            }}
          >
            {currentMode === "Light" ? (
              <TbMoon size={30} />
            ) : (
              <TbSun size={30} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
