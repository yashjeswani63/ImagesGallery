import React from 'react';
import img from './images/rocket2.png';
import Common from './Common';

function Home() {
    return (
        <>
           <Common name = 'Grow Your Bussiness With' imgsrc = {img} visit = '/service' btname = 'Get Started' />
        </>
    )
}

export default Home
