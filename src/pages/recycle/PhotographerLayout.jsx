import React from "react";
import {
  beach,
  beach2,
  bug,
  corn,
  flower1,
  flower2,
  lake,
  paw,
  shroom,
  sunset,
  tree,
  volcano,
} from "../../../assets";

import iconow from '../../../assets/imgs/iconow.png'
import icono from '../../../assets/imgs/icono.png'

import { useStateContext } from '../../../contexts/ContextProvider';


import { TbMenu2, TbCamera } from "react-icons/tb";

const PhotographerLayout = () => {

  const { currentMode} = useStateContext();

  return (
    <>
      {/* NavBar SM*/}
      <div className="h-14 bg-gray-50 flex justify-between lg:hidden md:hidden overflow-hidden">
        <TbMenu2 color="red" className="mt-3 cursor-pointer order-1 w-40 border" />
        <div id="logo" className="flex justify-center self-center order-2">
          {currentMode === 'Dark' ?
            <img src={iconow} alt="logow" className="w-20" /> :
            <img src={icono} alt="logo" className="w-20" />
          }
        </div>
        <div id="nombre-artista" className="self-center order-3 w-40 border text-end">
          <h1 className="text-md font-semibold text-gray-500 pr-8">
            jomadelema
          </h1>
        </div>
      </div>
      {/*  */}

      {/* NavBar MD */}
      <div className="md:h-24 bg-gray-50 md:flex md:flex-col justify-center hidden lg:hidden">
        <TbMenu2 color="red" className="cursor-pointer absolute" />
        <div id="logo" className="flex justify-center self-center order-2">
          {currentMode === 'Dark' ?
            <img src={iconow} alt="logow" className="w-20" /> :
            <img src={icono} alt="logo" className="w-20" />
          }
        </div>
        <div id="nombre-artista" className="self-center order-2 w-40 text-center">
          <h1 className="text-md font-semibold text-gray-500 ">
            jomadelema
          </h1>
        </div>
      </div>


      {/*  */}

      <div id="contenedor" className="flex">
        {/* Sidebar */}
        <div className=" hidden lg:flex">
          <div
            id="sidebar-lg"
            className="h-screen w-72 flex flex-col shadow-md"
          >
            <div id="logo" className="flex justify-center">
              {currentMode === 'Dark' ?
                <img src={iconow} alt="logow" /> :
                <img src={icono} alt="logo" />
              }
            </div>
            <div id="nombre-artista" className="self-center">
              <h1 className="text-xl font-semibold text-gray-500">
                jomadelema
              </h1>
            </div>
            <div id="enlaces-principales" className=" mt-10 mx-2">
              <ul>
                <li className="font-semibold hover:bg-gray-200 hover:text-black cursor-pointer">
                  FOTOGRAFIAS
                </li>
                <li className="font-semibold hover:bg-gray-200 hover:text-black cursor-pointer">
                  PELICULAS
                </li>
              </ul>
            </div>
            <div id="enlaces-secundarios" className=" mt-10 mx-2">
              <ul>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  TIENDA
                </li>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  MUSEO
                </li>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  BLOG
                </li>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  CONTACTO
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:hidden hidden z-10 bg-white">
          <div
            id="sidebar-md"
            className="h-screen w-72 flex flex-col shadow-md"
          >
            <TbMenu2 color="red" className="self-end mr-5 cursor-pointer" />
            <div id="logo" className="flex justify-center">
              <TbCamera
                size={150}
                color="red"
                strokeWidth={0.5}
                className="hover:grayscale cursor-pointer"
              />
            </div>
            <div id="enlaces-principales" className=" mt-10 mx-2">
              <ul>
                <li className="font-semibold hover:bg-gray-200 hover:text-black cursor-pointer">
                  FOTOGRAFIAS
                </li>
                <li className="font-semibold hover:bg-gray-200 hover:text-black cursor-pointer">
                  PELICULAS
                </li>
              </ul>
            </div>
            <div id="enlaces-secundarios" className=" mt-10 mx-2">
              <ul>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  TIENDA
                </li>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  MUSEO
                </li>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  BLOG
                </li>
                <li className="font-light hover:bg-gray-200 hover:text-black cursor-pointer">
                  CONTACTO
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          id="contenedor-grid"
          className="w-full h-screen overflow-auto"
        >
          <div id="row" className="flex flex-wrap">
            <div
              id="column "
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1"
            >
              <img
                src={beach}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={beach2}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={paw}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={volcano}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
            </div>
            <div
              id="column "
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1"
            >
              <img
                src={flower1}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={flower2}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={corn}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={lake}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
            </div>
            <div
              id="column "
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1"
            >
              <img
                src={shroom}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={sunset}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={tree}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={corn}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
            </div>
            <div
              id="column "
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1"
            >
              <img
                src={shroom}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={flower2}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={tree}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={bug}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
            </div>
            {/* <div
              id="column "
              className="lg:flex-25 lg:max-w-25 md:flex-50 md:max-w-50 px-1"
            >
              <img
                src={pic3}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={pic2}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={pic8}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
              <img
                src={pic4}
                className="mt-2 align-middle w-full  rounded-md"
                alt="pic1"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographerLayout;
