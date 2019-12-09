import React from 'react';
import './writeToUsModalStyles.scss'

const WriteToUsModal = (props) => {
    return (
        <div className="writeToUs-modal-background">
            <div className="writeToUs-modal-wrapper">
                <div className="writeToUs-modal-container">
                    <p className="writeToUs-title">Зворотній зв'язок</p>
                    <div className="full-name">
                        <div className="name">
                            <p>Ім'я</p>
                            <input className="name-input" placeholder="Ім'я" />
                        </div>
                        <div className="surname">
                            <p>Прізвище</p>
                            <input className="surname-input" placeholder="Прізвище" />
                        </div>
                    </div>
                    <div className="phone-number">
                        <p>Ваш номер телефону</p>
                        <input className="phone-input" placeholder="Ваш номер телефону" />
                    </div>
                    <div className="email">
                        <p>E-mail</p>
                        <input className="email-input" placeholder="E-mail" />
                    </div>
                    <div className="massage-text">
                        <textarea className="massage-text-area" placeholder="Текст повідомлення" />
                    </div>
                    <div className="send-buttons">
                        <button className="send-massage">Відправити повідомлення</button>
                        <button className="cancel" onClick={props.writeToUsModalonClose}>Відмінити</button>
                    </div>
                </div>
                <div className="writeToUs-modal-container-mobile">
                    <p className="writeToUs-title-mobile">Зворотній зв'язок</p>
                    <div className="full-name-mobile">
                        <div className="name-mobile">
                            <p className="contact-item-title">Ім'я</p>
                            <input className="name-input-mobile" placeholder="Ім'я" />
                        </div>
                        <div className="surname-mobile">
                            <p className="contact-item-title">Прізвище</p>
                            <input className="surname-input-mobile" placeholder="Прізвище" />
                        </div>
                    </div>
                    <div className="phone-number-mobile">
                        <p className="contact-item-title">Ваш номер телефону</p>
                        <input className="phone-input-mobile" placeholder="Ваш номер телефону" />
                    </div>
                    <div className="email-mobile">
                        <p className="contact-item-title">E-mail</p>
                        <input className="email-input-mobile" placeholder="E-mail" />
                    </div>
                    <div className="massage-text-mobile">
                        <textarea className="massage-text-area-mobile" placeholder="Текст повідомлення" />
                    </div>
                    <div className="send-buttons-mobile">
                        <button className="send-massage-mobile" onClick={props.writeToUsModalonClose}>Відправити повідомлення</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteToUsModal;