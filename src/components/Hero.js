import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-72 bg-gray-800 shadow-lg flex justify-center items-center flex flex-col'>
            <img src='https://cdn.freebiesupply.com/logos/large/2x/spacex-logo-black-and-white.png' alt="Spacex Logo" className='max-h-20 pl-20 sm:pl-32 mt-10'/>
            <h1 className='text-center text-4xl mt-12 text-white text-xs'>Last Launches</h1>
        </div>
    )
}

export default Hero
