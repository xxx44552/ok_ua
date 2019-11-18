import React from "react";
import './NewsSlider.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

const NewsSlider = () => {
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
            <div className="slider__element">
                <div className="slider__text-block">
                    <p className="slider__text slider__text--mob">Cприяння екологічній та культурній</p>
                    <p className="slider__text">Cприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider__button">Дізнатися</button>
                </div>
            </div>

            <div className="slider__element slider__element--green">
                <div className="slider__text-block">
                    <p className="slider__text slider__text--mob">Cприяння екологічній та культурній</p>
                    <p className="slider__text">Cприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider__button">Дізнатися</button>
                </div>
            </div>

            <div className="slider__element slider__element--yellow">
                <div className="slider__text-block">
                    <p className="slider__text slider__text--mob">Cприяння екологічній та культурній</p>
                    <p className="slider__text">Cприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider__button">Дізнатися</button>
                </div>
            </div>

            <div className="slider__element slider__element--blue">
                <div className="slider__text-block">
                    <p className="slider__text slider__text--mob">Cприяння екологічній та культурній</p>
                    <p className="slider__text">Cприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider__button">Дізнатися</button>
                </div>
            </div>

            <div className="slider__element slider__element--black">
                <div className="slider__text-block">
                    <p className="slider__text slider__text--mob">Cприяння екологічній та культурній</p>
                    <p className="slider__text">Cприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider__button">Дізнатися</button>
                </div>
            </div>

            <div className="slider__element slider__element--orange">
                <div className="slider__text-block">
                    <p className="slider__text slider__text--mob">Cприяння екологічній та культурній</p>
                    <p className="slider__text">Cприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider__button">Дізнатися</button>
                </div>
            </div>
        </Slider>
    );
}

export default NewsSlider;