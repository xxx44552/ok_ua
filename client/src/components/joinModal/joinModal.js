import React from 'react';
import './joinModalStyles.scss';

const JoinModal = (props) => {
    return(

        <div className="join-modal-background">
            <div className="join-modal-wrapper">
                <div className= "join-modal-container">
                    <p className="join-title">Приєднатися</p>
                    <div className="full-name">
                        <div className="name">
                            <p>Ім'я</p>
                            <input className="name-input" placeholder="Ім'я"/>
                        </div>
                        <div className="surname">
                            <p>Прізвище</p>
                            <input className="surname-input" placeholder="Прізвище"/>
                        </div>
                    </div>
                    <div className="phone-number">
                        <p>Ваш номер телефону</p>
                        <input className="phone-input" placeholder="Ваш номер телефону"/>
                    </div>
                    <div className="email">
                        <p>E-mail</p>
                        <input className="email-input" placeholder="E-mail"/>
                    </div>
                    <div className="join-buttons">
                        <button className="receive-notify">Отримувати оновлення</button>
                        <button className="receive-notify-mobile" onClick={props.onClose}>Отримувати оновлення</button>
                        <button className="cancel" onClick={props.onClose}>Відмінити</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinModal;