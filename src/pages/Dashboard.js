
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AllLaunches from '../components/AllLaunches';


const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AllLaunches/>
        </div>
    );
}

export default Dashboard
