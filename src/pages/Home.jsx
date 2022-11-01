import React from "react";
// import { About, Expertise, Contact } from "../pages";
import "./Home.css";
import { useStateContext } from "../contexts/ContextProvider";
import { quotes } from "../data/siteData";
import icon from "../assets/imgs/icon.png";
import icon_w from "../assets/imgs/icon_w.png";
// import { Navbar, Sidebar } from "../components";

const Home = () => {
  const { currentMode } = useStateContext();

  const quoteGenerator = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getQuote = (number) => {
    return quotes[number];
  };

  const showQuote = getQuote(quoteGenerator(9));

  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}
      <div className="font-semibold text-black dark:text-white h-full bg-gray-200 dark:bg-gray-600 flex-auto overflow-auto" id="home-section">
        <div className="h-full w-full bg-black">
          <div
            className={`w-full h-full flex flex-col laptop:flex-row items-center ${currentMode === "Dark" ? "background-dark" : "background"
              }`}
          >
            <div className="w-full h-full laptop:h-1/3 px-10 bg-f-hover1 dark:bg-fdark-hover1  dark:border-b shadow-md flex flex-col justify-center items-center 
            laptop:w-1/2 laptop:rounded-br-md laptop:rounded-tr-md">
              <div className="text-2xl tablet:text-3xl">"{showQuote.quote}"</div>
              <div className="text-xl tablet:text-2xl font-light w-full text-right mt-5">
                <span>-</span> {showQuote.author}
              </div>
            </div>
            <div className="w-full laptop:w-1/2 h-full flex flex-col justify-center items-center">
              {currentMode === "Dark" ? (
                <img src={icon_w} className="w-5/6 tablet:w-4/6" alt="logo" />
              ) : (
                <img src={icon} className="w-5/6 tablet:w-4/6" alt="logo" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 
      <About id="about-section"/>
      <Expertise id="expertise-section"/>
      <Contact id="contact-section"/> */}
    </>
  );
};

export default Home;
