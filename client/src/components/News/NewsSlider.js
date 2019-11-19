import React from "react";
import './NewsSlider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

const NewsSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const isMobile = useMediaQuery({ query: '(max-width: 420px)' });

    if (isMobile) {
        settings.arrows = false;
    }

    return (
        <Slider className="slider" {...settings}>
            <div>
                {props.news.map(item => (
                    <div className="slider__element" key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="slider__text-block">
                            <p className="slider__text">{item.text}</p>
                            <button className="slider__button">Дізнатися</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {props.news.map(item => (
                    <div className="slider__element" key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="slider__text-block">
                            <p className="slider__text">{item.text}</p>
                            <button className="slider__button">Дізнатися</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {props.news.map(item => (
                    <div className="slider__element" key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="slider__text-block">
                            <p className="slider__text">{item.text}</p>
                            <button className="slider__button">Дізнатися</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {props.news.map(item => (
                    <div className="slider__element" key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="slider__text-block">
                            <p className="slider__text">{item.text}</p>
                            <button className="slider__button">Дізнатися</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {props.news.map(item => (
                    <div className="slider__element" key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="slider__text-block">
                            <p className="slider__text">{item.text}</p>
                            <button className="slider__button">Дізнатися</button>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                {props.news.map(item => (
                    <div className="slider__element" key={item.id} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="slider__text-block">
                            <p className="slider__text">{item.text}</p>
                            <button className="slider__button">Дізнатися</button>
                        </div>
                    </div>
                ))}
            </div>
        </Slider>
    );
}

export default NewsSlider;