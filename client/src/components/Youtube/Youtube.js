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
          {props.youtube.map(item => (
            <div className="yt-slider__element">
              <div className='yb-wrap' key={item.id}>
                  <iframe
                      src={item.link}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                  </iframe>
                  <div className="yt-slider__text-block">
                      <p className="yt-slider__text">{item.text}</p>
                  </div>
              </div>
              <a name="projects"></a>
            </div>
          ))}
        </Slider>
    );
}

export default Youtube;