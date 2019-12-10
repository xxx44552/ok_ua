import React from 'react';
import { connect } from 'react-redux';
import './mainInfoStyles.scss';
import WriteToUsModal from '../writeToUsModal/writeToUsModal'

class MainInfo extends React.Component{

    state = {writeToUsModalIsOpened: false}

    handleWriteToUsOpen = () => this.setState({ writeToUsModalIsOpened: true })
    handleWriteToUsClose = () => this.setState({ writeToUsModalIsOpened: false })

    render() {
        return(
            <>
            <div className="info-wrapper">
                <img className="background-img" src="./static/background.png" alt="background-img"/>
                <img className="background-tablet-img" src="./static/background_tablet.png" alt="background-tablet-img"/>
                <img className="background-mobile-img" src="./static/background_mobile.png" alt="background-mobile-img"/>
                <div className="text-wrapper">
                    <p className="title"> {this.props.title} </p>
                    <p className="text"> {this.props.text} </p>
                </div>
                <button className="text-us-button" onClick={this.handleWriteToUsOpen}>Напишіть нам!</button>
                {!!this.state.writeToUsModalIsOpened &&
                    (
                        <WriteToUsModal
                        writeToUsModalonClose={this.handleWriteToUsClose}
                        />
                    )
                }
            </div>
            <div className="text-wrapper-tablet">
                <p className="title"> {this.props.title} </p>
                <p className="text"> {this.props.text} </p>
            </div>
            </>
        )
    }
}

export default connect(
    state => ({
        title: state.data.header.title,
        text:state.data.header.text,

    })
)(MainInfo);