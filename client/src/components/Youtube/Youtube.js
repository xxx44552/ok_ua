import React from 'react';
import './Youtube.css';

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
            <div>
                <div className="yt-slider-element">
                    <div className="yt-slider-text-block">
                        <p className="yt-slider-text">Підтримки членам Організації</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="yt-slider-element yt-green">
                    <div className="yt-slider-text-block">
                        <p className="yt-slider-text">Підтримки членам Організації</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="yt-slider-element yt-yellow">
                    <div className="yt-slider-text-block">
                        <p className="yt-slider-text">Підтримки членам Організації</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="yt-slider-element blue">
                    <div className="yt-slider-text-block">
                        <p className="yt-slider-text">Підтримки членам Організації</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="yt-slider-element black">
                    <div className="yt-slider-text-block">
                        <p className="yt-slider-text">Підтримки членам Організації</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="yt-slider-element orange">
                    <div className="yt-slider-text-block">
                        <p className="yt-slider-text">Підтримки членам Організації</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default Youtube;