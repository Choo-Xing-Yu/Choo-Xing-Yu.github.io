import React from 'react';

import Carousel from "../components/Home/Carousel";
import AboutPage from './AboutPage';

function HomePage(props) {
    return(
        <div>
            <div>
                <h1 className="display-3 font-weight-bolder mt-2 text-center">Choo Xing Yu</h1>
                <br/>
                <AboutPage/>
            </div>

            <div className="border-top">
                <h1 className="display-5 font-weight-bolder mt-2 text-center">PROJECTS</h1>
                <h3 className="lead font-weight-light text-center">Click on the images to find out more</h3>
                <br/>
                <Carousel/>
            </div>
        </div>

    );
}

export default HomePage;