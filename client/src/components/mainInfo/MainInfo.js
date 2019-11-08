import React from 'react'
import { connect } from 'react-redux';
import './mainInfoStyles.scss'

function MainInfo(props) {
    console.log(props.title)
    return(
        <div className="info-wrapper">
            <div className="text-wrapper">
                <p className="title"> {props.title} </p>
                <p className="text"> {props.text} </p>
            </div>
        </div>
    )
}

export default connect(
    state => ({
        title: state.data.header.title,
        text:state.data.header.text,

    })
)(MainInfo);