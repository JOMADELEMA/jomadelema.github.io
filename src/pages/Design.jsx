import React from "react";
import { webDesigns } from "../data/siteData";
import { FaXTwitter } from "react-icons/fa6";

const Design = () => {
  return (
    <>
      <div
        className="text-black dark:text-white w-full h-screen p-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid gap-5 overflow-auto"
        id="container"
      >
        {webDesigns.map((index) => (
          <div className="border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 hover:shadow-sm hover:shadow-neutral-700 p-5 dark:bg-neutral-900 overflow-clip rounded-lg">
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
              <FaXTwitter size="25" className="justify-self-center mt-2" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Design;
