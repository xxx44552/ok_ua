import React from 'react';
import './Youtube.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

const Youtube = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };
    
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 420px)' });

    if (isTablet) {
        settings.slidesToShow = 2;
    }

    if (isMobile) {
        settings.slidesToShow = 1;
        settings.arrows = false;
        settings.dots = true;
    }

    return (
        <Slider className="yt-slider" {...settings}>
            <div className="yt-slider__element">
                {props.youtube.map(item => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <div className="yt-slider__text-block">
                            <p className="yt-slider__text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="yt-slider__element yt-slider__element--second">
                {props.youtube.map(item => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <div className="yt-slider__text-block">
                            <p className="yt-slider__text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="yt-slider__element yt-slider__element--third">
                {props.youtube.map(item => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <div className="yt-slider__text-block">
                            <p className="yt-slider__text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="yt-slider__element yt-slider__element--fourth">
                {props.youtube.map(item => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <div className="yt-slider__text-block">
                            <p className="yt-slider__text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="yt-slider__element yt-slider__element--fifth">
                {props.youtube.map(item => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <div className="yt-slider__text-block">
                            <p className="yt-slider__text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="yt-slider__element yt-slider__element--sixth">
                {props.youtube.map(item => (
                    <div key={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <div className="yt-slider__text-block">
                            <p className="yt-slider__text">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Slider>
    );
}

export default Youtube;