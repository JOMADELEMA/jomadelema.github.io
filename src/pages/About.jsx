import React from "react";
import "./Home.css";
import { aboutMeData, dateOfBirth } from "../data/siteData";
import { useStateContext } from "../contexts/ContextProvider";

const About = () => {
  const { currentMode } = useStateContext();
  const card =
    "w-5/6 h-5/6 tablet:h-56 text-md laptop:text-lg text-left dark:border dark:border-neutral-600 shadow-soft rounded-md my-2 p-4 bg-white hover:bg-gray-100 dark:hover:bg-neutral-600 hover:duration-500 dark:bg-fdark-hover1";
  const cardTitle =
    "font-semibold text-xl laptop:text-2xl border-b pb-2 rounded-sm text-center mb-2";


  const calculateAge = (dob) => {
    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--
    }

    return years;
  }

  const pDateOfBirth = new Date(dateOfBirth)

  const currentLevel = calculateAge(pDateOfBirth);

  return (
    <>
      {/* <div className="h-[calc(100vh-2.5rem)] w-full flex justify-center " id="about-section"> */}
      <div
        className="h-full w-full flex justify-center overflow-auto"
        id="about-section"
      >
        <div
          className={`w-full text-black dark:text-white flex flex-col justify-start sm:justify-center items-center overflow-auto ${currentMode === "Dark" ? "background-dark" : "background"
            }`}
        >
          <div className="self-center flex flex-col justify-center place-items-center">
            <div className="flex flex-col laptop:flex-row w-10/12 py-5 mt-10  laptop:px-5" >
              <div className="font-normal text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl laptop:font-normal  flex self-center justify-center mb-5 laptop:mb-0 laptop:w-1/2 laptop:h-full laptop:mr-5">
                <h1 className="tablet:w-11/12 laptop:w-11/12 self-center">{aboutMeData.name}</h1>
              </div>

              <div className="flex flex-col laptop:w-1/2 laptop:justify-around">
                <div className="font-bold flex justify-center laptop:justify-start">
                  {currentMode === "Dark" ? (
                    <img
                      src={aboutMeData.logo_w}
                      className="w-48 laptop:w-80"
                      alt="icon"
                    />
                  ) : (
                    <img
                      src={aboutMeData.logo}
                      className="w-48 laptop:w-80"
                      alt="icon"
                    />
                  )}
                </div>

                <div className="font-normal text-2xl tablet:text-2xl laptop:text-3xl desktop:text-4xl flex self-center laptop:justify-start laptop:w-full">
                  <span>Age:</span>
                  {/* <div className="ml-2">{aboutMeData.currentLevel}</div> */}
                  <div className="ml-2">{currentLevel}</div>
                </div>

                <div className="w-full flex justify-center laptop:justify-start">
                  <div className="text-lg font-light tablet:text-lg laptop:text-xl py-2 tablet:py-2">
                    {aboutMeData.description}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-2 font-light flex flex-col tablet:flex-row place-items-center justify-center tablet:w-5/6 ">
              {/* <div className={card + " mr-2 "}> */}
              <div className={card + " tablet:mr-2 "}>
                <div className={cardTitle}>Interests</div>
                <div>
                  {aboutMeData.interests.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
              {/* <div className={card + " mx-2"}> */}
              <div className={card + " tablet:mx-2 "}>
                <div className={cardTitle}>Hobbies</div>
                <div>
                  {aboutMeData.hobbies.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
              {/* <div className={card + " ml-2"}> */}
              <div className={card + " tablet:ml-2 "}>
                <div className={cardTitle}>Languages</div>
                <div>
                  {aboutMeData.languages.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
