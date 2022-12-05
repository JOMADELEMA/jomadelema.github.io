import React from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
    return (
        <>
            <div className='flex flex-col justify-center place-items-center h-screen'>

                <div className='bg-yellow-400 dark:bg-yellow-300 flex justify-center place-items-center px-10 rounded-tl-3xl rounded-br-3xl shadow-sm' >
                    <p className='text-9xl font-bold text-white dark:text-black'>Under</p>
                </div>
                <p className='text-black dark:text-white font-bold text-5xl'>Construction</p>

                <p className='text-black dark:text-white my-5'>This section is under construction and will be available soon.</p>

                <Link to="/" className='mt-5 bg-yellow-400 dark:bg-yellow-300 text-white dark:text-black font-semibold p-2 rounded-sm shadow-sm'>Back to Home</Link>
            </div>
        </>
    )
}

export default UnderConstruction