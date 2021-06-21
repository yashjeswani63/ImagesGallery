import React from 'react';
import img from './images/rocket2.png';
import Common from './Common';

function About() {
    return (
        <>
          <Common name = 'Welcome to About Page' imgsrc = {img} visit = '/contact' btname = 'Contact Now' />
        </>
    )
}

export default About;

