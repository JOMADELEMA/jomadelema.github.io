import React from "react";
import "./About.css";
import { contactData } from "./../data/siteData";
import { useStateContext } from "../contexts/ContextProvider";

// const colSpan1 = "col-span-1";
// const colSpan2 = "col-span-2";

const Contact = () => {
  const { currentMode } = useStateContext();

  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div
          className={`w-full h-full flex flex-col sm:justify-center laptop:flex-row items-center ${currentMode === "Dark" ? "background-dark" : "background"
            }`}
        >
          <div className="h-full text-black dark:text-white flex flex-col justify-center items-center laptop:w-10/12 desktop:w-8/12">
            <div className="text-3xl tablet:text-5xl font-semibold mb-4">
              Contact
            </div>
            <div className="w-11/12 tablet:w-5/6 md:grid md:grid-cols-2">
              {contactData.map((item) => (
                <div
                  key={item.id}
                  className={`text-xl font-light flex flex-col my-3 tablet:m-5 pb-10 shadow bg-white dark:bg-fdark-hover1 dark:border dark:border-neutral-600 rounded-md relative h-64
                    `}
                // ${item.id === "email" ? colSpan2 : colSpan1}
                >
                   {/* <div class="absolute top-0 left-0 w-12 h-12 bg-white rounded-br-full"></div> */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl tablet:text-2xl underline underline-offset-4 self-center flex w-full justify-center"
                  >
                    <span className="mr-3 self-center absolute right-4 bottom-6 opacity-50 text-neutral-500">{item.icon}</span>
                  </a>
                  <div className="my-10 px-10">{item.description}</div>
                  <div className="hover:text-blue-300 flex flex-col justify-center ">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl tablet:text-2xl underline underline-offset-4 self-center flex w-full justify-center"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
