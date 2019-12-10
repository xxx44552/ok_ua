import React, { Component } from 'react';
import './styles/OurProjects.scss';

function SectionArticle(props) {
    return (
        <h3 className="section__article">{props.textContent}</h3>
        
    )
}

export default SectionArticle;