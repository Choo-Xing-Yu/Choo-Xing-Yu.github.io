import React from 'react';

import AboutMeContent from "../components/About/AboutMeContent"
import profilepic from "../assets/images/profilepic.jpg";

function AboutPage(props) {
    return (
        <div className="text-center">
            <img className="profile-pic" src={profilepic} alt={profilepic}/>
            <AboutMeContent>
                <p>Hi, my name is Xing Yu. I'm a Year 2 NUS Computer Science student with experience in Django, React, Telegram API, Google Sheets API and Outsystems.</p>
                <p>I'm constantly trying out new things, from writing an entire mobile application for the Airforce as the Sole Developer within 3 months with no prior experience, to playing in a guitar ensemble without any musical background. I believe in the importance of a can-do attitude.</p>
                <p>My latest project, <a href="https://docs.google.com/document/d/1EyZuCAC7-hACxoJMQ4gUxkjRNk-ghWW84qXmVOE_6rY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">GENUSAttendance_bot</a>, automates the tedious and error-prone task of taking ~50 member's attendance twice weekly. It also provides important attendance analytics after each practice.</p>
            </AboutMeContent>
        </div>
    );
}

export default AboutPage;