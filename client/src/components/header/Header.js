import React from 'react'
import './headerStyles.scss'
import ButtonSmall from '../buttons/ButtonSmall'

export default function Header(props) {
    return(
        <div className="header-wrapper">
            <div className="left-side">
                <img src="/img/header_logo.png"></img>
            </div>
            <div className="right-side">
                <div className="contact-info">
                    <div className="social">
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                    <div className="callback">
                        <span>+3 8 (067) 434 56 52</span>
                        <span>Зворотній дзвінок <img></img> </span>
                    </div>
                </div>
                <div className="header-menu">
                    <a href="#top">Про нас</a>
                    <a href="#top">Новини</a>
                    <a href="#top">Проекти</a>
                    <a href="#top">Контакти</a>

                    <ButtonSmall/>
                </div>
            </div>
        </div>
    )
};