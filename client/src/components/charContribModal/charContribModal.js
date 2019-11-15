import React from 'react';
import './charContribModalStyle.scss';

const CharContribModal = (props) => {
    return(
        <div className="charity-modal-background">
            <div className="charity-modal-wrapper">
                <div className="inner-background1">
                    <img className="char-background" src="static/char_contrib.svg"/>
                </div>
                <div className= "charity-modal-container">
                    <div className="charity-title">
                        <p>Банківські реквізити для благодійного внеску</p>
                    </div>
                    <div className="payment-info-wrapper">
                        <div className="recipient">
                            <span>Отримувач коштів:</span>
                            <span>Укрпатент</span>
                        </div>
                        <div className="recipient-code">
                            <span>Код отримувача:</span>
                            <span>31032378</span>
                        </div>
                        <div className="id-code">
                            <span>Індивідуальний податковий номер:</span>
                            <span>310323726552</span>
                        </div>
                        <div className="bank">
                            <span>Банк отримувача:</span>
                            <span>АБ «Укргазбанк» м. Київ</span>
                        </div>
                        <div className="bank-code">
                            <span>Код банку:</span>
                            <span>320478</span>
                        </div>
                        <div className="beneficiary-account">
                            <span>Рахунок отримувача (діє включно до 12.01.2020):</span>
                            <span>26008268812</span>
                        </div>
                        <div className="number-beneficiary-account">
                            <span>Рахунок отримувача (IBAN):</span>
                            <span>UA093204780000000026008268812</span>
                        </div>
                        <button className="gratitude" onClick={props.charContribOnClose}>
                            Дякуємо за допомогу!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharContribModal;