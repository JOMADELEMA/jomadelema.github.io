import React from 'react'
import { Link } from "react-router-dom"

const GameDev = () => {
  return (
    <>
      <div className="w-full lg:w-2/3 flex flex-col justify-self-center justify-center p-8 sm:p-20 md:p-28 lg:p-16 text-black dark:text-white">
        <section id="introduction">
          <h1 className="text-5xl text-center">Game Dev</h1>
          <p className="text-xl mt-5">
            Maybe it sounds <i>cliché</i> but around 2,004  when I learn about programming the first thing I tought was “I can learn this so I can make a video game”.

            Now a couple of years down the road, finally started uploading some of the results of my journey learning about videogames and Godot Game Engine.
          </p>
        </section>
        <section>
          <p className="text-xl my-5">
            Please visit my itch.io profile to follow up and see the results and some of the prototypes I'm working to improve my skills with Godot and GD Script.
          </p>

          <Link to="jomadelema.itch.io" className="underline text-blue-500 hover:text-blue-400 text-xl ">Game Dev Profile</Link>
        </section>

        <section id="published-games" className="grid gap-5 mt-5">
          <article id="nass" className="dark:border dark:border-neutral-700 flex flex-col lg:flex-row place-items-center rounded-lg shadow bg-white dark:bg-neutral-800">
            <img src="https://img.itch.zone/aW1nLzIzMjEyMDU1LnBuZw==/315x250%23c/kbEwio.png" alt="nass banner" className="w-full lg:w-auto rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" />
            <div className="flex flex-col p-10 gap-4">
              <h2 className="text-3xl md:text-xl">Not Another Space Shooter - NASS</h2>
              <p className="text-lg">An space shooter game (no way sherlock)</p>
              <div className="flex gap-5">
                <Link to="https://jomadelema.itch.io/not-another-space-shooter" className="underline text-blue-500 hover:text-blue-400 text-xl ">Try NASS</Link>
                <span>|</span>
                <Link to="./nass-devlog" className="underline text-blue-500 hover:text-blue-400 text-xl ">Devlog</Link>

              </div>
            </div>
          </article>

          <article id="flappy" className="dark:border dark:border-neutral-700 flex flex-col lg:flex-row place-items-center rounded-lg shadow bg-white dark:bg-neutral-800">
            <img src="https://img.itch.zone/aW1nLzIzMjEyMDU5LnBuZw==/315x250%23c/1Kpcen.png" alt="flappy banner" className="w-full lg:w-auto rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" />
            <div className="flex flex-col p-10 gap-4">
              <h2 className="text-3xl md:text-xl">Flappy Godot</h2>
              <p className="text-lg">A Flappy bird tribute</p>
              <div className="flex gap-5">
                <Link to="https://jomadelema.itch.io/flappy-godot" className="underline text-blue-500 hover:text-blue-400 text-xl ">Try Flappy Godot</Link>
                <span>|</span>
                <Link to="./nass-devlog" className="underline text-blue-500 hover:text-blue-400 text-xl ">Devlog</Link>

              </div>
            </div>
          </article>

        </section>

      </div>
    </>
  )
}

export default GameDev