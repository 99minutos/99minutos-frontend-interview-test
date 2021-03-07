import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className=''>
            <Navbar/>
                <div className=''>
                    <Link to='/dash' className='py-4 px-9 bg-yellow-400 text-white rounded text-lg m-3'>
                       All launches
                    </Link>
                    <Link to='/dash' className='py-4 px-9 bg-yellow-400 text-white rounded text-lg'>
                        All launches
                    </Link>
                </div>
        </div>
    )
}

export default Home
