import React from "react";
import { aboutMeData } from "../data/siteData";
import { useStateContext } from "../contexts/ContextProvider";

const About = () => {
  const { currentMode } = useStateContext();
  const card = "w-5/6 h-48 text-base text-left dark:border shadow rounded-md my-2 p-2 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-900 hover:duration-500";
  const cardTitle = "font-normal text-xl underline text-center mb-2";

  return (
    <>
      <div className="h-full" id="about-section">
        <div className="w-full h-full text-black dark:text-white flex flex-col justify-center items-center">
          <div className="font-bold flex justify-center">
            {currentMode === "Dark" ? (
              <img src={aboutMeData.logo_w} className="w-4/6 tablet:w-3/6" alt="icon" />
            ) : (
              <img src={aboutMeData.logo} className="w-4/6 tablet:w-3/6" alt="icon" />
            )}
          </div>

          <div className="font-semibold text-2xl tablet:text-2xl flex">
            <span>Level:</span>
            <div className="ml-2">{aboutMeData.currentLevel}</div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-5/6 text-base tablet:text-lg py-5 tablet:py-2">
              {aboutMeData.description}
            </div>
          </div>

          <div className="w-full mt-5 font-light flex flex-col tablet:flex-row place-items-center justify-center tablet:w-5/6 tablet:px-2">
            <div className={card + " mr-2"}>
              <div className={cardTitle}>Interests</div>
              <div>
                {aboutMeData.interests.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div className={card + " mx-2"}>
              <div className={cardTitle}>Hobbies</div>
              <div>
                {aboutMeData.hobbies.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
            <div className={card + " ml-2"}>
              <div className={cardTitle}>
                Languages
              </div>
              <div>
                {aboutMeData.languages.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
