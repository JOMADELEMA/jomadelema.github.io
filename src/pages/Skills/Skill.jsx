import React from "react";
import { useParams, Link } from "react-router-dom";
import { skill } from "../../data/siteData";
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

const Expertise = () => {
  const { group } = useParams();

  const selectedGroup = skill.filter((item) => item.group_id === group);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center text-black dark:text-white">
        <div className="w-full tablet:w-10/12 px-4 absolute bottom-10 tablet:bottom-16">
          <Link to={"/expertise"} className={`text-md flex w-3/12 rounded-sm py-1 justify-around ${selectedGroup[0].color}`}><BsArrowLeftShort size={30} className="self-center w-full" /><span className="self-center w-full font-semibold">Back</span></Link>
        </div>
        {selectedGroup.map((item) => (
          <>
            <div className="text-center text-3xl tablet:text-5xl mb-5 tablet:mb-10">{item.name}</div>

            <div className="w-full tablet:w-10/12 px-2 grid grid-cols-2">
              {item.data.map((data) => (
                <div className={`flex justify-between m-2 ${data.id === "demos" ? "col-span-2" : ""}`}>
                  <Link to={data.route} key={data.id} className={`flex w-full justify-between h-20 rounded-sm 
                  ${item.color}`}>
                    <div className="text-xl tablet:text-xl font-semibold self-center pl-2">{data.name}</div>
                    <div className="flex justify-center w-12"><BsArrowRightShort size={30} className="self-center" /></div>
                  </Link>

                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Expertise;
