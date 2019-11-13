import React, { Component } from 'react';
import './styles/SliderSection.scss'
import Image from './media/image-15.png';

function PreviewSlideItem(props) {
    return (
        <div>
            <div className="section__row">
                <div className="section__col section__col--w-50">
                    <div className="carousel__image-wrap">
                        <img className="carousel__image carousel__image--preview" src={props.image}></img>
                    </div>
                </div>
                <div className="section__col section__col--w-50">
                    <div className="carousel__wrap carousel__wrap--preview">
                        <h4 className="carousel__article carousel__article--preview">{props.title}</h4>
                        <p className="carousel__paragraph carousel__paragraph--large">{props.text}</p>
                        <a href="#" className="carousel__button carousel__button--preview">Дізнатися</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewSlideItem;