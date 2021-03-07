import React from 'react'
import {Link} from 'react-router-dom'

const ButtonsHome = () => {
    return (
        <div className='flex flex-row h-screen justify-center items-center mt-32'>
            <Link to='/dash' className='py-4 px-9 bg-yellow-400 text-white rounded text-lg m-3 hover:bg-yellow-500 hover:text-white'>
                All launches
            </Link>
            <Link to='/dash' className='py-4 px-9 bg-yellow-400 text-white rounded text-lg m-3 hover:bg-yellow-500 hover:text-white'>
                All launches
            </Link>
        </div>
    )
}

export default ButtonsHome
