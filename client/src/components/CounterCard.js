import React, { Component } from 'react';
import './styles/OurProjects.scss';
import svgFile from './media/vector-image.svg';

function CounterCard(props) {
    return (
        <div className="counter__wrap">
            <img className="counter__image" src={props.img}></img>
            <h3 className="counter__number">{props.count}</h3>
            <p className="counter__description">{props.text}</p>
        </div>
    )
}

export default CounterCard;