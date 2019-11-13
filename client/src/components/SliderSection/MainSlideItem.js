import React, { Component } from 'react';
import './styles/SliderSection.scss'
import Image from './media/image-15.png';

function MainSlideItem(props) {
    return (
        <div>
            <div className="section__row carousel__row--adaptive">
                <div className="section__col section__col--w-50 carousel__col--adaptive">
                    <img className="carousel__image carousel__image--main" src={props.image}></img>
                </div>
                <div className="section__col section__col--w-50 carousel__col--adaptive">
                    <div className="carousel__wrap carousel__wrap--main">
                        <h4 className="carousel__article carousel__article--main">{props.title}</h4>
                        <p className="carousel__paragraph carousel__paragraph--small">{props.text}</p>
                        <a href="#" className="carousel__button carousel__button--main">Дізнатися</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSlideItem;