import React from 'react'
import { Link } from 'react-router-dom'
import { htmlDemos } from '../../../data/siteData'
// import {PhotographerLayout} from '../../../pages';

const HTML = () => {
  return (

    <>
      <div className="h-full">
        <div id='container-grid' className='flex flex-col justify-center items-center h-full text-black dark:text-white'>
          <div className='text-3xl font-semibold mb-10'>HTML and CSS Demos</div>

          <div className='grid grid-cols-3 lg:grid-cols-6 gap-5 w-full h-1/2 px-5 xl:px-96 place-items-center '>
            {htmlDemos.map((item) => (
              <div className='rounded-md flex flex-col h-60 justify-around p-5 shadow border md:col-span-1 lg:col-span-2 col-span-3 w-full' key={item.id}>
                <div className='font-semibold text-2xl'>{item.name}</div>
                <div className='font-light text-xl'>{item.description}</div>
                <Link to={item.route} className='bg-f-selected dark:bg-fdark-selected rounded-sm self-end w-1/4 text-center hover:bg-f-pressed hover:dark:bg-fdark-pressed'>Ir...</Link>
              </div>

            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default HTML