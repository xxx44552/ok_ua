import React from "react";
import './NewsSlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSlider = (props) => {
 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider className="slider" {...settings}>
        <div>
            <div className="slider-element">
                <div className="slider-text-block">
                    <p className="slider-text">сприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider-button">Дізнатися</button>
                </div>
            </div>
        </div>
        <div>
            <div className="slider-element green">
                <div className="slider-text-block">
                    <p className="slider-text">сприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider-button">Дізнатися</button>
                </div>
            </div>
        </div>
        <div>
            <div className="slider-element yellow">
                <div className="slider-text-block">
                    <p className="slider-text">сприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider-button">Дізнатися</button>
                </div>
            </div>
        </div>
        <div>
            <div className="slider-element blue">
                <div className="slider-text-block">
                    <p className="slider-text">сприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider-button">Дізнатися</button>
                </div>
            </div>
        </div>
        <div>
            <div className="slider-element black">
                <div className="slider-text-block">
                    <p className="slider-text">сприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider-button">Дізнатися</button>
                </div>
            </div>
        </div>
        <div>
            <div className="slider-element orange">
                <div className="slider-text-block">
                    <p className="slider-text">сприяння екологічній та культурній просвіті та поліпшенню поінформованості 
                        громадськості щодо проблем суспільства, навколишнього середовища та інших 
                        існуючих екологічних, культурних проблем
                    </p>

                    <button className="slider-button">Дізнатися</button>
                </div>
            </div>
        </div>
      </Slider>
    );
  }

export default NewsSlider;