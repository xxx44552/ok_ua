import React, { Component } from 'react';
import './styles/OurProjects.scss';

function IFrameMap(props) {
    return (
        <div className="map__iframe-container">
            <iframe className="map__iframe" src={props.coord} width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
        </div>
    )
}

export default IFrameMap;