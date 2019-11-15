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
            <div className="info-wrapper">
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
        )
    }
}

export default connect(
    state => ({
        title: state.data.header.title,
        text:state.data.header.text,

    })
)(MainInfo);