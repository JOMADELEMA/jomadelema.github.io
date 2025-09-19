import React from "react";
import { designs } from "../data/siteData";
import { FaXTwitter, FaMobile, FaDesktop } from "react-icons/fa6";

const Design = () => {
  return (
    <>
      <div>

        <div
          className="text-black dark:text-white w-full h-screen p-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid gap-5 overflow-auto"
          id="cards-container"
        >
          {designs.map((index) => (
            <div className="border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 hover:shadow-sm hover:shadow-neutral-700 p-5 dark:bg-neutral-800 overflow-clip rounded-lg relative">
              <a
                href={index.social}
                target="_blank"
                rel="noreferrer"
                className="w-full h-full"
              >
                <div className="h-4/6 w-5/6 justify-self-center rounded-lg">
                  <img
                    src={index.url}
                    alt={index.title}
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>

                <h1 className="text-xl font-semibold my-2">{index.title}</h1>
                <p className="mb-5">{index.description}</p>
                <FaXTwitter size="25" className=" mt-2" />
              </a>
              <span className="absolute bottom-4 right-4">{index.type === "mobile" ? <FaMobile size="20" /> : <FaDesktop size="20" />}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Design;
