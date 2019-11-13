import React from 'react';
import './Youtube.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Youtube = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <Slider className="yt-slider" {...settings}>
            <div className="yt-slider-element">
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--second">
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--third">
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>

            <div className="yt-slider-element yt-slider-element--fourth">
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--fifth">
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--sixth">
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
        </Slider>
    );
}

export default Youtube;