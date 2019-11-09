import React from 'react';
import { connect } from 'react-redux';
import './headerStyles.scss'
import DropDown from '../dropdown/dropdown'


function Header(props) {
    console.log(props.headerLogo)
    return(
        <div className="header-wrapper">
            <div className="left-side">
                <img src={props.headerLogo}></img>
            </div>
            <div className="right-side">
                <div className="contact-info">
                    <div className="social">
                        <a className="soc-elem-fb" href={props.fb}>
                        </a>
                        <a className="soc-elem-insta" href={props.insta}>
                        </a>
                        <a className="soc-elem-youtube" href={props.youtube}>
                        </a>
                    </div>
                    <div className="callback">
                        <span> {props.phone} </span>
                        <span>Зворотній дзвінок <img></img> </span>
                        <DropDown className="dropdown"/>
                    </div>
                </div>
                <div className="header-menu">
                    <a className="about" href="#top">Про нас</a>
                    <a className="news" href="#top">Новини</a>
                    <a className="projects" href="#top">Проекти</a>
                    <a className="contacts" href="#top">Контакти</a>

                    <button className="header-button">Приєднатися</button>
                </div>
            </div>
        </div>
    )
};

export default connect(
    state => ({
      headerLogo: state.data.header.logo,
      phone: state.data.tel,
      fb:state.data.social.fb,
      insta: state.data.social.insta,
      youtube: state.data.social.youtube,
    })
)(Header)