import React from 'react';
import './News.scss';
import NewsSlider from './NewsSlider';

const News = (props) => {
    return (
        <div className="news__container">
            <h2 className="news__title">Останні новини</h2>

            <NewsSlider news={props.news} />
        </div>
    );
}

export default News;