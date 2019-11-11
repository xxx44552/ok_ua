import React from 'react';
import './News.css';
import NewsSlider from './NewsSlider';

const News = (props) => {
    return (
        <div className="news-container">
            <h2 className="news-title">Останні новини</h2>

            {/* {props.news.map(({img}) => (
                <div>
                    <img src={img} alt="new" />
                </div>
            ))} */}

            <NewsSlider news={props.news} />
        </div>
    );
}

export default News;