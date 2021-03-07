import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-64 bg-gray-800 shadow-lg flex justify-center items-center flex flex-col'>
            <img src='https://cdn.freebiesupply.com/logos/large/2x/spacex-logo-black-and-white.png' alt="Spacex Logo" className='w-1/3 pl-32 sm:w-1/2'/>
            <h1 className='text-center text-4xl mt-12 text-white text-xs'>Last Launches</h1>
        </div>
    )
}

export default Hero
