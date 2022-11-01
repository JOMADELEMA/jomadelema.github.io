import React from "react";
import { skillLanguages } from "../data/siteData";
import { Link } from "react-router-dom";

const Knowledge = () => {
  return (
    <>
      <div
        className="h-[calc(100%_-_3rem)]  text-black dark:text-white bg-f-hover1 dark:bg-fdark-hover1"
        id="expertise-section"
      >
        <div className="w-full h-full">
          <div className=" h-full w-full grid grid-cols-2">
            {skillLanguages.map((item) => (
              <Link to={item.route + "/" + item.id} className="w-full" key={item.id}>
                <div
                  className={`h-full cursor-pointer ${item.color} flex flex-col justify-center`}
                >
                  <div className="self-center">{item.icon}</div>
                  <div
                    className="text-xl tablet:text-3xl font-semibold self-center "
                    key={item.id}
                  >
                    {item.language}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Knowledge;
