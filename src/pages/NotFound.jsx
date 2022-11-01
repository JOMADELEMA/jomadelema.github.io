import React from 'react'
import { TbError404 } from 'react-icons/tb'
import notFoundImage from '../assets/imgs/not-found.jpg'
import { Navbar, Sidebar } from '../components'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Sidebar />

            <div className='h-full text-black dark:text-white  flex flex-col justify-center items-center'>
                <div className=' flex justify-center items-center'>
                    <TbError404 size={250} />
                </div>
                <div className='text-3xl mb-10'>
                    Page not found!
                </div>
                <div>
                    <img src={notFoundImage} alt="not found" className='rounded-lg shadow-md' />
                </div>
            </div>
        </>
    )
}

export default NotFound