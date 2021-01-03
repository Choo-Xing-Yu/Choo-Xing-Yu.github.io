import React from 'react';

import Hero from "../components/Common/Hero";
import Carousel from "../components/Home/Carousel";

function HomePage(props) {
    return(
        <div>
            <Hero title={props.title} text={props.text}/>
            <Carousel/>
        </div>

    );
}

export default HomePage;