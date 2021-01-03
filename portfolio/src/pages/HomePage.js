import React from 'react';

import Hero from "../components/Common/Hero";
import Carousel from "../components/Home/Carousel";
import AboutPage from './AboutPage';

function HomePage(props) {
    return(
        <div>
            <div>
                <Hero name={props.name}/>
                <AboutPage/>
            </div>

            <div className="border-top">
                <Hero  title={props.title} text={props.text}/>
                <Carousel/>
            </div>
        </div>

    );
}

export default HomePage;