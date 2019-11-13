import React from 'react';
import './Youtube.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
                <i className="fab fa-youtube"></i>
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--second">
                <i className="fab fa-youtube"></i>
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--third">
                <i className="fab fa-youtube"></i>
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>

            <div className="yt-slider-element yt-slider-element--fourth">
                <i className="fab fa-youtube"></i>
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--fifth">
                <i className="fab fa-youtube"></i>
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
            
            <div className="yt-slider-element yt-slider-element--sixth">
                <i className="fab fa-youtube"></i>
                <div className="yt-slider-text-block">
                    <p className="yt-slider-text">Підтримки членам Організації</p>
                </div>
            </div>
        </Slider>
    );
}

export default Youtube;