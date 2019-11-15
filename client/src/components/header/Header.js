import React from 'react';
import { connect } from 'react-redux';
import './headerStyles.scss'
import DropDown from '../dropdown/dropdown'
import JoinModal from '../joinModal/joinModal'


class Header extends React.Component{

        state = {
            modalIsOpened: false,
            callbackModalIsOpened: false
        };

    handleOpen = () => this.setState({ modalIsOpened: true })
    handleClose = () => this.setState({ modalIsOpened: false })
    callBackHandleOpen = () => this.setState({ callbackModalIsOpened: true })
    callBackHandleClose = () => this.setState({ callbackModalIsOpened: false })

    render() {
        return(
            <div className="header-wrapper">
                <div className="left-side">
                    <img src={this.props.headerLogo}></img>
                </div>
                <div className="right-side">
                    <div className="contact-info">
                        <div className="social">
                            <a className="soc-elem-fb" href={this.props.fb}>
                            </a>
                            <a className="soc-elem-insta" href={this.props.insta}>
                            </a>
                            <a className="soc-elem-youtube" href={this.props.youtube}>
                            </a>
                        </div>
                        <div className="callback">
                            <span> {this.props.phone} </span>
                            <span className="text" onClick={this.callBackHandleOpen}>Зворотній дзвінок</span>
                            {!!this.state.callbackModalIsOpened &&
                            (
                                <DropDown
                                className="dropdown"
                                callBackOnClose={this.callBackHandleClose}
                                />
                            )
                        }
                        </div>
                    </div>
                    <div className="header-menu">
                        <a className="about" href="#top">Про нас</a>
                        <a className="news" href="#top">Новини</a>
                        <a className="projects" href="#top">Проекти</a>
                        <a className="contacts" href="#top">Контакти</a>

                        <button className="header-button" onClick={this.handleOpen}>Приєднатися</button>

                        {!!this.state.modalIsOpened &&
                            (
                                <JoinModal
                                onClose={this.handleClose}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(
    state => ({
      headerLogo: state.data.header.logo,
      phone: state.data.tel,
      fb: state.data.social.fb,
      insta: state.data.social.insta,
      youtube: state.data.social.youtube,
    })
)(Header)