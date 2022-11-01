import React from "react";
import { contactData } from "./../data/siteData";

const Contact = () => {
  return (
    <>
      <div className="h-screen py-12 flex flex-col justify-center">
        <div className=" text-black dark:text-white flex flex-col justify-center items-center">
          <div className="text-3xl tablet:text-5xl font-semibold">Contact</div>
          <div className="w-11/12 tablet:5/6 tablet:flex">
            {contactData.map((item) => (
              <div key={item.id} className="text-lg tablet:text-base font-light my-5 flex flex-col px-2 tablet:py-10 tablet:w-1/3">
                <div className="tablet:h-40">{item.description}</div>
                <div className=" hover:text-blue-300 mt-5 flex justify-center">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl tablet:text-sm underline underline-offset-4 self-center flex"
                  >
                  <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
